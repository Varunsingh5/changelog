// -- React and related libs
import React, { Component, useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router";
// import { HashRouter } from "react-router-dom";

// -- Redux
import { connect } from "react-redux";

// -- Custom Components
import LayoutComponent from "./components/Layout/Layout";
import ErrorPage from "./pages/error/ErrorPage";
import Login from "./pages/login/UserLogin";
// import Register from "./pages/register/Register";
// -- Redux Actions
// import { logoutUser } from "./actions/auth";

// -- Third Party Libs
import { ToastContainer } from "react-toastify";

// -- Services
import isAuthenticated from "./services/authService";

// -- Component Styles
import "./styles/app.scss";
import AdminLogin from "./pages/login/AdminLogin";
import AdminLayout from "./pages/admin/Layout/AdminLayout"
import UserLayout from "./pages/user/Layout/UserLayout";
import { UserAuthContextProvider } from "../src/components/context/UserAuthContext";

const PrivateRoute = ({ dispatch, component, ...rest }) => {
  return <Route
    {...rest}
    component={props =>
      isAuthenticated(JSON.parse(localStorage.getItem("authenticated"))) ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
};

const App = (props) => {

  // const [role, setRole] = useState("");

  // useEffect(() => {
  //   setRole(localStorage.getItem("role"));
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [localStorage.getItem("role")]);


  return (
    <div>
      <ToastContainer />
      <UserAuthContextProvider>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              isAuthenticated(JSON.parse(localStorage.getItem("authenticated"))) ? (
                <Redirect to="/user" />
              ) : (
                <Redirect to="/user/login" />
              )
            }
          />

          <Route
            path="/user/login"
            render={() =>
              isAuthenticated(JSON.parse(localStorage.getItem("authenticated"))) ? <Redirect to="/user" /> : <Login />
            }
          />
{/* 
          {role === "user" ? (
            <Route
              path="/user/dashboard"
              element={
                <UserLogin />
              }
            />
          ) : (
            <Route
              path="/admin/dashboard"
              element={
                <AdminLogin />
              }
            />
          )} */}
          <Route path="/user" render={() => <UserLayout />} />
          <Route path="/admin/login" render={() => <AdminLogin />} />
          <Route path="/admin" render={() => <AdminLayout />} />

          {/* <Route path="/register" exact component={Register} /> */}
          <Route path="/error" exact component={ErrorPage} />
          <Route path='*' exact={true} component={() => <Redirect to="/error" />} />
        </Switch>
      </UserAuthContextProvider>
    </div>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
