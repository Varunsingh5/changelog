

/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter, Redirect, Link } from "react-router-dom";
import { Route, useHistory, useLocation, useParams } from "react-router";
import { connect } from "react-redux";
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  // FormText,
  // Input,
} from "reactstrap";
import Widget from "../../components/Widget/Widget";
import Footer from "../../components/Footer/Footer";
import { loginUser } from "../../actions/auth";
// import hasToken from "../../services/authService";

import loginImage from "../../assets/loginImage.svg";
import SofiaLogo from "../../components/Icons/SofiaLogo.js";
// import GoogleIcon from "../../components/Icons/AuthIcons/GoogleIcon.js";
// import TwitterIcon from "../../components/Icons/AuthIcons/TwitterIcon.js";
// import FacebookIcon from "../../components/Icons/AuthIcons/FacebookIcon.js";
// import GithubIcon from "../../components/Icons/AuthIcons/GithubIcon.js";
// import LinkedinIcon from "../../components/Icons/AuthIcons/LinkedinIcon.js";


import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { FormControl, Alert } from "react-bootstrap";
import { query, collection, where, doc, getDoc, setDoc, getDocs } from "firebase/firestore";
import { useUserAuth } from "../../components/context/UserAuthContext";
import { db } from "../../firebase";
import moment from "moment";



const Login = (props) => {

  // const { setUpRecaptha } = useUserAuth();
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  // const [value, setValue] = useState(false);
  const { setUpRecaptha } = useUserAuth();


  const history = useHistory();
  const params = useLocation().search;
  const phone = new URLSearchParams(params).get('phone');
  // const [state, setState] = useState({
  //   email: 'admin@flatlogic.com',
  //   password: 'password',
  // })

  // const doLogin = (e) => {

  //   e.preventDefault();
  //   props.dispatch(loginUser({ password: state.password, email: state.email, history }))
  // }

  // const changeCreds = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.value })
  // }


  // const handleClick = () => {
  // console.log("jkhbhjbhj");
  //   history.push("/admin/login")
  // }


  const getOtp = async (e) => {
    e.preventDefault();
    // console.log(number);
    setError("");
    console.log(phone);
    console.log(number);
    if (number === "" || number === undefined) {
      return setError("Please enter a valid phone number!");
    }
    else {
      try {
       
        //get doc and check if is verfied true
        // console.log("here1");
        // console.log(phone);
        const q = query(collection(db, "userList"), where("phone", "==", phone?phone:number));

        const querySnapshot = await getDocs(q);
        const dd = [];
    
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          dd.push(doc.data());
        });
        if (dd.length>0) {
          const response = await setUpRecaptha(number);
          setResult(response);
          setFlag(true);
          console.log("here");
        }
        else {
          alert("number not register please contact admin")
        }
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("Please enter a valid otp!");
    if (otp === "" || otp === null) return;
    try {
      console.log("result", result);
      await result.confirm(otp)
        .then(async (confirmationResult) => {
          console.log("jdvfsdnhfjdshi", confirmationResult);
          localStorage.setItem('isAuth', 'true')
          localStorage.setItem('user', JSON.stringify(confirmationResult?.user))
          localStorage.setItem('role', "user");
          console.log("SSzfasfas", confirmationResult?.user);
          const docRef = doc(db, "userList", confirmationResult?.user?.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            localStorage.setItem('role', docSnap.data().role);
            //update doc isverified to true
            await updateDoc(docRef, {
              isVerified: true
            });
            // if (docSnap.data().role == "user") {
            history.push("/user");
          }
          else {
          return;
          }
        })
        .catch(async (err) => {
          console.log("error in confirm otp", err);
        })
    } catch (err) {
      setError(err.message);
    }
  };

  // const fetchUserName = async (user) => {
  //   try {
  //     const q = query(collection(db, "usersList"), where("uid", "==", user?.uid));
  //     const doc = await getDoc(q);
  //     const data = doc.docs[0].data();
  //     setName(data.name);
  //     return ({ user })
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  return (
    <div className="auth-page">
      <Container className="col-12">
        <Row className="d-flex align-items-center">
          <Col xs={12} lg={6} className="left-column">
            <Widget className="widget-auth widget-p-lg">
              <div className='img1' >
                <img style={{ width: "40%", marginLeft: "100px", }} src="https://upwork-usw2-prod-assets-static.s3.us-west-2.amazonaws.com/org-logo/1145930514433441792" alt="img" />
              </div>
              <div className="d-flex align-items-center justify-content-between py-3">
                <p className="auth-header mb-0">Login</p>
                <div className="logo-block">
                  <SofiaLogo />
                  <p className="mb-0">SQUADMINDS</p>
                </div>
              </div>
              {error && <>{error}</>}
              <form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
                <FormGroup className="mb-3" controlId="formBasicEmail">
                  <PhoneInput
                    defaultCountry="IN"
                    value={phone?phone:number}
                    disabled={phone?true:false}
                    onChange={setNumber}
                    placeholder="Enter Phone Number"
                  />
                  <div id="recaptcha-container"></div>
                </FormGroup>
                <div className="button-right">
                  <Link to="/">
                    <Button variant="secondary" style={{ backgroundColor: "blue", color: "white" }}>Cancel</Button>
                  </Link>
                  &nbsp;
                  <Button type="Submit" variant="primary" style={{ backgroundColor: "blue", color: "white" }}>
                    Send Otp
                  </Button>
                </div>
                {/* <p style={{ textAlign: "center", marginTop: "20px" }} onClick={() => setValue(true)} >
                Copyright © 2021 squadminds
              </p> */}
              </form>
              <form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
                <FormGroup className="mb-3" controlId="formBasicOtp">
                  <FormControl
                    type="otp"
                    placeholder="Enter OTP"
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </FormGroup>
                <div className="button-right">
                  <Link to="/">
                    <Button variant="secondary" style={{ backgroundColor: "blue", color: "white" }}>Cancel</Button>
                  </Link>
                  &nbsp;
                  <Button type="submit" variant="primary" style={{ backgroundColor: "blue", color: "white" }}>
                    Verify
                  </Button>
                </div>
              </form>
            </Widget>
          </Col>
          <Col xs={0} lg={6} className="right-column">
            <div>
              <img src={loginImage} alt="Error page" />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}
Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
}
function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage,
  };
}
export default withRouter(connect(mapStateToProps)(Login));



