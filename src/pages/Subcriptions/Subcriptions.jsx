import React, { useEffect } from "react";
import Header from "../../components/Header";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import PageHeading from "../../components/PageHeading";
import { Col, Container, Row } from "react-bootstrap";
import "../../assets/css/subscription.css";
import {
  useGetAllSubscriptionsQuery,
  useSubscriptionPaymentMutation,
} from "../../redux/services/SubscriptionServices";
import { BeatLoader } from "react-spinners";
import Alert from "../../components/Alert/Alert";

const Subcriptions = () => {
  const { data, isLoading } = useGetAllSubscriptionsQuery();
  const [subscriptionPayment, paymentResponse] =
    useSubscriptionPaymentMutation();
  let getAllSubscription = data?.data;
  console.log(getAllSubscription, "ascnadata");

  const handleSubscription = (id) => {
    subscriptionPayment({ plan: id });
  };

  useEffect(() => {
    if (paymentResponse?.isSuccess) {
      console.log(paymentResponse?.data?.data, "asdcjnsacj");
      Alert({
        title: "Success",
        text: paymentResponse?.data?.message,
        // text: "Submitted Successfully",
      });
    }
    if (paymentResponse?.isError) {
      Alert({
        title: "Error",
        text: paymentResponse?.error?.data?.message,
        iconStyle: "error",
      });
    }
  }, [paymentResponse]);

  if (isLoading) {
    return (
      <>
        <div
          className="loading-wrapper d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <BeatLoader color="#fff" size={20} />
        </div>
      </>
    );
  }
  return (
    <>
      <Header />
      <PageHeader>
        <PageHeading
          heading={"Subcriptions"}
          text={
            "Lorem ipsum dolor sit amet consectetur. Augue commodo elementum augue placerat eleifend placer"
          }
        />
      </PageHeader>
      {/* subscription starts here */}
      <section className="subscription-sec">
        <Container>
          {/* <Row>
            <Col lg="4">
              <div className="subscription-card-wrapper">
                <div className="pricing-card">
                  <h3 className="heading-txt">Basic</h3>
                  <p className="price">
                    $9 <span>/ month</span>
                  </p>
                  <ul>
                    <li>1 User</li>
                    <li>5 Projects</li>
                    <li>Email Support</li>
                  </ul>
                  <button className="gradient-button">Get Started</button>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="subscription-card-wrapper">
                <div className="pricing-card featured">
                  <div className="badge">Popular</div>
                  <h3 className="heading-txt">Pro</h3>
                  <p className="price">
                    $29 <span>/ month</span>
                  </p>
                  <ul>
                    <li>5 Users</li>
                    <li>Unlimited Projects</li>
                    <li>Priority Support</li>
                  </ul>
                  <button className="gradient-button">Start Trial</button>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="subscription-card-wrapper">
                <div className="pricing-card">
                  <h3 className="heading-txt">Enterprise</h3>
                  <p className="price">Custom</p>
                  <ul>
                    <li>Unlimited Users</li>
                    <li>Advanced Integrations</li>
                    <li>Dedicated Manager</li>
                  </ul>
                  <button className="gradient-button">Contact Us</button>
                </div>
              </div>
            </Col>
          </Row> */}
          <Row>
            {getAllSubscription?.map((subscription, i) => {
              return (
                <Col lg="4">
                  <div className="subscription-card-wrapper">
                    <div
                      className={
                        subscription?.slug == "elite-plan"
                          ? "pricing-card featured"
                          : "pricing-card"
                      }
                    >
                      {subscription?.slug == "elite-plan" && (
                        <div className="badge">Popular</div>
                      )}

                      <h3 className="heading-txt">{subscription?.name}</h3>
                      <p className="price">
                        ${subscription?.price}{" "}
                        <span>/ {subscription?.billing_period}</span>
                      </p>
                      <ul>
                        {subscription?.features?.map((feature, i) => {
                          return <li>{feature}</li>;
                        })}
                      </ul>
                      <button
                        className="gradient-button"
                        onClick={() => handleSubscription(subscription?.id)}
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      {/* subscription ends here */}
      <Newsletter />
      <Footer />
    </>
  );
};

export default Subcriptions;
