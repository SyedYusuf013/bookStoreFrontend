import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Aboutus from "../components/Aboutus/Aboutus";

function About() {
  return (
    <>
      <div>
        <Navbar />
        <div className=" min-h-screen">
          <Aboutus />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;
