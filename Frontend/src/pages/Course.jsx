import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Courses from "../components/Courses/Courses";
import Footer from "../components/Footer/Footer";

function Course() {
  return (
    <>
      <div>
        <Navbar />
        <div className=" min-h-screen">
          <Courses />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Course;
