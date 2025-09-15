import React from "react";
import { qrImg } from "../constant/Index";

const QrScan = () => {
  return (
    <>
      {/* page header starts here */}
      <PageHeader>
        <section className="auth-sec">
          <Container>
            <Row>
              <Col lg="2"></Col>
              <Col lg="8">
                <div className="auth-card-wrapper">
                  <div className="auth-logo-wrapper text-center">
                    <div className="logo-txt-wrapper">
                      <h5 className="heading-txt">Scan QR To Enter a Vault</h5>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                      </p>
                    </div>
                  </div>
                  <div className="auth-fields-wrapper mt-5">
                    <div className="qr-img-wrapper">
                      <figure>
                        <img src={qrImg} className="img-fluid" alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </PageHeader>
      {/* page header ends here */}
    </>
  );
};

export default QrScan;
