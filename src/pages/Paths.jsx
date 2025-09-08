import React from "react";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import PageHeading from "../components/PageHeading";
import { Col, Container, Row, Table } from "react-bootstrap";
import { functionImg, vault2 } from "../constant/Index";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Paths = () => {
  return (
    <>
      <Header />
      {/* page Header starts here */}
      <PageHeader>
        <PageHeading
          heading={"Paths"}
          text={
            "Lorem ipsum dolor sit amet consectetur. Augue commodo elementum augue placerat eleifend placer"
          }
        />
        {/* Function starts here */}
        <section className="functions-sec">
          <Container>
            <Row className="align-items-center">
              <Col lg="8">
                <div className="function-content-wrapper me-lg-5">
                  <h3 className="heading-txt mb-5">
                    Path as a series of relics or a transformational journey
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Vehicula tellus leo
                    blandit maecenas ultrices eget. Tortor tempor sapien purus
                    varius. Penatibus egestas massa tincidunt mattis et elit
                    tellus sociis.Lorem ipsum dos ultrices eget. Tortor tempor
                    sapien purus varius. Penatibus egestas massa tincidunt
                    mattis et elit tellus sociis.Lorem ipsum do
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Vehicula tellus leo
                    blandit maecenas ultrices eget. Tortor tempor sapien purus
                    varius. Penatibus egestas massa tincidunt mattis et elit
                    tellus sociis.Lorem ipsum dolor si
                  </p>
                </div>
              </Col>
              <Col lg="4">
                <div className="function-img-wrapper">
                  <figure>
                    <img src={vault2} alt="" className="img-fluid w-100" />
                  </figure>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Function ends here */}
      </PageHeader>
      {/* Function starts here */}
      <section className="functions-sec">
        <Container>
          <Row className="align-items-center">
            <Col lg="4">
              <div className="function-img-wrapper">
                <figure>
                  <img src={functionImg} alt="" className="img-fluid w-100" />
                </figure>
              </div>
            </Col>
            <Col lg="8">
              <div className="function-content-wrapper ms-lg-5">
                <h3 className="heading-txt mb-lg-5 my-4">
                  Path as a series of relics or a transformational journey
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vehicula tellus leo
                  blandit maecenas ultrices eget. Tortor tempor sapien purus
                  varius. Penatibus egestas massa tincidunt mattis et elit
                  tellus sociis.Lorem ipsum dos ultrices eget. Tortor tempor
                  sapien purus varius. Penatibus egestas massa tincidunt mattis
                  et elit tellus sociis.Lorem ipsum do
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vehicula tellus leo
                  blandit maecenas ultrices eget. Tortor tempor sapien purus
                  varius. Penatibus egestas massa tincidunt mattis et elit
                  tellus sociis.Lorem ipsum dolor si
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Function ends here */}
      {/* breakdown starts here */}
      <section className="break-sec">
        <Container>
          <Row className="mb-5">
            <Col lg="2" />
            <Col lg="8">
              <div className="break-heading-wrapper text-center">
                <h3 className="heading-txt">ZYNIF vs ADIF Explained</h3>
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

export default Paths;
