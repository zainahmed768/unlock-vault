import React from "react";
import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";
import PageHeading from "../../components/PageHeading";
import { Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import { client1Img, client2Img, vault1 } from "../../constant/Index";
import { useParams } from "react-router-dom";
import { useGetCourseDetailsQuery } from "../../redux/services/CourseServices";
import { BeatLoader } from "react-spinners";

const CoursesDetail = () => {
  const params = useParams();
  const { data: singleCourse, isLoading } = useGetCourseDetailsQuery(
    params?.id
  );
  let singleData = singleCourse?.data;
  console.log(params, singleCourse, "ahscbas");
  return (
    <>
      <Header />
      {/* page Header starts here */}
      <PageHeader>
        <PageHeading
          heading={singleData?.title}
          text={
          singleData?.short_description
          }
        />
        {isLoading ? (
          <div
            className="loader-wrapper d-flex justify-content-center align-items-center"
            style={{ height: "400px" }}
          >
            <BeatLoader color="#6b00ff " size={20} />
          </div>
        ) : (
          <section className="course-detail-section my-5">
            <Container>
              <div
                className="row"
                style={{
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="rounded_img">
                    <img
                      src={singleData?.thumbnail_url}
                      alt="Course"
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "327px",
                        objectFit: "cover",
                        border: "1px solid rgb(146 144 144)",
                        outlineColor: "rgba(0, 0, 0, 0.5)",
                        padding: "5px",
                      }}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="pt-3 course-heading-wrapper">
                    <h3 className="text-capitalized heading-txt">
                      {singleData?.title}
                    </h3>
                  </div>
                  <div className="py-3">
                    <span className="rating-stars">⭐⭐⭐⭐⭐</span>
                    <span className="ms-2 rating">{singleData?.rating}</span>
                  </div>
                  <div className="col-lg-10">
                    <p className="reg-font level-8 text-white">
                      {singleData?.short_description}
                    </p>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-lg-4 setmarging">
                      <span className="reg-font level-8 text-white">Price</span>
                      <h4 className="text-uppercase text-white">
                        {Number(singleData?.price).toFixed(2) +
                          " " +
                          singleData?.currency_token?.currency_code}
                      </h4>
                    </div>
                    <div className="col-lg-12 my-3">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="learn-section py-5">
                <h3 className="text-capitalized heading-txt">
                  What You Will Learn
                </h3>
                <div className="row">
                  <div className="col-lg-12 px-lg-0">
                    <ul className="learn-list">
                      {singleData?.what_you_learn?.map((single, i) => {
                        return <li className="text-white">{single}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <h3 className="text-capitalized heading-txt">Description</h3>
                <p className="reg-font level-8 dark-color text-white">
                  {singleData?.description}
                </p>
              </div>
              {singleData?.requirements > 0 && (
                <div className="my-5">
                  <h3 className="text-capitalized heading-txt">Requirements</h3>
                  <ul className="learn-list">
                    {singleData?.requirements?.map((single, i) => {
                      return <li className="text-white">{single}</li>;
                    })}
                  </ul>
                </div>
              )}

              {/* <div className="my-5">
                <h3 className="text-capitalized heading-txt">
                  This Course Includes
                </h3>
                <div className="row mt-3">
                  {singleData?.lessons?.map((single, i) => {
                    return (
                      <div className="col-md-6 col-sm-6">
                        <p className="text-white">
                          <span className="me-3">
                            <img src="/icons/icon1.png" alt="" />
                          </span>
                          {single?.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div> */}
              <div className="my-5">
                <h3 className="text-capitalized heading-txt mb-3">
                  Introductory Video
                </h3>
                <div className="video-player-wrapper position-relative">
                  <video
                    src={singleData?.intro_video_url}
                    width="100%"
                    poster="/images/thumbnail.jpg"
                    controls
                  ></video>
                </div>
              </div>
              <div className="video_listing_sec">
                <h3 className="text-capitalized heading-txt mb-3">
                  Video Listing
                </h3>
                <div className="row">
                  {singleData?.lessons?.map((single, i) => {
                    return (
                      <div className="col-md-6">
                        <h6 className="semi-b-font level-6 text-uppercase text-white">
                          Chapter 1: {single?.title}
                          {single?.is_free == 1 ? (
                            <span class="badge badge-primary ms-3">Free</span>
                          ) : (
                            <span class="badge badge-secondary ms-3">Paid</span>
                          )}
                        </h6>
                        <p className="med-font level-7">
                          {single?.description?.length > 0
                            ? single?.description
                            : "Learn about the basics of the course."}
                        </p>
                        <span>
                          <img src="/icons/video_icon.png" alt="" width="20" />
                          <span className="med-font level-8 secondary-3 ps-2">
                            {Number(single?.video_duration).toFixed(2)} Minutes
                          </span>
                        </span>
                        <hr />
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* <div className="my-5">
                <h3 className="text-capitalized heading-txt mb-3">
                  Featured Reviews
                </h3>
                <div className="row">
                  <div className="col-md-4">
                    <div className="feedback-card">
                      <img
                        src={client1Img}
                        alt="User"
                        className="img-fluid mb-2"
                      />
                      <h5 className="semi-b-font heading-txt">John Doe</h5>
                      <p className="reg-font level-8">
                        "Excellent course! Very detailed and well-structured."
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="feedback-card">
                      <img
                        src={client2Img}
                        alt="User"
                        className="img-fluid mb-2"
                      />
                      <h5 className="semi-b-font heading-txt">Jane Smith</h5>
                      <p className="reg-font level-8">
                        "Loved the examples and the pacing of the lessons."
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
            </Container>
          </section>
        )}
      </PageHeader>
      <Footer />
    </>
  );
};

export default CoursesDetail;
