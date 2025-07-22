import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import PageHeader from "../components/PageHeader";
import PageHeading from "../components/PageHeading";
import { Col, Container, Row, Table } from "react-bootstrap";
import { functionImg, token1, vault1 } from "../constant/Index";
import { token } from "../constant/Data";
import "../assets/css/tokens.css";

const Tokens = () => {
  return (
    <>
      <Header />
      {/* page Header starts here */}
      <PageHeader>
        <PageHeading
          heading={"Tokens"}
          text={
            "Lorem ipsum dolor sit amet consectetur. Augue commodo elementum augue placerat eleifend placer"
          }
        />
        {/* service starts here */}
        <section className="serv-sec">
          <Container>
            <Row className="token-row">
              {token?.map((v, _) => {
                return (
                  <Col key={_} lg="4" className="p-lg-0">
                    <div className="token-card-wrapper p-4">
                      <div className="token-img-wrapper">
                        <figure>
                          <img
                            src={v?.image}
                            alt={v?.image}
                            className="img-fluid"
                          />
                        </figure>
                      </div>
                      <div className="token-content-wrapper">
                        <h4 className="heading-txt">{v?.title}</h4>
                        <p>{v?.des}</p>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </section>
        {/* service ends here */}
      </PageHeader>
      {/* Function starts here */}
      <section className="functions-sec">
        <Container>
          <Row className="align-items-center">
            <Col lg="8">
              <div className="function-content-wrapper me-lg-5">
                <h3 className="heading-txt mb-5">
                  function in micropayments, relic unlocks, and community energy
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
            <Col lg="4">
              <div className="function-img-wrapper">
                <figure>
                  <img src={functionImg} alt="" className="img-fluid" />
                </figure>
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
                <h3 className="heading-txt">
                  how pricing adapts with XRP fluctuation
                </h3>
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

export default Tokens;
