import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { WebLogo } from "../constant/Index";
import { Link, useLocation } from "react-router-dom";
import { MdWindow } from "react-icons/md";

const Header = () => {
  const location = useLocation();
  return (
    <>
      <header id="top">
        <Container fluid>
          <Row>
            {/* <Col lg="1"></Col> */}
            <Col lg="12">
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
                      <Link
                        to="/"
                        class={location?.pathname == "/" && "active"}
                      >
                        {location?.pathname == "/" && (
                          <MdWindow size={17} className="me-1" />
                        )}{" "}
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/about"}
                        class={location?.pathname == "/about" && "active"}
                      >
                        {location?.pathname == "/about" && (
                          <MdWindow size={17} className="me-1" />
                        )}
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/vaults"}
                        class={location?.pathname == "/vaults" && "active"}
                      >
                        {location?.pathname == "/vaults" && (
                          <MdWindow size={17} className="me-1" />
                        )}
                        Vaults
                      </Link>
                    </li>
                    <li>
                      <Link to="#">Builders</Link>
                    </li>
                    <li>
                      <Link
                        to={"/relics"}
                        class={location?.pathname == "/relics" && "active"}
                      >
                        {location?.pathname == "/relics" && (
                          <MdWindow size={17} className="me-1" />
                        )}
                        Relics
                      </Link>
                    </li>
                  </ul>
                  <div class="logo-container">
                    <Link to={"/"}>
                      <img src={WebLogo} alt="Logo" class="center-logo" />
                    </Link>
                  </div>

                  <ul class="nav-right">
                    <li>
                      <Link
                        to={"/token"}
                        class={location?.pathname == "/token" && "active"}
                      >
                        {location?.pathname == "/token" && (
                          <MdWindow size={17} className="me-1" />
                        )}
                        Tokens
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/path"}
                        class={location?.pathname == "/path" && "active"}
                      >
                        {location?.pathname == "/path" && (
                          <MdWindow size={17} className="me-1" />
                        )}
                        Paths
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/contact-us"}
                        class={location?.pathname == "/contact-us" && "active"}
                      >
                        {location?.pathname == "/contact-us" && (
                          <MdWindow size={17} className="me-1" />
                        )}
                        Contact us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/sign-in"}
                        class={location?.pathname == "/sign-in" && "active"}
                      >
                        {location?.pathname == "/sign-in" && (
                          <MdWindow size={17} className="me-1" />
                        )}
                        Sign In
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/my-profile"}
                        class={location?.pathname == "/my-profile" && "active"}
                      >
                        {location?.pathname == "/my-profile" && (
                          <MdWindow size={17} className="me-1" />
                        )}
                        Profile
                      </Link>
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
