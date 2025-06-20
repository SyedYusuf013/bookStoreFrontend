import React from "react";
import Banner from "../components/Banner/Banner";
import Freebook from "../components/Freebook/Freebook";
import Testimonials from "../components/Testimonials/Testimonials";

function Home() {
  return (
    <>
      <div>
        <Banner />
        <Freebook />
        <Testimonials />
      </div>
    </>
  );
}

export default Home;
