import React, { useState } from "react";
import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";
import PageHeading from "../../components/PageHeading";
import Footer from "../../components/Footer";
import { WebLogo } from "../../constant/Index";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../../assets/css/login.css";
import CommonInputField from "../../components/CommonInputField/CommonInputField";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  return (
    <>
      {/* <Header /> */}
      {/* page header starts here */}
      <PageHeader>
        <section className="auth-sec">
          <Container>
            <Row>
              <Col lg="2"></Col>
              <Col lg="8">
                <div className="auth-card-wrapper">
                  <div className="auth-logo-wrapper text-center">
                    <figure>
                      <Link to="/">
                        <img src={WebLogo} className="img-fluid" alt="logo" />
                      </Link>
                    </figure>
                    <div className="logo-txt-wrapper mt-3">
                      <h5 className="heading-txt">Login to get Started</h5>
                    </div>
                  </div>

                  <div className="auth-fields-wrapper mt-5">
                    <form>
                      <div className="form-group mb-4">
                        <label>
                          <span className="text-danger">*</span>{" "}
                          <span>Email</span>
                        </label>
                        <CommonInputField
                          type="text"
                          className="form-control"
                          value={login?.email}
                          onChange={(e) =>
                            setLogin({ ...login, email: e.target.value })
                          }
                          placeholder="youremail@gmail.com"
                          height="50px"
                        />
                      </div>

                      <div className="form-group mb-4">
                        <label>
                          <span className="text-danger">*</span>{" "}
                          <span>Password</span>
                        </label>
                        <CommonInputField
                          type="password"
                          className="form-control"
                          placeholder="Enter the password"
                          height="50px"
                          value={login?.password}
                          onChange={(e) =>
                            setLogin({ ...login, password: e.target.value })
                          }
                        />
                      </div>

                      <div className="form-group my-4">
                        <Link
                          className="text-secondary forgot-text text-decoration-none"
                          to="/forgot-password"
                        >
                          Forgot password?
                        </Link>
                      </div>

                      <div className="form-group my-3">
                        <button
                          type="submit"
                          onClick={(e) => navigate("/my-profile")}
                          className="gradient-button w-100"
                        >
                          Login
                        </button>
                      </div>

                      {/* <div className="form-group my-3 or-row text-center">
                        <h6 className="heading-txt">OR</h6>
                      </div>

                      <div className="form-group my-3 text-center">
                        <Link to="/sign-up" className="gradient-button">
                          Sign Up
                        </Link>
                      </div> */}
                    </form>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </PageHeader>
      {/* page header ends here */}

      {/* <Footer /> */}
    </>
  );
};

export default Login;
