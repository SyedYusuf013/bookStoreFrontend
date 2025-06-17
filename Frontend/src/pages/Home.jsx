import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Freebook from "../components/Freebook/Freebook";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        <Freebook />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default Home;
