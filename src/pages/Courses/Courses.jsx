import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";
import PageHeading from "../../components/PageHeading";
import { Col, Container, Row } from "react-bootstrap";
import { vault1, vault2 } from "../../constant/Index";
import "../../assets/css/course.css";
import { IoSearch } from "react-icons/io5";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { useGetAllCoursesQuery } from "../../redux/services/CourseServices";
import { Pagination } from "antd";
import { BeatLoader } from "react-spinners";
const Courses = () => {
  const [current, setCurrent] = useState(1);
  const { data: allcourses, isLoading } = useGetAllCoursesQuery();
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    if (allcourses?.data?.data) {
      setAllCourses(allcourses.data.data);
    }
  }, [allcourses]);

  const pageSize = allCourses?.limit || 6;
  const total = allCourses?.total;

  const onChange = (page) => {
    setCurrent(page);
  };
  console.log(allcourses, allCourses, "allcourses");
  return (
    <>
      <Header />
      {/* page Header starts here */}
      <PageHeader>
        <PageHeading
          heading={"Courses"}
          text={
            "Lorem ipsum dolor sit amet consectetur. Augue commodo elementum augue placerat eleifend placer"
          }
        />
        <section className="course-wrap">
          <Container>
            <div class="row pb-5">
              <div class="col-lg-6">
                <label
                  for="search"
                  class="med-font color-dark level-8 text-capitalize mb-1"
                >
                  Search Here
                </label>
                <div class="position-relative">
                  <input
                    id="search"
                    type="text"
                    class="form-control-1 form-control"
                    placeholder="Search your keyword here"
                  />
                  <span class="search_box">
                    <IoSearch color="#fff" size={17} />
                  </span>
                </div>
              </div>

              <div class="col-lg-2 offset-lg-2 p-lg-0">
                <label
                  for="sort"
                  class="med-font color-dark level-8 text-capitalize mb-1"
                >
                  Sort By
                </label>
                <select id="sort" class="form-select-1 form-control">
                  <option value="" disabled selected>
                    Select Sorting
                  </option>
                  <option value="low_to_high">Low To High</option>
                  <option value="high_to_low">High To Low</option>
                </select>
              </div>
            </div>

            {isLoading ? (
              <div
                className="loader-wrapper d-flex justify-content-center align-items-center"
                style={{ height: "400px" }}
              >
                <BeatLoader color="#6b00ff " size={20} />
              </div>
            ) : (
              <>
                <div class="py-3">
                  <div class="row">
                    {allCourses?.map((course, _) => {
                      return (
                        <div class="col-lg-4">
                          <div class="course-card">
                            <figure className="mb-3">
                              <Link to={`/course-detail/${course?.id}`}>
                                <img
                                  src={course?.thumbnail_url}
                                  alt="Course"
                                  className="img-fluid"
                                />
                              </Link>
                            </figure>
                            <div class="course-info">
                              <span class="course-label text-white">
                                {course?.level}
                              </span>
                              <h5 class="course-title text-white">
                                {course?.title}
                              </h5>
                              <p class="course-price text-white mb-2">
                                ${Number(course?.price).toFixed(2)}
                              </p>
                              <div class="course-rating text-white mb-2">
                                ★★★★☆ {course?.rating}
                              </div>
                              <div className="course-btn-wrapper mb-3">
                                <Link
                                  to={`/course-detail/${course?.id}`}
                                  className="btn btn-primary"
                                >
                                  View Course
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    {/* <div class="col-lg-4">
                  <div class="course-card">
                    <figure className="mb-3">
                      <img src={vault1} alt="Course" className="img-fluid" />
                    </figure>
                    <div class="course-info">
                      <span class="course-label text-white">Course Label</span>
                      <h5 class="course-title text-white">Course Title</h5>
                      <p class="course-price text-white">$99.00</p>
                      <div class="course-rating text-white">★★★★☆</div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="course-card">
                    <figure className="mb-3">
                      <img src={vault2} alt="Course" className="img-fluid" />
                    </figure>

                    <div class="course-info">
                      <span class="course-label text-white">Course Label</span>
                      <h5 class="course-title text-white">Course Title</h5>
                      <p class="course-price text-white">$99.00</p>
                      <div class="course-rating text-white">★★★★☆</div>
                    </div>
                  </div>
                </div> */}
                  </div>
                </div>

                <div className="d-flex justify-content-center my-5">
                  <Pagination
                    current={current}
                    pageSize={pageSize}
                    total={total}
                    onChange={onChange}
                  />
                </div>
              </>
            )}
          </Container>
        </section>
      </PageHeader>
      <Footer />
    </>
  );
};

export default Courses;
