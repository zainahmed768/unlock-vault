import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import PageHeading from "../components/PageHeading";
import Newsletter from "../components/Newsletter";
import { Col, Container, Form, Row } from "react-bootstrap";
import { contactImg } from "../constant/Index";
import "../assets/css/contactus.css";

const ContactUs = () => {
  return (
    <>
      <Header />
      {/* page Header starts here */}
      <PageHeader>
        <PageHeading
          heading={"Contact Us"}
          text={
            "Lorem ipsum dolor sit amet consectetur. Augue commodo elementum augue placerat eleifend placer"
          }
        />
        {/* contact starts here */}
        <section className="contact-sec">
          <Container>
            <Row>
              <Col lg="6">
                <div className="contact-img-wrapper text-center">
                  <figure>
                    <img src={contactImg} className="img-fluid" alt="" />
                  </figure>
                </div>
              </Col>
              <Col lg="6">
                <div className="contact-form-wrapper">
                  <Form>
                    <Row className="mb-4">
                      <Col md={6}>
                        <Form.Group controlId="firstName">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="firstName2">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mb-4">
                      <Col md={6}>
                        <Form.Group controlId="lastName">
                          <Form.Label>Enter Email</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="lastName2">
                          <Form.Label>Enter PhoneNumber</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mb-4">
                      <Col>
                        <Form.Group controlId="email">
                          <Form.Label>Enter Message</Form.Label>
                          <Form.Control as="textarea" rows={5} />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="12">
                        <div className="contact-btn-wrapper text-end">
                          <button className="gradient-button">
                            Enter a Vault
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* contact ends here */}
      </PageHeader>
      {/* page Header ends here */}
      <Newsletter />
      <Footer />
    </>
  );
};

export default ContactUs;
