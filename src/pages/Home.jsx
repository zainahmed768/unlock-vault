import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import "../assets/css/style.css";
import {
  Button,
  Col,
  Container,
  Row,
  Accordion,
  Card,
  Form,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { accordionItems, partners, vaults } from "../constant/Data";
import {
  client1Img,
  client2Img,
  client3Img,
  client4Img,
  identityImg,
  qrImg,
  starIcon,
  test1,
  test2,
  test3,
  test4,
  vaultbg,
  video,
  videoImg,
  work1,
  work2,
  work3,
  work4,
  work5,
} from "../constant/Index";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import CustomModal from "../components/CustomModal";
import { useDispatch, useSelector } from "react-redux";
import {
  useLazyXummLoginQuery,
  useLazyXummStatusQuery,
} from "../redux/services/AuthServices";
import Alert from "../components/Alert/Alert";
import { BeatLoader } from "react-spinners";
import { setUserToken } from "../redux/reducers/AuthReducer";
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const intervalRef = useRef(null);
  const [xummLogin, response] = useLazyXummLoginQuery();
  const [xummStatus, statuResponse] = useLazyXummStatusQuery();
  const [activeKey, setActiveKey] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [qr, setQr] = useState(false);
  const [step, setStep] = useState(1);
  const user = useSelector((state) => state?.AuthReducer?.user);
  const userToken = useSelector((state) => state?.AuthReducer?.userToken);
  console.log(user, "23456uhn");
  const toggleAccordion = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };
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

  const handleModal = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  // const handleQr = () => {
  //   // setQr(true);
  //   if (step === 2) {
  //     // final step → redirect
  //     navigate("/sign-up");
  //   } else {
  //     setStep((prev) => prev + 1);
  //   }
  // };

  // const handleNext = () => {
  //   if (step === 1) {
  //     xummLogin({ page_type: 0 });
  //   }
  //   if (step === 2) {
  //     // final step → redirect
  //     navigate("/sign-up");
  //   } else {
  //     setStep((prev) => prev + 1);
  //   }
  // };
  console.log(step, "yghsvjcasc");
  const handleNext = () => {
    if (step === 1) {
      setStep(2);
      xummLogin({ page_type: 0 });
    } else if (step === 2) {
      // navigate("/sign-up");
    }
  };

  useEffect(() => {
    if (user && user?.wallet_connected === 0) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [user]);

  useEffect(() => {
    if (response?.isSuccess) {
      intervalRef.current = setInterval(() => {
        xummStatus({ id: user?.id });
      }, 10000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [response?.isSuccess, xummStatus, user?.id]);

  useEffect(() => {
    console.log(statuResponse, "statuResponse");

    if (statuResponse?.isSuccess) {
      dispatch(setUserToken({ user: statuResponse?.data?.user }));

      if (statuResponse?.data?.connected === true) {
        // ✅ stop polling when connected
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        Alert({
          title: "Success",
          text: "Your Wallet has been Connected",
        });
        handleClose();
      }
    }

    if (statuResponse?.isError) {
      Alert({
        title: "Error",
        text: statuResponse?.error?.data?.error,
        iconStyle: "error",
      });
    }
  }, [statuResponse, dispatch, handleClose]);

  return (
    <>
      <Header />
      {/* banner starts here */}
      <section className="banner-sec">
        <div className="background-video-wrapper">
          <video autoPlay loop muted playsInline className="background-video">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Container>
            <Row>
              <Col lg="2" />
              <Col lg="8">
                <div className="banner-content-wrapper">
                  <div className="banner-heading-wrapper">
                    <h2 className="text-center heading-txt">
                      Unlock the Vaults. Be Sovereign. Live Adifrntway
                    </h2>
                    <p className="text-center">
                      We build a decentralized Vault for spiritually-aligned
                      creators to share sacred content, accessed through
                      alignment and symbolic tokens (A17C and ObiSky), not
                      paywalls.
                    </p>
                  </div>
                  <div className="banner-btn-wrapper text-center mt-3">
                    {/* <Button>Enter a Vault</Button> */}
                    {userToken ? (
                      <a
                        href="#"
                        onClick={handleModal}
                        className="gradient-button"
                      >
                        Enter a Vault
                      </a>
                    ) : (
                      <Link to="/sign-up" className="gradient-button">
                        Enter a Vault
                      </Link>
                    )}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* banner ends here */}
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
      {/* works starts here */}
      <section className="works-sec">
        <Container>
          <Row className="mb-5">
            <Col lg="12">
              <div className="works-heading-wrapper text-center">
                <h3 className="heading-txt">How it Works</h3>
                <p>Enter portals of resonance. Unlock relics of remembrance.</p>
              </div>
            </Col>
          </Row>
          <Row className="work-row-card">
            <Col lg="4" className="p-0">
              <div className="works-card-wrapper">
                <div className="works-card-heading-wrapper">
                  <h4 className="heading-txt">What is a Vault?</h4>
                  <p>
                    A Vault is a sovereign content chamber — a digital temple
                    where aligned builders share sacred relics: music,
                    teachings, visuals, and more. Each Vault is sealed until
                    your resonance (in token form) unlocks the gate.
                  </p>
                </div>
                <div className="works-card-img-wrapper text-end">
                  <figure>
                    <img src={work1} className="img-fluid" alt="" />
                  </figure>
                </div>
              </div>
            </Col>
            <Col lg="4" className="p-0">
              <div className="works-card-wrapper">
                <div className="works-card-heading-wrapper">
                  <h4 className="heading-txt">
                    No paywalls. No subscriptions. Only alignment.
                  </h4>
                  <p>
                    Vaults are unlocked through symbolic actions — like holding
                    17+ A17C tokens — rather than status or fiat. Deeper relics
                    may require more A17C or ObiSky to access.
                  </p>
                </div>
                <div className="works-card-img-wrapper text-end">
                  <figure>
                    <img src={work2} className="img-fluid" alt="" />
                  </figure>
                </div>
              </div>
            </Col>
            <Col lg="4" className="p-0">
              <div className="works-card-wrapper">
                <div className="works-card-heading-wrapper">
                  <h4 className="heading-txt">
                    Entry-level relics, access to sacred space
                  </h4>
                  <p>
                    Vaults house “relics” — sacred or sovereign content such as
                    music, teachings, visuals, or meditative tools — that are
                    tiered, tracked, and optionally monetized via the ObiSky
                    token.
                  </p>
                </div>
                <div className="works-card-img-wrapper text-end">
                  <figure>
                    <img src={work3} className="img-fluid" alt="" />
                  </figure>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="word-row-card-2">
            <Col lg="6" className="p-0">
              <div className="works-card-wrapper">
                <div className="works-card-heading-wrapper w-75">
                  <h4 className="heading-txt">How to Unlock a Vault</h4>
                  <ul>
                    <li>Connect Your Wallet (XRPL-enabled like XUMM)</li>
                    <li>Hold 17+ A17C to meet the base access threshold</li>
                    <li>
                      Use ObiSky to unlock deeper relics or support builders
                    </li>
                    <li>
                      Experience the Vault — visuals, sound, teachings, and
                      guidance await
                    </li>
                  </ul>
                </div>
                <div className="works-card-img-wrapper text-end">
                  <figure>
                    <img src={work4} className="img-fluid" alt="" />
                  </figure>
                </div>
              </div>
            </Col>
            <Col lg="6" className="p-0">
              <div className="works-card-wrapper">
                <div className="works-card-heading-wrapper w-75">
                  <h4 className="heading-txt">
                    Entry-level relics, access to sacred space
                  </h4>
                  <p>
                    Vaults house “relics” — sacred or sovereign content such as
                    music, teachings, visuals, or meditative tools — that are
                    tiered, tracked, and optionally monetized via the ObiSky
                    token.
                  </p>
                </div>
                <div className="works-card-img-wrapper text-end">
                  <figure>
                    <img src={work5} className="img-fluid" alt="" />
                  </figure>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* works ends here */}
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
                  <div className="video-btn-wrapper d-block d-lg-none">
                    <Button className="video-btn">
                      <i className="fa-solid fa-play"></i>
                    </Button>
                  </div>
                </div>
                <div className="video-content-wrapper position-absolute top-0">
                  <div className="video-testimonials-wrapper d-flex align-items-center justify-content-lg-end gap-2">
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
                  <div className="video-btn-wrapper d-none d-lg-block">
                    <Button className="video-btn">
                      <i className="fa-solid fa-play"></i>
                    </Button>
                  </div>
                  <div className="video-down-content-wrapper d-block d-lg-flex justify-content-between">
                    <h3 className="heading-txt">Relic Access Guide</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Elit orci enim
                      aliquam neque nascetur amet vivamus dictum. Nulla cras
                      scelerisque placerat et ultrices commodo in vitae.
                      Tincidunt consequat risus sit suspendisse sed volutpat
                      etiam. Tortor ullamcorper urna eget feugiat massa sed non.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* video ends here */}
      {/* vault starts here */}
      <section className="vault-sec">
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
      {/* client succes starst here */}
      <section className="client-sec position-relative">
        <Container>
          <Row>
            <Col lg="2">
              <div className="client-right-wrapper">
                <div className="client-img-wrapper client-img-1">
                  <figure>
                    <img src={client1Img} className="img-fluid" alt="" />
                  </figure>
                </div>
                <div className="client-img-wrapper client-img-3">
                  <figure>
                    <img src={client3Img} className="img-fluid" alt="" />
                  </figure>
                </div>
              </div>
            </Col>
            <Col lg="8">
              <div className="client-card-wrapper text-center">
                <div className="client-heading-wrapper">
                  <h3 className="heading-txt">Client Success Stories</h3>
                </div>
                <div className="client-content-wrapper">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Habitant nibh nisl
                    duis tincidunt nisl vitae cursus nisl vitae. Rhoncus
                    ullamcorper molestie volutpat gravida sit tortor nec. Quis
                    elit enim neque dui fermentum duis. Massa ac id tempus diam
                    in duis porttitor gravida nunc.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Non commodo sed a
                    dictum. Egestas eleifend dignissim feugiat gravida. Egestas
                    aenean sagittis ultrices quisque. Viverra turpis scelerisque
                    blandit a diam feugiat tempus.
                  </p>
                  <h6 className="heading-txt">
                    Emily Brown, CTO, [Client Company]
                  </h6>
                </div>
                <div className="client-btn-wrapper">
                  <button className="gradient-button">
                    View All Testimonials
                  </button>
                </div>
              </div>
            </Col>
            <Col lg="2">
              <div className="client-left-wrapper">
                <div className="client-img-wrapper client-img-2">
                  <figure>
                    <img src={client2Img} className="img-fluid" alt="" />
                  </figure>
                </div>
                <div className="client-img-wrapper client-img-4">
                  <figure>
                    <img src={client4Img} className="img-fluid" alt="" />
                  </figure>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* client succes ends here */}
      {/* faq starts here */}
      <section className="faq-sec">
        <Container>
          <Row>
            <Col lg="12">
              <div className="faq-heading-wrapper text-center">
                <h3 className="heading-txt">Frequently Asked Questions</h3>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </Col>
          </Row>
          <Row className="g-4 mt-4">
            {[0, 1].map((colIndex) => (
              <Col md={6} key={colIndex}>
                {accordionItems
                  .filter((_, idx) => idx % 2 === colIndex)
                  .map((item) => (
                    <Card
                      key={item.id}
                      className="bg-dark text-white border border-secondary my-2"
                    >
                      <Accordion activeKey={activeKey}>
                        <Accordion.Item eventKey={item.id.toString()}>
                          <Accordion.Header
                            onClick={() => toggleAccordion(item.id.toString())}
                          >
                            {item.title}
                          </Accordion.Header>
                          <Accordion.Body>{item.content}</Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Card>
                  ))}
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* faq ends here */}
      <CustomModal
        // show={showModal}
        // onHide={() => setShowModal(false)}
        show={showModal}
        onHide={handleClose}
        // title="My Reusable Modal"
      >
        <Container>
          <div className="upload-modal-wrapper">
            <div className="upload-heading-wrapper text-center position-relative">
              <h3 className="heading-txt">Scan QR To Enter a Vault</h3>
              <p>Click Get Started To proceed with Qr</p>
              <div className="close-btn-wrapper position-absolute end-0 top-0">
                <button className="close" onClick={handleClose}>
                  X
                </button>
              </div>
            </div>
            {/* <div className="upload-flow-wrapper">
              <Row className="align-items-center">
                <Col
                  md="4"
                  className="step-title-col align-items-center text-end d-flex justify-content-end"
                >
                  <div className="step-title">
                    <h4 className="heading-txt mb-0">ID Upload</h4>
                  </div>
                  <div className="vertical-line" />
                </Col>

                <Col md="4">
                  <div className="step-box d-flex align-items-center gap-3 ">
                    <div className="step-number">
                      <h5 className="heading-txt mb-0">1</h5>
                    </div>
                    <div>
                      <div className="step-label">
                        <h6 className="heading-txt mb-0">Security</h6>
                      </div>
                      <div className="step-desc">
                        <p className="mb-0">Confirm your identity</p>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col md="4">
                  <div className="step-box d-flex align-items-center gap-3">
                    <div className="step-number">
                      <h5 className="heading-txt mb-0">2</h5>
                    </div>
                    <div>
                      <div className="step-label">
                        <h6 className="heading-txt mb-0">Id Upload</h6>
                      </div>
                      <div className="step-desc">
                        <p className="mb-0">Confirm your identity</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div> */}
            <div className="upload-img-wrapper text-center">
              {step === 1 && (
                <figure>
                  <img src={identityImg} className="img-fluid" alt="" />
                </figure>
              )}
              {step === 2 && (
                <figure className="qr-img mt-4">
                  <div className="qr-heading-txt-wrapper">
                    <h6 className="heading-txt">
                      Please scan QR from your Zam wallet App.
                    </h6>
                  </div>
                  {response?.isLoading ? (
                    <div className="qr-loader">
                      <BeatLoader color="#fff" size={20} />
                    </div>
                  ) : (
                    <img
                      src={response?.data?.qr_url}
                      className="img-fluid"
                      alt=""
                    />
                  )}
                </figure>
              )}
            </div>

            <div className="upload-submit-btn-wrapper text-center">
              <button onClick={handleNext} className="gradient-button">
                {step === 2 ? "Continue" : "Get Started"}
              </button>
            </div>

            <div className="upload-txt-wrapper text-center mt-3">
              <p className="mb-0">
                By proceeding, you agree to our{" "}
                <Link to={"/terms-conditions"}>Terms & Conditions</Link> and{" "}
                <Link to={"/privacy-policy"}>Privacy Policy</Link>
              </p>
            </div>
          </div>
        </Container>
      </CustomModal>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
