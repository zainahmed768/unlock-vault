import React from "react";
import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";
import PageHeading from "../../components/PageHeading";
import { Col, Container, Row } from "react-bootstrap";
import { streamData, videosData } from "../../constant/Data";
import VideoCard from "../../components/VideoCard";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";

const LiveStreamList = () => {
  return (
    <>
      <Header />
      {/* page Header starts here */}
      <PageHeader>
        <PageHeading
          heading={"Live Stream"}
          text={
            "Lorem ipsum dolor sit amet consectetur. Augue commodo elementum augue placerat eleifend placer"
          }
        />
        <section
          className="placeholder-sec"
          style={{ height: "500px" }}
        ></section>
      </PageHeader>
      {/* video section starts here */}
      <section className="page-video-sec">
        <Container>
          <Row className="video-row">
            {streamData?.map((video, i) => {
              return (
                <Col lg="4" className="p-0">
                  <VideoCard video={video} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      {/* video section ends here */}
      <Newsletter />
      <Footer />
    </>
  );
};

export default LiveStreamList;
