import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import { Col, Container, Row } from "react-bootstrap";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { setUserToken } from "../../redux/reducers/AuthReducer";
import Alert from "../../components/Alert/Alert";
import {
  useResendOtpMutation,
  useVerifyAccountMutation,
  useVerifyPasswordOtpMutation,
} from "../../redux/services/AuthServices";
import { useDispatch } from "react-redux";
import { VerifyOtpValidation } from "../../helper/HelperValidation";
import { BeatLoader } from "react-spinners";

const VerifyPasswordOTP = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [otp, setOtp] = useState(null);
  const [formErrors, setFormErrors] = useState(null);
  const [verifyAccount, response] = useVerifyPasswordOtpMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(otp, "otp sdcjnsdj");
    if (VerifyOtpValidation(otp, setFormErrors)) {
      let data = new FormData();
      data.append("email", localStorage.getItem("email"));
      data.append("otp", otp);
      verifyAccount(data);
    }
  };

  useEffect(() => {
    console.log(response, "sdycgsd");
    if (response?.isSuccess) {
      //   dispatch(setUserToken(response?.data?.data));
      localStorage.setItem("otp", otp);
      Alert({
        title: "Success",
        text: response?.data?.message,
      });
      navigate("/new-password");
    }

    if (response?.isError) {
      console.log(response);
      Alert({
        title: "Error",
        text: response?.error?.data?.message,
        iconStyle: "error",
      });
    }
  }, [response]);
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
                        {formErrors?.otp && (
                          <p className="text-danger">{formErrors?.otp}</p>
                        )}
                      </div>
                      <div className="form-group my-3">
                        <button
                          type="submit"
                          onClick={handleSubmit}
                          className="gradient-button w-100"
                        >
                          {response?.isLoading ? (
                            <BeatLoader color="#fff" size={20} />
                          ) : (
                            "Submit"
                          )}
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

export default VerifyPasswordOTP;
