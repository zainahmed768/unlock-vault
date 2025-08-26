import React, { useEffect, useState } from "react";
import ProfileLayout from "../../components/layout/ProfileLayout";
import CommonInputField from "../../components/CommonInputField/CommonInputField";
import { Button } from "react-bootstrap";
import { useChangeProfilePasswordMutation } from "../../redux/services/AuthServices";
import { ChangePasswordValidation } from "../../helper/HelperValidation";
import { BeatLoader } from "react-spinners";
import Alert from "../../components/Alert/Alert";

const ChangePassword = () => {
  const [password, setPassword] = useState({
    current_password: "",
    new_password: "",
    new_password_confirmation: "",
  });
  const [formErrors, setFormErrors] = useState(null);
  const [changeProfilePassword, response] = useChangeProfilePasswordMutation();
  const handleSubmit = () => {
    if (ChangePasswordValidation(password, setFormErrors)) {
      let data = new FormData();
      data.append("current_password", password?.current_password);
      data.append("new_password", password?.new_password);
      data.append(
        "new_password_confirmation",
        password?.new_password_confirmation
      );
      changeProfilePassword(data);
    }
  };

  useEffect(() => {
    if (response?.isSuccess) {
      Alert({
        title: "Success",
        text: response?.data?.message,
      });
      setFormErrors(null);
      setPassword({
        current_password: "",
        new_password: "",
        new_password_confirmation: "",
      });
    }

    if (response?.isError) {
      const backendErrors = response?.error?.data?.errors;
      if (backendErrors) {
        setFormErrors(backendErrors); // <-- store backend validation errors
      }

      Alert({
        title: "Error",
        text: response?.error?.data?.message,
        iconStyle: "error",
      });
    }
  }, [response]);
  return (
    <>
      <ProfileLayout type={"My Profile"}>
        <div class="row">
          <div class="col-lg-6 col">
            <h2 class="mt-3 mb-0 heading-txt text-uppercase">My Profile</h2>
            <p>Nunc pellentesque libero et lore</p>
          </div>
        </div>

        <div class="row profile-row">
          <div class="col-md-4 my-md-4 my-2 info">
            <p class="m-0 secondary-regular-font dark-color label level-5">
              Current password
            </p>
            <CommonInputField
              type={"password"}
              value={password?.current_password}
              onChange={(e) =>
                setPassword({ ...password, current_password: e.target.value })
              }
              errors={
                formErrors?.current_password
                  ? formErrors?.current_password
                  : null
              }
            />
          </div>
          <div class="col-md-4 my-md-4 my-2 info ">
            <p class="m-0 secondary-regular-font dark-color label level-5">
              New password
            </p>

            <CommonInputField
              type={"password"}
              value={password?.new_password}
              onChange={(e) =>
                setPassword({ ...password, new_password: e.target.value })
              }
              errors={
                formErrors?.new_password ? formErrors?.new_password : null
              }
            />
          </div>
          <div class="col-md-4 my-md-4 my-2 info ">
            <p class="m-0 secondary-regular-font dark-color label level-5">
              Last Name
            </p>

            <CommonInputField
              type={"password"}
              value={password?.new_password_confirmation}
              onChange={(e) =>
                setPassword({
                  ...password,
                  new_password_confirmation: e.target.value,
                })
              }
              errors={
                formErrors?.new_password_confirmation
                  ? formErrors?.new_password_confirmation
                  : null
              }
            />
          </div>
        </div>

        <div class="d-flex profile-row flex-column flex-md-row align-items-start align-items-md-center my-md-3 my-2">
          <div class="info col-md-6">
            <Button
              onClick={handleSubmit}
              disabled={response?.isLoading}
              className="gradient-button"
            >
              {response?.isLoading ? (
                <BeatLoader color="#fff" size={20} />
              ) : (
                "Save"
              )}
            </Button>
          </div>
        </div>
      </ProfileLayout>
    </>
  );
};

export default ChangePassword;
