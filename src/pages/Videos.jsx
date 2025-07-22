import React from "react";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import PageHeading from "../components/PageHeading";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Videos = () => {
  return (
    <>
      <Header />
      {/* page Header starts here */}
      <PageHeader>
        <PageHeading
          heading={"Videos"}
          text={
            "Lorem ipsum dolor sit amet consectetur. Augue commodo elementum augue placerat eleifend placer"
          }
        />
      </PageHeader>

      <Newsletter />
      <Footer />
    </>
  );
};

export default Videos;
