import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import { Col, Container, Row } from "react-bootstrap";
import CommonInputField from "../../components/CommonInputField/CommonInputField";
import { useNavigate } from "react-router-dom";

const NewPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState({
    password: "",
    confirm_password: "",
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
                    <div className="logo-txt-wrapper">
                      <h5 className="heading-txt">Set New Password</h5>
                      <p>
                        You will receive instruction for resetting your password
                      </p>
                    </div>
                  </div>
                  <div className="auth-fields-wrapper mt-5">
                    <form action="">
                      <div className="form-group mb-4">
                        <label htmlFor="">New password</label>
                        <CommonInputField
                          type="password"
                          placeholder="*************"
                          value={password?.password}
                          onChange={(e) =>
                            setPassword({
                              ...password,
                              password: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="form-group mb-4">
                        <label htmlFor="">Re-enter Password</label>
                        <CommonInputField
                          type="password"
                          placeholder="*************"
                          value={password?.confirm_password}
                          onChange={(e) =>
                            setPassword({
                              ...password,
                              confirm_password: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="form-group mt-5">
                        <button
                          type="submit"
                          onClick={() => navigate("/verify-otp")}
                          className="gradient-button w-100"
                        >
                          Submit
                        </button>
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

export default NewPassword;
