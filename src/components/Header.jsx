import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { WebLogo } from "../constant/Index";
import { Link, useLocation } from "react-router-dom";
import { MdWindow } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Alert from "./Alert/Alert";
import { setlogoutUser } from "../redux/reducers/AuthReducer";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const userToken = useSelector((state) => state?.AuthReducer?.userToken);
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(setlogoutUser());
    Alert({
      title: "success",
      text: "Logout successfully",
    });
    navigate("/");
  };
  return (
    <>
      <header id="top">
        <Container fluid>
          <Row>
            {/* <Col lg="1"></Col> */}
            <Col lg="12">
              <div className="header-wrapper">
                <nav className={!userToken ? "navbar" : "navbar no-sign-in"}>
                  {/* <ul className="nav-left">
                    <li>
                      <a href="#" className="active">
                        <i className="icon-grid"></i> Home
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
                  <ul className="nav-left">
                    <li>
                      <Link
                        to="/"
                        className={location?.pathname == "/" && "active"}
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
                        className={location?.pathname == "/about" && "active"}
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
                        className={location?.pathname == "/vaults" && "active"}
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
                        className={location?.pathname == "/relics" && "active"}
                      >
                        {location?.pathname == "/relics" && (
                          <MdWindow size={17} className="me-1" />
                        )}
                        Relics
                      </Link>
                    </li>
                  </ul>
                  <div className="logo-container">
                    <Link to={"/"}>
                      <img src={WebLogo} alt="Logo" className="center-logo" />
                    </Link>
                  </div>

                  <ul className="nav-right">
                    <li>
                      <Link
                        to={"/token"}
                        className={location?.pathname == "/token" && "active"}
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
                        className={location?.pathname == "/path" && "active"}
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
                        className={location?.pathname == "/contact-us" && "active"}
                      >
                        {location?.pathname == "/contact-us" && (
                          <MdWindow size={17} className="me-1" />
                        )}
                        Contact us
                      </Link>
                    </li>
                    {!userToken ? (
                      <li>
                        <Link
                          to={"/sign-in"}
                          className={location?.pathname == "/sign-in" && "active"}
                        >
                          {location?.pathname == "/sign-in" && (
                            <MdWindow size={17} className="me-1" />
                          )}
                          Sign In
                        </Link>
                      </li>
                    ) : (
                      ""
                    )}
                    {userToken ? (
                      <>
                        <li>
                          <Link
                            to={"/my-profile"}
                            className={
                              location?.pathname == "/my-profile" && "active"
                            }
                          >
                            {location?.pathname == "/my-profile" && (
                              <CgProfile size={17} className="me-1" />
                            )}
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link
                            // to={"/my-profile"}
                            onClick={handleLogout}
                          >
                            Logout
                            {/* <span>
                              <i className="fa fa-sign-out" aria-hidden="true"></i>
                            </span> */}
                          </Link>
                        </li>
                      </>
                    ) : (
                      ""
                    )}
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
