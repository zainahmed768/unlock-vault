import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import PageHeader from "../components/PageHeader";
import PageHeading from "../components/PageHeading";
import { Col, Container, Row, Table } from "react-bootstrap";
import { vault1, vault2 } from "../constant/Index";
import { partners } from "../constant/Data";
import Slider from "react-slick";
import "../assets/css/vault.css";

const Vaults = () => {
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
          heading={"Vaults"}
          text={
            "Lorem ipsum dolor sit amet consectetur. Augue commodo elementum augue placerat eleifend placer"
          }
        />
        {/* vault starts here */}
        <section className="vault-sec">
          <Container>
            <Row>
              <Col lg="6">
                <div className="vault-img-wrapper">
                  <figure>
                    <img src={vault1} className="img-fluid" alt="" />
                  </figure>
                </div>
              </Col>
              <Col lg="6">
                <div className="vault-img-wrapper">
                  <figure>
                    <img src={vault2} className="img-fluid" alt="" />
                  </figure>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* vault ends here */}
      </PageHeader>
      {/* Partners starts here */}
      <section className="partners-sec mt-5">
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
      <section className="transform-sec vault-transform-sec">
        <Container>
          <Row>
            <Col lg="2" />
            <Col lg="8">
              <div className="transform-text-wrapper">
                <h3 className="text-center heading-txt">
                  walkthrough of A17C holding + wallet connect + ObiSky relic
                  use
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vehicula tellus leo
                  blandit maecenas ultrices eget. Tortor tempor sapien purus
                  varius. Penatibus egestas massa tincidunt mattis et elit
                  tellus sociis.Lorem ipsum dolor sit amet consectetur. Vehicula
                  tellus leo blandit maecenas ultrices eget. Tortor tempor
                  sapien purus varius. Penatibus egestas massa tincidunt mattis
                  et elit tellus sociis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vehicula tellus leo
                  blandit maecenas ultrices eget. Tortor tempor sapien purus
                  varius. Penatibus egestas massa tincidunt mattis et elit
                  tellus sociis.Lorem ipsum dolor sit amet consectetur. Vehicula
                  tellus leo blandit maecenas ultrices eget. Tortor tempor
                  sapien purus varius. Penatibus egestas massa tincidunt mattis
                  et elit tellus sociis.
                </p>
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
                <h2 className="heading-txt">314+</h2>
                <p className="mb-0">ialize in providing </p>
              </div>
            </Col>
            <Col lg="3" className="p-0">
              <div className="counter-text-wrapper text-center">
                <h2 className="heading-txt">220M</h2>
                <p className="mb-0">ialize in providing </p>
              </div>
            </Col>
            <Col lg="3" className="p-0">
              <div className="counter-text-wrapper text-center">
                <h2 className="heading-txt">550+</h2>
                <p className="mb-0">ialize in providing </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* counter ends here */}
      {/* breakdown starts here */}
      <section className="break-sec">
        <Container>
          <Row className="mb-5">
            <Col lg="2" />
            <Col lg="8">
              <div className="break-heading-wrapper text-center">
                <h3 className="heading-txt">Breakdown of levels based</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vehicula tellus leo
                  blandit maecenas ultrices eget. Tortor tempor sapien purus
                  varius. Penatibus egestas massa tincidunt mattis et elit
                  tellus sociis.Lore
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <div className="break-table-wrapper">
                <Table responsive borderless className="vault-table text-white">
                  <thead>
                    <tr>
                      <th>
                        <h4 className="heading-txt">Proof Of</h4>
                      </th>
                      <th>
                        <h4 className="heading-txt">Purpose</h4>
                      </th>
                      <th>
                        <h4 className="heading-txt">Token/Logic</h4>
                      </th>
                      <th>
                        <h4 className="heading-txt">Effect</h4>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h4 className="heading-txt">Holding</h4>
                      </td>
                      <td>
                        <p>Access to Vaults</p>
                      </td>
                      <td>
                        <p>
                          A17C (min. 17)
                          <br />
                          Builders can set higher on top of 17
                        </p>
                      </td>
                      <td>
                        <p>Signals resonance + unlocks sacred spaces</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h4 className="heading-txt">Buoyancy</h4>
                      </td>
                      <td>
                        <p>Stable relic pricing</p>
                      </td>
                      <td>
                        <p>ObiSky + XRP ratio</p>
                      </td>
                      <td>
                        <p>
                          Prevents value loss or inflation
                          <br />
                          XRP price constantly shifting
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h4 className="heading-txt">Alignment</h4>
                      </td>
                      <td>
                        <p>
                          Auto-revokes access
                          <br />
                          at 16 or less
                        </p>
                      </td>
                      <td>
                        <p>A17C level + actions</p>
                      </td>
                      <td>
                        <p>
                          Encourages long-term connection + trustless identity
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* breakdown ends here */}
      <Newsletter />
      <Footer />
    </>
  );
};

export default Vaults;
