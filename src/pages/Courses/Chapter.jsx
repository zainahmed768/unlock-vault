import React from "react";
import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";
import PageHeading from "../../components/PageHeading";
import Footer from "../../components/Footer";
import { Container } from "react-bootstrap";
import "../../assets/css/chapter.css";

const Chapter = () => {
  return (
    <>
      <Header />
      <PageHeader>
        <PageHeading
          heading={"Chapter Details"}
          text={
            "Lorem ipsum dolor sit amet consectetur. Augue commodo elementum augue placerat eleifend placer"
          }
        />
      </PageHeader>
      <section className="view-course-section py-5 my-5">
        <Container>
          <div className="row">
            {/* Left Section */}
            <div className="col-lg-8">
              <div className="view-course-img-wrapper position-relative">
                <div
                  className="video-placeholder bg-dark text-white d-flex justify-content-center align-items-center"
                  style={{ height: "400px" }}
                >
                  <p className="mb-0">Course Introductory Video</p>
                </div>
              </div>

              <div className="view-course-content-wrapper mt-3">
                <div className="view-course-headings-wrapper">
                  <h2 className="heading-txt text-capitalized">Course Title</h2>
                  <p>
                    Course description goes here. This explains what the course
                    is about in detail.
                  </p>
                </div>
                {/* 
                <div className="view-course-btn-wrapper d-flex gap-3 mb-5">
                  <span className="GeneralButton">
                    <button type="button">Submit Review</button>
                  </span>
                  <button
                    type="button"
                    className="btn btn-primary text-uppercase"
                  >
                    Download Certificate
                  </button>
                </div> */}

                <div className="view-course-result-wrapper">
                  {/* <div className="view-course-result-heading-wrapper">
                    <h3 className="heading-txt text-capitalized">
                      Results
                    </h3>
                  </div>
                  <div className="view-course-result-list-wrapper">
                    <ul className="p-0">
                      <li>Chapters Covered: 10</li>
                      <li>Quiz Percentage: 85%</li>
                      <li>Quiz Score By Chapters:</li>
                      <li>Quiz Total Marks: 100</li>
                      <li>Achieved Marks: 85</li>
                    </ul>
                  </div> */}
                </div>

                <div className="row mb-3">
                  <div className="col-lg-8">
                    <div className="view-courses-chapter-wrapper">
                      <div className="chapters-tags-wrapper mt-3 d-flex gap-2 flex-wrap">
                        <div className="chapter-tag-wrapper">
                          <span className="badge bg-dark">
                            Chapter 1 : 10/8
                          </span>
                        </div>
                        <div className="chapter-tag-wrapper">
                          <span className="badge bg-dark">
                            Chapter 2 : 15/13
                          </span>
                        </div>
                        <div className="chapter-tag-wrapper">
                          <span className="badge bg-dark">
                            Chapter 3 : 20/18
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-lg-4">
              <div className="courses-sidebar-detail-wrapper">
                <div className="course-sidebar-card-wrapper">
                  <div className="courses-sidebar-heading-wrapper">
                    <h4 className="text-uppercase level-4 heading-font">
                      Course Details
                    </h4>
                  </div>

                  {/* <div className="course-completeing-wrap my-3">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div> */}

                  {/* <div className="course-stats-wrapper">
                    <ul className="m-0 p-0">
                      <li>
                        <span className="property">Progress :</span>{" "}
                        <span className="value">75% Completed</span>
                      </li>
                      <li>
                        <span className="property">Chapters :</span>{" "}
                        <span className="value">12</span>
                      </li>
                      <li>
                        <span className="property">Total Quizzes :</span>{" "}
                        <span className="value">6</span>
                      </li>
                      <li>
                        <span className="property">Total Marks :</span>{" "}
                        <span className="value">100</span>
                      </li>
                      <li>
                        <span className="property">Achieved Marks :</span>{" "}
                        <span className="value">85</span>
                      </li>
                    </ul>
                  </div> */}
                </div>

                <div className="course-content-wrapper mt-3">
                  {/* <div className="course-content-heading-wrapper">
                    <h4 className="level-4 heading-font text-uppercase">
                      Course Content
                    </h4>
                  </div> */}

                  <div className="chapters-tags-wrapper mt-3 d-flex gap-2 flex-wrap">
                    <span className="badge bg-secondary">
                      Chapter 1 - Introduction
                    </span>
                    <span className="badge bg-secondary">
                      Chapter 2 - Basics
                    </span>
                    <span className="badge bg-secondary">
                      Chapter 3 - Advanced Topics
                    </span>
                    <span className="badge bg-secondary">
                      Chapter 4 - Summary
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Chapter;
