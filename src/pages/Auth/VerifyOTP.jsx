import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import { Col, Container, Row } from "react-bootstrap";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router-dom";

const VerifyOTP = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(null);
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
                      <h5 className="heading-txt">Verify OTP</h5>
                      <p>You will receive OTP on your Email</p>
                    </div>
                  </div>
                  <div className="auth-fields-wrapper mt-5">
                    <form action="">
                      <div className="form-group mb-4 otp-fields-wrapper">
                        <label htmlFor="">
                          <span className="text-danger">*</span> Email
                        </label>
                        <OTPInput
                          value={otp}
                          onChange={setOtp}
                          numInputs={6}
                          renderSeparator={<span>-</span>}
                          renderInput={(props) => <input {...props} />}
                        />
                        {/* {formErrors?.otp && (
                          <p className="text-danger">{formErrors?.otp}</p>
                        )} */}
                      </div>
                      <div className="form-group my-3">
                        <button
                          type="submit"
                          onClick={() => navigate("/")}
                          className="gradient-button w-100"
                        >
                          Submit
                        </button>
                        <div className="form-group my-4 text-center">
                          <p
                            className="text-decoration-none "
                            // to="/forgot-password"
                            // onClick={HandleSend}
                            style={{ cursor: "pointer", color: "#6b00ff" }}
                          >
                            Resend Otp
                          </p>
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

export default VerifyOTP;
