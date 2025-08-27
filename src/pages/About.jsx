import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import PageHeader from "../components/PageHeader";
import PageHeading from "../components/PageHeading";
import { Button, Col, Container, Row } from "react-bootstrap";
import { test1, test2, test3, test4, vaultbg, videoImg } from "../constant/Index";
import { partners, vaults } from "../constant/Data";
import Slider from "react-slick";

const About = () => {
  const settings = {
    dots: false,
    infinite: true, // Ensures looping with duplicates
    centerMode: true, // Helps with smooth transitions
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1, // ✅ Updated to 1
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Below 1024px
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1, // ✅ Ensuring slidesToScroll is 1
          infinite: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 768, // Below 768px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 480, // Below 480px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <>
      <Header />
      {/* page Header starts here */}
      <PageHeader>
        
        <PageHeading
          heading={"About Us"}
          text={
            "Lorem ipsum dolor sit amet consectetur. Augue commodo elementum augue placerat eleifend placer"
          }
        />
        {/* video starts here */}
        <section className="video-sec">
          <Container>
            <Row>
              <Col lg="12">
                <div className="video-card-wrapper position-relative">
                  <div className="video-img-wrapper">
                    <figure>
                      <img src={videoImg} className="img-fluid" alt="" />
                    </figure>
                  </div>
                  <div className="video-content-wrapper position-absolute top-0">
                    <div className="video-testimonials-wrapper d-flex align-items-center justify-content-end gap-2">
                      <div className="testimonails-list-img-wrapper">
                        <ul className="d-flex list-unstyled">
                          <li>
                            <img src={test1} className="img-fluid" alt="" />
                          </li>
                          <li>
                            <img src={test2} className="img-fluid" alt="" />
                          </li>
                          <li>
                            <img src={test3} className="img-fluid" alt="" />
                          </li>
                          <li className="test-icon">
                            <img src={test4} className="img-fluid" alt="" />
                          </li>
                        </ul>
                      </div>
                      <div className="testionails-txt-wrapper">
                        <p>32k Happy customers</p>
                      </div>
                    </div>
                    <div className="video-btn-wrapper">
                      <Button className="video-btn">
                        <i className="fa-solid fa-play"></i>
                      </Button>
                    </div>
                    <div className="video-down-content-wrapper d-flex justify-content-between">
                      <h3 className="heading-txt">Relic Access Guide</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Elit orci enim
                        aliquam neque nascetur amet vivamus dictum. Nulla cras
                        scelerisque placerat et ultrices commodo in vitae.
                        Tincidunt consequat risus sit suspendisse sed volutpat
                        etiam. Tortor ullamcorper urna eget feugiat massa sed
                        non.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* video ends here */}
      </PageHeader>
      {/* page Header ends here */}
      {/* Partners starts here */}
      <section className="partners-sec mt-5 pt-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={12}>
              <div className="partner-heading-wrapper text-center">
                <h4 className="mb-0 heading-txt">
                  Trusted by Industry Leaders
                </h4>
              </div>
            </Col>
            <Col lg={12} className="mt-lg-5 mt-5">
              <Slider {...settings}>
                {partners?.map((logo, i) => {
                  return (
                    <div key={i} className="partner-logo-wrapper">
                      <img src={logo} className="img-fluid" alt="" />
                    </div>
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Partners ends here */}
      {/* transform starts here */}
      <section className="transform-sec">
        <Container>
          <Row>
            <Col lg="2" />
            <Col lg="8">
              <div className="transform-text-wrapper">
                <h3 className="text-center heading-txt">
                  Transform your business with cutting-edge IT solutions
                  tailored to your needs. Our expert consultants deliver
                  innovative strategies that propel your organization into the
                  digital future.
                </h3>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* transform ends here */}
      {/* counter starts here */}
      <section className="counter-sec">
        <Container>
          <Row>
            <Col lg="3" className="p-0">
              <div className="counter-text-wrapper text-center">
                <h2 className="heading-txt">412k</h2>
                <p className="mb-0">ialize in providing </p>
              </div>
            </Col>
            <Col lg="3" className="p-0">
              <div className="counter-text-wrapper text-center">
                <h2 className="heading-txt">412k</h2>
                <p className="mb-0">ialize in providing </p>
              </div>
            </Col>
            <Col lg="3" className="p-0">
              <div className="counter-text-wrapper text-center">
                <h2 className="heading-txt">412k</h2>
                <p className="mb-0">ialize in providing </p>
              </div>
            </Col>
            <Col lg="3" className="p-0">
              <div className="counter-text-wrapper text-center">
                <h2 className="heading-txt">412k</h2>
                <p className="mb-0">ialize in providing </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* counter ends here */}
      {/* vault starts here */}
      <section className="vault-sec pb-5 mb-5">
        <Container>
          <Row>
            <Col lg="12">
              <div className="vault-heading-wrapper text-center">
                <h3 className="heading-txt">Vaults & Access</h3>
                <p>Enter portals of resonance. Unlock relics of remembrance.</p>
              </div>
            </Col>
          </Row>
          <Row className="mt-4 vault-row">
            {vaults?.map((vault, i) => {
              return (
                <Col key={i} lg="4" className="p-0">
                  <div className="vault-card-wrapper">
                    <div className="vault-heading-wrapper d-flex justify-content-between">
                      <h4 className="heading-txt">{vault?.name}</h4>
                      <div className="count-wrapper">
                        <h6 className="heading-txt">{vault?.id}</h6>
                      </div>
                    </div>
                    <div className="vault-content-wrapper">
                      <p className="mb-0">{vault?.des}</p>
                    </div>
                    <div className="vault-down-img-wrapper">
                      <figure>
                        <img src={vaultbg} className="img-fluid" alt="" />
                      </figure>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row className="mt-4">
            <Col lg="1" />
            <Col lg="10">
              <div className="vault-last-para-wrapper text-center">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Odio nisi et quis
                  aliquam. Adipiscing viverra lorem ligula id id. Diam semper eu
                  volutpat nascetur consectetur. Duis venenatis ornare nisl nisl
                  ornare ultrices suscipit ullamcorper.ng viverra lorem ligula
                  id ialiquam. Adipiscing viverra lorem ligula id id. Diam sem
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* vault ends here */}
      <Newsletter />
      <Footer />
    </>
  );
};

export default About;
