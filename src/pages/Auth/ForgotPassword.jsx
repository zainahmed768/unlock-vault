import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CommonInputField from "../../components/CommonInputField/CommonInputField";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
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
                    <div className="logo-txt-wrapper">
                      <h5 className="heading-txt">Password reset</h5>
                      <p>
                        You will receive instruction for resetting your password
                      </p>
                    </div>
                  </div>
                  <div className="auth-fields-wrapper mt-5">
                    <form action="">
                      <div className="form-group mb-4">
                        <label htmlFor="">
                          <span className="text-danger">*</span> Email
                        </label>
                        <CommonInputField
                          type="text"
                          value={email}
                          placeholder="Youremail@gmail.com"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-group my-3">
                        <button
                          type="button"
                          onClick={() => navigate("/new-password")}
                          className="gradient-button w-100"
                        >
                          Submit
                        </button>
                      </div>
                      <div className="form-group my-5 or-row">
                        <h6>OR</h6>
                      </div>
                      <div className="form-group my-3">
                        <div className="col-lg-6 offset-lg-3 text-center">
                          <button
                            type="submit"
                            className="gradient-button w-100"
                          >
                            Sign Up
                          </button>
                        </div>
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

export default ForgotPassword;
