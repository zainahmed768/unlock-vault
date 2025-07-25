import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { WebLogo } from "../constant/Index";

const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <Row className="footer-first-row align-items-center">
            <Col lg="2">
              <div className="footer-logo-wrapper">
                <figure>
                  <Link to="/">
                    <img src={WebLogo} className="img-fluid" alt="" srcset="" />
                  </Link>
                </figure>
              </div>
            </Col>
            <Col lg="10">
              <Row>
                <Col lg="7">
                  <div className="footer-links-wrapper">
                    <ul className="d-flex list-unstyled gap-4 mb-0">
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/vaults">Vaults</Link>
                      </li>
                      <li>
                        <Link to="/">Builders</Link>
                      </li>
                      <li>
                        <Link to="/relics">Relics</Link>
                      </li>
                      <li>
                        <Link to="/token">Tokens</Link>
                      </li>
                      <li>
                        <Link to="/path">Paths</Link>
                      </li>
                      <li>
                        <Link to="/contact-us">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg="5">
                  <div className="footer-social-wrapper d-flex justify-content-end align-items-center gap-3">
                    <div className="footer-social-links-wrapper">
                      <h6 className="mb-0">Stay Connected</h6>
                    </div>
                    <div className="footer-social-wrapper">
                      <ul className="d-flex gap-2 list-unstyled mb-0">
                        <li>
                          <Link to="/">
                            <i class="fa-brands fa-facebook heading-txt"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <i class="fa-brands fa-twitter heading-txt"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <i class="fa-brands fa-linkedin heading-txt"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <div id="copyright">
            <Row>
              <Col lg="6">
                <div className="footer-info-wrapper">
                  <ul className="d-flex align-items-center gap-3 list-unstyled mb-0">
                    <li>
                      <Link
                        to="mailto:hello@squareup.com"
                        className="icon-txt-wrapper d-flex gap-3 align-items-center"
                      >
                        <div className="icon-wrapper">
                          <i class="fa-solid fa-envelope"></i>
                        </div>
                        <div className="txt-wrapper">
                          <p className="mb-0">hello@squareup.com</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="tel:191813232309"
                        className="icon-txt-wrapper d-flex gap-3 align-items-center"
                      >
                        <div className="icon-wrapper">
                          <i class="fa-solid fa-phone"></i>
                        </div>
                        <div className="txt-wrapper">
                          <p className="mb-0">+1 91813 23 2309</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.google.com/maps/search/Adifrntway+,+United+States:15487/@24.8676352,67.0793728,14z?entry=ttu&g_ep=EgoyMDI1MDcwNy4wIKXMDSoASAFQAw%3D%3D"
                        className="icon-txt-wrapper d-flex gap-3 align-items-center"
                      >
                        <div className="icon-wrapper">
                          <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="txt-wrapper">
                          <p className="mb-0">
                            Adifrntway , United States:15487
                          </p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg="6">
                <div className="copyright-txt-wrapper">
                  <p className="text-end mb-0">
                    © 2025 Adifrntway. All rights reserved.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
