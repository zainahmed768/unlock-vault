import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import PageHeading from "../../components/PageHeading";
import ProfileLayout from "../../components/layout/ProfileLayout";
import { Link } from "react-router-dom";
import "../../assets/css/profile.css";
import CommonInputField from "../../components/CommonInputField/CommonInputField";

const MyProfile = () => {
  return (
    <>
      <ProfileLayout type={"My Profile"}>
        <div class="row">
          <div class="col-lg-6 col">
            <h2 class="mt-3 mb-0 heading-txt text-uppercase">My Profile</h2>
            <p>Nunc pellentesque libero et lore</p>
          </div>

          <div class="col-lg-6 col d-flex justify-content-end my-lg-4 align-items-center">
            <Link href="/edit-profile" className="gradient-button">
              Edit Profile
            </Link>
          </div>
        </div>

        <div class="row profile-row">
          <div class="col-md-4 my-md-4 my-2 info">
            <p class="m-0 secondary-regular-font dark-color label level-5">
              First Name
            </p>
            {/* <p class="m-0 secondary-bold-font bold-font  dark-color value level-5">
              Jordan Gilbert
            </p> */}
            <CommonInputField value={"Jordan"} />
          </div>
          <div class="col-md-4 my-md-4 my-2 info ">
            <p class="m-0 secondary-regular-font dark-color label level-5">
              Last Name
            </p>
            {/* <p class="m-0 secondary-bold-font bold-font dark-color value level-5">
              Jordan Gilbert
            </p> */}
            <CommonInputField value={"Gilbert"} />
          </div>
          <div class="col-md-4 my-md-4 my-2 info ">
            <p class="m-0 secondary-regular-font dark-color label level-5">
              Phone Number
            </p>
            {/* <p class="m-0 secondary-bold-font bold-font dark-color value level-5">
              123456789
            </p> */}
            <CommonInputField value={"123456789"} />
          </div>
        </div>
        <div class="d-flex profile-row flex-column flex-md-row align-items-start align-items-md-center my-md-3 my-2">
          <div class="info col-md-6">
            <p class="m-0 secondary-regular-font dark-color label level-5">
              Email Address
            </p>
            {/* <p class="m-0 secondary-bold-font bold-font dark-color value level-5">
              Jordangilbert@sample.com
            </p> */}
            <CommonInputField value={"Jordangilbert@sample.com"} />
          </div>
          <div class="info col-md-6 px-md-3 px-0 my-md-3 my-2">
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
      </ProfileLayout>
    </>
  );
};

export default MyProfile;
