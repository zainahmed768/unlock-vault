import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import PageHeading from "../../components/PageHeading";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { WebLogo } from "../../constant/Index";
import CommonInputField from "../../components/CommonInputField/CommonInputField";

const SignUp = () => {
  const [signup, setSignUp] = useState({
    fname: "",
    lname: "",
    email: "",
    phonenumber: "",
    password: "",
  });
  return (
    <>
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
                      <h5 className="heading-txt">Sign Up to get Started</h5>
                    </div>
                  </div>

                  <div className="auth-fields-wrapper mt-5">
                    <form>
                      <div className="form-group row mb-4">
                        <div className="col-lg-6">
                          <label>
                            <span className="text-danger">*</span> First Name
                          </label>
                          <CommonInputField
                            type="text"
                            className="form-control"
                            value={signup?.fname}
                            onChange={(e) =>
                              setSignUp({ ...signup, fname: e.target.value })
                            }
                            placeholder="John"
                            height="50px"
                          />
                        </div>
                        <div className="col-lg-6">
                          {" "}
                          <label>
                            <span className="text-danger">*</span> Last Name
                          </label>
                          <CommonInputField
                            type="text"
                            className="form-control"
                            value={signup?.lname}
                            onChange={(e) =>
                              setSignUp({ ...signup, lname: e.target.value })
                            }
                            placeholder="Doe"
                            height="50px"
                          />
                        </div>
                      </div>
                      <div className="form-group mb-4">
                        <label>
                          <span className="text-danger">*</span> Email
                        </label>
                        <CommonInputField
                          type="text"
                          className="form-control"
                          value={signup?.email}
                          onChange={(e) =>
                            setSignUp({ ...signup, email: e.target.value })
                          }
                          placeholder="youremail@gmail.com"
                          height="50px"
                        />
                      </div>
                      <div className="form-group mb-4">
                        <label>
                          <span className="text-danger">*</span> Phone Number
                        </label>
                        <CommonInputField
                          type="text"
                          className="form-control"
                          value={signup?.phonenumber}
                          onChange={(e) =>
                            setSignUp({
                              ...signup,
                              phonenumber: e.target.value,
                            })
                          }
                          placeholder="123-123-1234"
                          height="50px"
                        />
                      </div>
                      <div className="form-group mb-4">
                        <label>
                          <span className="text-danger">*</span> Password
                        </label>
                        <CommonInputField
                          type="password"
                          className="form-control"
                          placeholder="Enter the password"
                          height="50px"
                          value={signup?.password}
                          onChange={(e) =>
                            setSignUp({ ...signup, password: e.target.value })
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
                        <button type="submit" className="gradient-button w-100">
                          Sign Up
                        </button>
                      </div>

                      <div className="form-group my-3 or-row text-center">
                        <h6 className="heading-txt">OR</h6>
                      </div>

                      <div className="form-group my-3 text-center">
                        <Link to="/sign-in" className="gradient-button">
                          Login
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </PageHeader>
      {/* page header ends here */}
    </>
  );
};

export default SignUp;
