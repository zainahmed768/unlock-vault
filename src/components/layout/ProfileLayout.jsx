import React, { useState } from "react";
// import profileImg from "../../assets/images/profile.png";
// import "../ProfileLayout/profileLayout.css";
import { NavLink, useLocation } from "react-router-dom";

import Header from "../Header";
import PageHeader from "../PageHeader";
import PageHeading from "../PageHeading";
import Sidebar from "./Sidebar";
import { client1Img } from "../../constant/Index";
import Footer from "../Footer";
import { useSelector } from "react-redux";

const ProfileLayout = ({ children, type, sidebar = true, profileImg }) => {
  const location = useLocation(); // Get current route
  const user = useSelector((state) => state?.AuthReducer?.user);
  //   console.log(sidebar, "sidebar");
  //   const [imageUrl, setImageUrl] = useState(profileImg);

  //   const handleChange = (info) => {
  //     console.log("Upload Info:", info.file);

  //     if (info.file.status === "done") {
  //       // Check if the server response contains the URL
  //       const uploadedUrl = info.file?.response?.url; // Adjust this based on your API response structure

  //       if (uploadedUrl) {
  //         setImageUrl(uploadedUrl); // Set the image URL from the response
  //       } else {
  //         console.error("Image URL not found in the response");
  //       }
  //     }
  //   };

  return (
    <>
      <Header />
      <PageHeader>
        <PageHeading heading={type} />
      </PageHeader>
      {/* <PrimaryHeader
        pageTitle={type}
        pageDesc={
          "Stay Ahead of the Game with SafetyBuilt’s Site Safety Training Courses"
        }
      /> */}
      <section className="profile__wrapp  mt-5 site_width">
        <div className="container">
          <div className="row">
            {sidebar == true ? (
              <>
                <div className="col-lg-3">
                  <div className="profile__sidebar position-relative mb-3 py-3">
                    <div className="profile__info mb-4">
                      {/* <div className="img__wrapp position-relative">
                        <img
                          src={profileImg}
                          alt="sol tanning"
                          className="profile__img"
                        />
                        <label className="position-absolute">
                          <img src={fileUpload} alt="fileUpload" />
                          <input
                            type="file"
                            name="file-upload"
                            className="d-none"
                          />
                        </label>
                      </div> */}
                      <div className="img__wrapp position-relative">
                        <img
                          // src={client1Img}
                          alt="sol tanning"
                          className="profile__img"
                          // src={profileImg ? profileImg : client1Img}
                          src={
                            user?.profile_img_url ? user?.profile_img_url : profileImg
                          }
                        />
                        {/* <label className="position-absolute">
                          <img src={fileUpload} alt="fileUpload" />
                          <input
                            type="file"
                            name="file-upload"
                            className="d-none"
                          />
                        </label> */}
                      </div>
                      <div className="heading-bg-wrapper">
                        <h5 className="text-uppercase heading-txt text-center">
                          {children.props?.userData?.first_name
                            ? `${children.props.userData.first_name} ${children.props.userData.last_name}`
                            : "User Name"}
                        </h5>
                      </div>
                    </div>
                    <Sidebar />
                  </div>
                </div>
                <div className="col-lg-8 offset-lg-2 ms-lg-5 ">{children}</div>
              </>
            ) : (
              <>{children}</>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProfileLayout;
