import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { WebLogo } from "../constant/Index";

const Header = () => {
  return (
    <>
      <header id="top">
        <Container>
          <Row>
            <Col lg="1"></Col>
            <Col lg="10">
              <div className="header-wrapper">
                <nav class="navbar">
                  {/* <ul class="nav-left">
                    <li>
                      <a href="#" class="active">
                        <i class="icon-grid"></i> Home
                      </a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Vaults</a>
                    </li>
                    <li>
                      <a href="#">Builders</a>
                    </li>
                  </ul> */}
                  <ul class="nav-left">
                    <li>
                      <a href="#" class="active">
                        <i class="icon-grid"></i> Home
                      </a>
                    </li>
                    <li>
                      <a href="#" >About Us</a>
                    </li>
                    <li>
                      <a href="#">Vaults</a>
                    </li>
                    <li>
                      <a href="#">Builders</a>
                    </li>
                  </ul>
                  <div class="logo-container">
                    <img src={WebLogo} alt="Logo" class="center-logo" />
                  </div>

                  <ul class="nav-right">
                    <li>
                      <a href="#">Relics</a>
                    </li>
                    <li>
                      <a href="#">Tokens</a>
                    </li>
                    <li>
                      <a href="#">Paths</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
