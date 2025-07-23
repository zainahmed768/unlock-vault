import React, { useState } from "react";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import PageHeading from "../components/PageHeading";
import { Button, Col, Container, Row } from "react-bootstrap";
import { photoData, videosData } from "../constant/Data";
import VideoCard from "../components/VideoCard";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import CustomModal from "../components/CustomModal";

const Photos = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Header />
      {/* page Header starts here */}
      <PageHeader>
        <PageHeading
          heading={"photos"}
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
      <section className="video-sec">
        <Container>
          <Row className="video-row">
            {photoData?.map((video, i) => {
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
      <Button onClick={() => setShowModal(true)}>Open Modal</Button>

      <CustomModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title="My Reusable Modal"
        footer={
          <>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button variant="primary">Save Changes</Button>
          </>
        }
      >
        <p>This is the modal content you can customize.</p>
      </CustomModal>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Photos;
