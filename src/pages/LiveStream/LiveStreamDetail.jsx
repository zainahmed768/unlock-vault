import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import PageHeading from "../../components/PageHeading";
import InputEmoji from "react-input-emoji";
import {
  Leaf,
  liveStream,
  weedEmoji,
  WeedIcon,
  Spinner,
  Gift1,
  Gift2,
  Gift3,
  Gift4,
} from "../../constant/Index";
import "../../assets/css/liveStream.css";
const LiveStreamDetail = () => {
  const [setting, SetSetting] = useState(false);
  const [text, setText] = useState("");

  function handleOnEnter(text) {
    console.log("enter", text);
  }
  return (
    <>
      <Header />
      <PageHeader>
        <PageHeading
          heading={"Live Streaming"}
          text={
            "The International 2021 is the concluding tournament of the Dota Pro Circuit and the ninth annual edition of The International."
          }
        />
      </PageHeader>
      <section className="live-stream">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 pr-0">
              <div className="stream">
                <div className="video">
                  <figure>
                    <img src={liveStream} alt="" className="img-fluid" />
                  </figure>
                  <div className="spinner">
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#SpinnerCoins"
                    >
                      <img src={Spinner} alt="" className="img" />
                    </button>
                  </div>
                  <div className="gift-send">
                    <ul className="all-gifts">
                      <li>
                        <i className="fa fa-heart"></i>
                      </li>
                      <li>
                        <figure>
                          <img src={Gift2} alt="" />
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <img src={Gift3} alt="" />
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <img src={Gift4} alt="" />
                        </figure>
                      </li>
                    </ul>
                  </div>
                  <div className="hearts"></div>
                </div>
                <div className="title-wrapper">
                  <div className="left">
                    <h4>Beyondthesummit</h4>
                    <h2 className="text-white">Stream title go here</h2>
                  </div>
                  <div className="right">
                    <div className="action-btn">
                      <button
                        // onClick={() => navigate("/invite-link")}
                        className="btn subscribe"
                      >
                        Share
                      </button>
                      <button className="btn subscribe">Subscribe</button>
                      <button className="btn follow">Follow</button>
                    </div>
                  </div>
                </div>
                <div className="bottom">
                  <p className="hashtag">
                    <span>#LoremIpsum</span>
                    <span>#LoremIpsum</span>
                  </p>
                  <p className="description">
                    The International 2021 is the concluding tournament of the
                    Dota Pro Circuit and the ninth annual edition of The
                    International. The tournament will be held on Chinese soil
                    for the first time, as it moves to the Mercedes-Benz Arena
                    in Shanghai.[1] Following the previous year format, a point
                    system based on official sponsored Majors and Minors will be
                    used to determine the twelve invites to The
                    International.[2]
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 pl-0">
              <div className={setting ? "live-chat hide" : "live-chat show"}>
                <div className="close">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15.424"
                    height="15.424"
                    viewBox="0 0 15.424 15.424"
                  >
                    <path
                      id="Icon_metro-cross"
                      data-name="Icon metro-cross"
                      d="M17.854,14.32h0L13.175,9.64l4.679-4.679h0a.483.483,0,0,0,0-.682l-2.21-2.21a.483.483,0,0,0-.682,0h0L10.283,6.748,5.6,2.069h0a.483.483,0,0,0-.682,0l-2.21,2.21a.483.483,0,0,0,0,.682h0L7.391,9.64,2.712,14.319h0a.483.483,0,0,0,0,.682l2.21,2.21a.483.483,0,0,0,.682,0h0l4.679-4.679,4.679,4.679h0a.483.483,0,0,0,.681,0L17.854,15a.483.483,0,0,0,0-.682Z"
                      transform="translate(-2.571 -1.928)"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <div className="heading-wrapper">
                  <h3 className="text-white">Live Chat</h3>
                  <button className="setting" onClick={() => SetSetting(true)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34.131"
                      height="35.078"
                      viewBox="0 0 34.131 35.078"
                    >
                      <g
                        id="Component_38_1"
                        data-name="Component 38 – 1"
                        transform="translate(0.559 0.5)"
                      >
                        <path
                          id="Exclusion_1"
                          data-name="Exclusion 1"
                          d="M-14419.319-8261.423h-6.736c-.348,0-.841-.354-.841-.686l-.674-4.453-.021-.01a16.232,16.232,0,0,1-2.843-1.7l-4.211,1.71a.655.655,0,0,1-.295.066.8.8,0,0,1-.712-.411l-3.367-5.988c-.18-.367-.156-.868.167-1.03l3.874-2.74a4.894,4.894,0,0,0-.075-.727,6.2,6.2,0,0,1-.1-.987,5.329,5.329,0,0,1,.171-1.71l-3.537-2.914a.811.811,0,0,1-.17-1.025l3.37-5.992a.825.825,0,0,1,.607-.242,1.244,1.244,0,0,1,.4.07l4.211,1.714a15.575,15.575,0,0,1,2.821-1.692l.042-.021.674-4.449a.586.586,0,0,1,.078-.543.8.8,0,0,1,.6-.316h6.733c.349,0,.844.354.844.685l.674,4.624a9.389,9.389,0,0,1,2.29,1.315l.085.06c.158.111.321.226.488.339l4.04-1.714a1.139,1.139,0,0,1,.371-.066,1.112,1.112,0,0,1,.807.411l3.367,5.989c.169.174,0,.684-.338,1.03l-3.536,2.739a4.859,4.859,0,0,0,.076.732v.008a6.112,6.112,0,0,1,.093.97,5.289,5.289,0,0,1-.17,1.714l3.536,2.91a.818.818,0,0,1,.171,1.029l-3.37,5.993a.83.83,0,0,1-.608.241,1.244,1.244,0,0,1-.4-.07l-4.211-1.71a16.11,16.11,0,0,1-2.856,1.707l-.006,0-.674,4.453A.773.773,0,0,1-14419.319-8261.423Zm-3.812-23.076a6.008,6.008,0,0,0-6,6,6.006,6.006,0,0,0,6,6,6.006,6.006,0,0,0,6-6A6.008,6.008,0,0,0-14423.132-8284.5Z"
                          transform="translate(14439.131 8295.501)"
                          fill="#fff"
                          stroke="rgba(0,0,0,0)"
                          stroke-miterlimit="10"
                          strokeWidth="1"
                        />
                      </g>
                    </svg>
                  </button>
                </div>
                <ul className="messages">
                  <li>
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span>Chesspredator:</span> we are gonna have the new
                        patch before the TI
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15.752"
                              height="15.752"
                              viewBox="0 0 15.752 15.752"
                            >
                              <path
                                id="Icon_ionic-ios-person"
                                data-name="Icon ionic-ios-person"
                                d="M20.244,19.854c-.3-1.3-1.981-1.94-2.564-2.145a19.116,19.116,0,0,0-2.137-.41,2.171,2.171,0,0,1-.989-.455,8.64,8.64,0,0,1-.066-2.022,6.084,6.084,0,0,0,.468-.89,11.482,11.482,0,0,0,.345-1.555s.336,0,.455-.591a5.812,5.812,0,0,0,.3-1.374c-.025-.472-.283-.459-.283-.459a7.192,7.192,0,0,0,.279-2.1A3.38,3.38,0,0,0,12.381,4.5,3.365,3.365,0,0,0,8.7,7.847a7.5,7.5,0,0,0,.275,2.1s-.258-.012-.283.459A5.812,5.812,0,0,0,9,11.785c.115.591.455.591.455.591A11.482,11.482,0,0,0,9.8,13.931a6.084,6.084,0,0,0,.468.89,8.64,8.64,0,0,1-.066,2.022,2.171,2.171,0,0,1-.989.455,19.116,19.116,0,0,0-2.137.41c-.583.205-2.268.841-2.564,2.145a.328.328,0,0,0,.324.4H19.924A.327.327,0,0,0,20.244,19.854Z"
                                transform="translate(-4.501 -4.5)"
                                fill="#f99914"
                              />
                            </svg>
                            <span>Make admin</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="17.059"
                              height="17.059"
                              viewBox="0 0 17.059 17.059"
                            >
                              <g id="mute" transform="translate(0 -0.004)">
                                <path
                                  id="Path_1232"
                                  data-name="Path 1232"
                                  d="M17.059,8.533A8.529,8.529,0,1,0,8.53,17.063,8.529,8.529,0,0,0,17.059,8.533Z"
                                  transform="translate(0 0)"
                                  fill="#e04f5f"
                                />
                                <g
                                  id="Group_4407"
                                  data-name="Group 4407"
                                  transform="translate(3.704 4.392)"
                                >
                                  <path
                                    id="Path_1233"
                                    data-name="Path 1233"
                                    d="M112.951,127.679a.364.364,0,0,0-.372.015l-3.271,2.124H108.1a.364.364,0,0,0-.364.364v3.188a.364.364,0,0,0,.364.364h1.209l3.271,2.124a.364.364,0,0,0,.562-.305V128A.364.364,0,0,0,112.951,127.679Z"
                                    transform="translate(-107.735 -127.635)"
                                    fill="#fff"
                                  />
                                  <path
                                    id="Path_1234"
                                    data-name="Path 1234"
                                    d="M298.939,203.9l1.045-1.045a.309.309,0,1,0-.438-.438l-1.045,1.045-1.045-1.045a.309.309,0,1,0-.438.438l1.045,1.045-1.045,1.045a.309.309,0,1,0,.438.438l1.045-1.045,1.045,1.045a.309.309,0,1,0,.438-.438Z"
                                    transform="translate(-290.424 -199.762)"
                                    fill="#fff"
                                  />
                                </g>
                              </g>
                            </svg>
                            <span>Mute</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12.698"
                              height="16.308"
                              viewBox="0 0 12.698 16.308"
                            >
                              <path
                                id="delete"
                                d="M.892,14.482V3.61H11.764V14.482a1.761,1.761,0,0,1-.531,1.3,1.716,1.716,0,0,1-1.253.531H2.718a1.761,1.761,0,0,1-1.3-.531A1.765,1.765,0,0,1,.892,14.482ZM12.7.892V2.718H0V.892H3.185L4.077,0H8.621l.892.892Z"
                                fill="#0080ff"
                              />
                            </svg>
                            <span>Remove</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15.483"
                              height="15.483"
                              viewBox="0 0 15.483 15.483"
                            >
                              <path
                                id="Icon_metro-blocked"
                                data-name="Icon metro-blocked"
                                d="M14.644,3.339A7.742,7.742,0,1,0,3.7,14.287,7.742,7.742,0,1,0,14.644,3.339Zm.332,5.474A5.774,5.774,0,0,1,13.9,12.175L5.807,4.082a5.8,5.8,0,0,1,9.169,4.731Zm-11.612,0A5.774,5.774,0,0,1,4.439,5.45l8.093,8.093A5.8,5.8,0,0,1,3.364,8.813Z"
                                transform="translate(-1.428 -1.071)"
                                fill="#f60000"
                              />
                            </svg>
                            <span>Block</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15.651"
                              height="15.651"
                              viewBox="0 0 15.651 15.651"
                            >
                              <path
                                id="Icon_material-report"
                                data-name="Icon material-report"
                                d="M15.569,4.5H9.082L4.5,9.082v6.487l4.582,4.582h6.487l4.582-4.582V9.082ZM12.326,16.934a1.13,1.13,0,1,1,1.13-1.13A1.128,1.128,0,0,1,12.326,16.934ZM13.2,13.2H11.456V7.978H13.2Z"
                                transform="translate(-4.5 -4.5)"
                                fill="#9f9f9f"
                              />
                            </svg>
                            <span>Report</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <span className="green">ad_ge:</span> it's the same patch
                    though
                  </li>
                  <li>
                    <span className="purple">Moo_meander:</span> Mate Mate, a
                    natural energy drink, is caffeine reimagined! Get More Day,
                    More Night, AND 15% off Mate Mate with code BTSDOTA here
                  </li>
                  <li className="back-purple">
                    <span className="pnk">Aceucrank:</span> OB NEON GOT
                    VACCINATED
                  </li>
                  <li>
                    <span className="purple">Totoekung:</span> T1 just a better
                    team they are gonna win 2-0
                  </li>
                  <li className="orange-back">
                    <span className="yellow">Nines713:</span> all teams are just
                    lucky, some have good days have have bad
                  </li>
                  <li>
                    <span className="pnk">Aceucrank:</span> OB NEON GOT
                    VACCINATED
                  </li>
                  <li>
                    <span className="lght-purple">hardar2001:</span> chanel
                    point 120k. hmm dont know how to use it
                  </li>
                  <li>
                    <span className="pinkish">Red001:</span> chanel point 120k.
                    hmm dont know how to use it
                  </li>
                  <li>
                    <span className="pnk">Chessee:</span> black is the most
                    professional caster I've ever seen
                  </li>
                </ul>
                <div className="bottom-bar">
                  <div className="emoji">
                    <img src={weedEmoji} alt="" className="img-fluid" />
                  </div>
                  <div className="form-group mb-0">
                    <InputEmoji
                      value={text}
                      onChange={setText}
                      cleanOnEnter
                      onEnter={handleOnEnter}
                      placeholder="Send Message Here…"
                    />
                    <button className="btn" type="submit">
                      <svg
                        id="Send"
                        xmlns="http://www.w3.org/2000/svg"
                        width="22.766"
                        height="22.766"
                        viewBox="0 0 22.766 22.766"
                      >
                        <path
                          id="Path"
                          d="M22.123.662a2.2,2.2,0,0,0-2.2-.573L1.6,5.418A2.185,2.185,0,0,0,.028,7.149,2.565,2.565,0,0,0,1.169,9.543L6.9,13.064a1.485,1.485,0,0,0,1.832-.22l6.56-6.6a.835.835,0,0,1,1.207,0,.868.868,0,0,1,0,1.215l-6.572,6.6a1.506,1.506,0,0,0-.22,1.842l3.5,5.787a2.174,2.174,0,0,0,1.89,1.077,2.36,2.36,0,0,0,.285-.011,2.219,2.219,0,0,0,1.856-1.581l5.432-18.3A2.236,2.236,0,0,0,22.123.662Z"
                          transform="translate(0 0)"
                          fill="#fff"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* <div
                className={
                  setting ? "stream-setting show" : "stream-setting hide"
                }
              >
                <button className="setting" onClick={() => SetSetting(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34.131"
                    height="35.078"
                    viewBox="0 0 34.131 35.078"
                  >
                    <path
                      id="Exclusion_1"
                      data-name="Exclusion 1"
                      d="M-14419.319-8261.423h-6.736c-.348,0-.841-.354-.841-.686l-.674-4.453-.021-.01a16.232,16.232,0,0,1-2.843-1.7l-4.211,1.71a.655.655,0,0,1-.295.066.8.8,0,0,1-.712-.411l-3.367-5.988c-.18-.367-.156-.868.167-1.03l3.874-2.74a4.894,4.894,0,0,0-.075-.727,6.2,6.2,0,0,1-.1-.987,5.329,5.329,0,0,1,.171-1.71l-3.537-2.914a.811.811,0,0,1-.17-1.025l3.37-5.992a.825.825,0,0,1,.607-.242,1.244,1.244,0,0,1,.4.07l4.211,1.714a15.575,15.575,0,0,1,2.821-1.692l.042-.021.674-4.449a.586.586,0,0,1,.078-.543.8.8,0,0,1,.6-.316h6.733c.349,0,.844.354.844.685l.674,4.624a9.389,9.389,0,0,1,2.29,1.315l.085.06c.158.111.321.226.488.339l4.04-1.714a1.139,1.139,0,0,1,.371-.066,1.112,1.112,0,0,1,.807.411l3.367,5.989c.169.174,0,.684-.338,1.03l-3.536,2.739a4.859,4.859,0,0,0,.076.732v.008a6.112,6.112,0,0,1,.093.97,5.289,5.289,0,0,1-.17,1.714l3.536,2.91a.818.818,0,0,1,.171,1.029l-3.37,5.993a.83.83,0,0,1-.608.241,1.244,1.244,0,0,1-.4-.07l-4.211-1.71a16.11,16.11,0,0,1-2.856,1.707l-.006,0-.674,4.453A.773.773,0,0,1-14419.319-8261.423Zm-3.812-23.076a6.008,6.008,0,0,0-6,6,6.006,6.006,0,0,0,6,6,6.006,6.006,0,0,0,6-6A6.008,6.008,0,0,0-14423.132-8284.5Z"
                      transform="translate(14439.689 8296.001)"
                      fill="#fff"
                      stroke="rgba(0,0,0,0)"
                      stroke-miterlimit="10"
                      strokeWidth="1"
                    />
                  </svg>
                </button>
                <div className="heading-wrapper">
                  <span className="icon">
                    <img src={WeedIcon} alt="" className="img-fluid" />
                  </span>
                  <h3 className="txt">Broadcast Settings</h3>
                  <span className="icon">
                    <img src={WeedIcon} alt="" className="img-fluid" />
                  </span>
                </div>
                <form action="">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Tittle Live Stream Session"
                      className="form-control"
                    />
                  </div>
                  <div className="add-stream">
                    <button
                      type="button"
                      className="btn"
                      data-bs-toggle="modal"
                      data-bs-target="#addStreamerModal"
                    >
                      <svg
                        xmlns="http	://www.w3.org/2000/svg"
                        width="10.058"
                        height="10.058"
                        viewBox="0 0 10.058 10.058"
                      >
                        <g
                          id="Icon_feather-plus"
                          data-name="Icon feather-plus"
                          transform="translate(-6.5 -6.5)"
                        >
                          <path
                            id="Path_690"
                            data-name="Path 690"
                            d="M18,7.5v8.058"
                            transform="translate(-6.471)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                          <path
                            id="Path_691"
                            data-name="Path 691"
                            d="M7.5,18h8.058"
                            transform="translate(0 -6.471)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </g>
                      </svg>
                      Add Streamer
                    </button>
                  </div>
                  <ul className="toggle-setting">
                    <li>
                      <span>
                        <ruby>Comments</ruby>
                        <img src={Leaf} alt="" className="img-fluid" />
                      </span>
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                      </label>
                    </li>
                    <li>
                      <span>
                        <ruby>Stream Title</ruby>
                        <img src={Leaf} alt="" className="img-fluid" />
                      </span>
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                      </label>
                    </li>
                    <li>
                      <span>
                        <ruby>Rotate camera</ruby>
                        <img src={Leaf} alt="" className="img-fluid" />
                      </span>
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                      </label>
                    </li>
                    <li>
                      <span>
                        <ruby>Turn on flash</ruby>
                        <img src={Leaf} alt="" className="img-fluid" />
                      </span>
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                      </label>
                    </li>
                  </ul>
                  <div className="button-group">
                    <button
                      type="button"
                      className="btn"
                      data-bs-toggle="modal"
                      data-bs-target="#analyticsModal"
                    >
                      END LIVE SESSION
                    </button>
                  </div>
                </form>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LiveStreamDetail;
