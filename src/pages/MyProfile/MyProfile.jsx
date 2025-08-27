import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import PageHeading from "../../components/PageHeading";
import ProfileLayout from "../../components/layout/ProfileLayout";
import { Link } from "react-router-dom";
import "../../assets/css/profile.css";
import CommonInputField from "../../components/CommonInputField/CommonInputField";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { UpdateProfileValidation } from "../../helper/HelperValidation";
import { useUpdateProfileMutation } from "../../redux/services/AuthServices";
import Alert from "../../components/Alert/Alert";
import InputMask from "react-input-mask";
import { setUserToken } from "../../redux/reducers/AuthReducer";
const MyProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.AuthReducer?.user);
  const [updateProfile, response] = useUpdateProfileMutation();
  const [edit, setEdit] = useState(false);
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    profile_img: null, // image
  });
  const [formErrors, setFormErrors] = useState(null);
  const handleEditProfile = () => {
    setEdit((edit) => !edit);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (UpdateProfileValidation(userData, setFormErrors)) {
      console.log("Profile updated:", userData);
      let data = new FormData();
      userData?.first_name && data.append("first_name", userData?.first_name);
      userData?.last_name && data.append("last_name", userData?.last_name);
      userData?.phone_number &&
        data.append("phone_number", userData?.phone_number);
      userData?.profile_img &&
        data.append("profile_img", userData?.profile_img); // ✅ image

      updateProfile(data);
    }
  };

  useEffect(() => {
    setUserData({
      first_name: user?.first_name ? user?.first_name : "",
      last_name: user?.last_name ? user?.last_name : "",
      email: user?.email ? user?.email : "",
      phone_number: user?.phone_number ? user?.phone_number : "",
      profile_img: null,
    });
  }, [user]);

  useEffect(() => {
    console.log(response, "response");

    if (response?.isSuccess) {
      Alert({
        title: "Success",
        text: response?.data?.message,
      });
      dispatch(setUserToken({ user: response?.data?.data }));
      setFormErrors(null); // clear errors after success
      setEdit(false);
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
      <ProfileLayout type={"My Profile"} profileImg={user?.profile_img}>
        <div class="row">
          <div class="col-lg-6 col">
            <h2 class="mt-3 mb-0 heading-txt text-uppercase">My Profile</h2>
            <p>Nunc pellentesque libero et lore</p>
          </div>

          <div class="col-lg-6 col d-flex justify-content-end my-lg-4 align-items-center">
            <Button onClick={handleEditProfile} className="gradient-button">
              Edit Profile
            </Button>
          </div>
        </div>

        <div class="row profile-row">
          <div class="col-md-4 my-md-4 my-2 info">
            <p class="m-0 secondary-regular-font dark-color label level-5">
              First Name
            </p>
            <CommonInputField
              value={userData?.first_name}
              onChange={(e) =>
                setUserData({ ...userData, first_name: e.target.value })
              }
              placeholder="Enter the First Name"
              errors={formErrors?.first_name ? formErrors?.first_name : null}
              disabled={!edit}
              maxLength={15}
            />
          </div>
          <div class="col-md-4 my-md-4 my-2 info ">
            <p class="m-0 secondary-regular-font dark-color label level-5">
              Last Name
            </p>

            <CommonInputField
              value={userData?.last_name}
              onChange={(e) =>
                setUserData({ ...userData, last_name: e.target.value })
              }
              placeholder="Enter the Last Name"
              errors={formErrors?.last_name ? formErrors?.last_name : null}
              disabled={!edit}
              maxLength={15}
            />
          </div>
          <div class="col-md-4 my-md-4 my-2 info">
            <p class="m-0 secondary-regular-font dark-color label level-5">
              Email
            </p>
            <CommonInputField
              value={userData?.email}
              // errors={formErrors?.first_name ? formErrors?.first_name : null}
              disabled={true}
            />
          </div>
          {/* {user?.phone_number && ( */}
          <div class="col-md-4 my-md-4 my-2 info ">
            <p class="m-0 secondary-regular-font dark-color label level-5">
              Phone Number
            </p>

            <InputMask
              value={userData?.phone_number}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  phone_number: e.target.value,
                })
              }
              style={{ height: "50px" }}
              mask="999-999-9999"
              placeholder="Enter the Phone Number"
              className={
                formErrors?.phone_number
                  ? "border-danger form-control dashboard-input"
                  : "form-control dashboard-input"
              }
              maskChar=" "
              disabled={!edit}
            />
            {formErrors?.phone_number ? (
              <p
                className="error"
                style={{
                  color: "red",
                  fontSize: "13px",
                  marginBottom: "0",
                  marginTop: "10px",
                }}
              >
                {formErrors?.phone_number}
              </p>
            ) : null}
          </div>
          {/* )} */}
          {/* {edit && ( */}
          <div className="col-md-4 my-md-4 my-2 info">
            <p className="m-0 secondary-regular-font dark-color label level-5">
              Profile Image
            </p>
            <input
              type="file"
              accept="image/*"
              className="form-control"
              onChange={(e) =>
                setUserData({ ...userData, profile_img: e.target.files[0] })
              }
              disabled={!edit}
            />
          </div>
          {/* )} */}
          <div class="col-md-4 my-md-4 my-2 info ">
            <p class="m-0 secondary-regular-font dark-color label level-5">
              Password
            </p>
            <p class="m-0 secondary-bold-font bold-font dark-color value level-5">
              <span class=" secondary-bold-font dark-color password level-5">
                **************
              </span>{" "}
              <Link
                to={"/change-password"}
                className="secondary-bold-font dark-color level-5"
              >
                {" "}
                CHANGE PASSWORD
              </Link>
            </p>
          </div>
        </div>

        {edit && (
          <div class="d-flex profile-row flex-column flex-md-row align-items-start align-items-md-center my-md-3 my-2">
            <div class="info col-md-6">
              <Button onClick={handleSubmit} className="gradient-button">
                Save
              </Button>
            </div>
          </div>
        )}
      </ProfileLayout>
    </>
  );
};

export default MyProfile;
