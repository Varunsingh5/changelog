// -- React and related libs
import React from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter, Redirect } from "react-router";

// -- Third Party Libs
import PropTypes from "prop-types";

// -- Custom Components
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Footer from "../../../components/Footer/Footer";
import Breadcrumbs from "../../../components/Breadbrumbs/Breadcrumbs";

// -- Component Styles
import s from "./adminLayout.module.scss";
import AdminDashboard from "../dashboard/AdminDashboard";



const AdminLayout = (props) => {
  console.log("in layout");
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <Header />
        <Sidebar />
        <main className={s.content}>
          <Breadcrumbs url={window.location.pathname} />
          <Switch>
            <Route path="/admin" exact render={()=><Redirect to="/admin/dashboard" />} />
            <Route path="/admin/dashboard" exact component={AdminDashboard} />
            {/* <Route path="/template/typography" exact component={Typography} />
            <Route path="/template/tables" exact component={Tables} />
            <Route path="/template/notifications" exact component={Notifications} />
            <Route path="/template/ui-elements" exact render={() => <Redirect to={"/template/ui-elements/charts"} />} />
            <Route path="/template/ui-elements/charts" exact component={Charts} />
            <Route path="/template/ui-elements/icons" exact component={Icons} />
          
            <Route path="/template/ui-elements/maps" exact component={Maps} />  */}

          <Route path='*' exact render={() => <Redirect to="/admin" />} />
          </Switch>
        </main>
        <Footer />
      </div>
    </div>
  );
}

AdminLayout.propTypes = {
  sidebarOpened: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
  };
}

export default withRouter(connect(mapStateToProps)(AdminLayout));
