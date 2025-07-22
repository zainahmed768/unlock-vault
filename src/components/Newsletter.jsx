import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { starIcon } from "../constant/Index";

const Newsletter = () => {
  return (
    <>
      {/* newsletter starts here */}
      <section className="newsletter-sec">
        <Container>
          <Row>
            <Col lg="2" />
            <Col lg="8">
              <div className="newsletter-row-heading text-center">
                <div className="newsletter-tag-wrapper d-inline-flex gap-3 justify-content-center align-items-center mb-4">
                  <h6 className="mb-0">Newsletter</h6>
                  <img src={starIcon} className="img-fluid" alt="" />
                </div>
                <div className="newsletter-heading-wrap">
                  <h3 className="heading-txt">
                    Sign Up To Our Daily Newsletter
                  </h3>
                  <p>ces tailored to meet the unique needs of your busine</p>
                </div>
              </div>
              <div className="newsletter-fields-wrapper w-75 mx-auto">
                <Form className="d-flex justify-content-between">
                  <Form.Control
                    type="email"
                    placeholder="Enter your email here"
                    className="me-2 bg-dark text-white border-secondary"
                  />
                  <button className="gradient-button">Submit</button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* newsletter ends here */}
    </>
  );
};

export default Newsletter;
