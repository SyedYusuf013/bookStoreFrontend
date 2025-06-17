import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Contactus from "../components/Contactus/Contactus";

function Contact() {
  return (
    <>
      <div>
        <Navbar />
        <div className=" min-h-screen">
          <Contactus />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
