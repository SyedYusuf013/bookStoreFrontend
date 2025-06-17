import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Mission from "../../assets/b1.jpg";
import ChooseUs from "../../assets/b2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Aboutus() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 200, // Offset (distance from top to trigger animation)
    });
  }, []);

  const handleClickMail = () => {
    alert("Right now we don't have a business mail");
  };

  return (
    <>
      <div className="">
        <div className="my-16 bg-base-100 dark:bg-gray-900 text-white dark:text-white max-w-screen-2xl container mx-auto md:px-20 px-4 pt-20">
          <div className="  px-4 items-center justify-center text-center">
            <h1
              className=" relative md:text-4xl text-2xl mb-8 font-bold after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:transform after:-translate-x-1/2 after:w-10 after:h-1 dark:after:bg-red-500 after:bg-red-500 aos-box"
              data-aos="fade-up"
            >
              About Us
            </h1>

            {/* Introduction */}
            <section className="mb-16 ">
              <p className="text-xl leading-relaxed aos-box" data-aos="fade-up">
                <span className="font-medium text-red-500">BookVerse</span> is
                more than just a bookstore — it’s an online platform created to
                ignite a love for reading, make books accessible to all, and
                simplify the entire book discovery and buying experience.
                Whether you’re a lifelong reader, a student, or someone just
                beginning their literary journey,{" "}
                <span className="font-medium text-red-500">BookVerse</span> is
                here to guide you. Our web app helps users browse, search, and
                order books seamlessly from the comfort of their homes.
              </p>
            </section>

            {/* Our Story */}
            <section className="mb-16 items-start justify-start text-start">
              <h2
                className="text-xl font-semibold mb-2 text-red-500 aos-box"
                data-aos="fade-up"
              >
                Our Story
              </h2>
              <p className="text-md leading-relaxed aos-box" data-aos="fade-up">
                <span className="font-medium text-red-500">BookVerse</span> was
                born out of a simple idea — to build a digital haven for book
                lovers. We realized that many readers were struggling to find
                reliable, well-organized, and affordable platforms to buy books,
                especially in smaller cities. That’s when we decided to create
                <span className="font-medium text-red-500"> BookVerse</span>: a
                space where people from all walks of life can easily access a
                wide range of books, connect over shared interests, and support
                independent authors. We started small but dreamed big — and
                today,{" "}
                <span className="font-medium text-red-500">BookVerse</span> is
                growing into a trusted name for every book enthusiast.
              </p>
            </section>

            {/* Vision */}
            <section className="mb-16 items-start justify-start text-start">
              <h2
                className="text-xl font-semibold mb-2 text-red-500 aos-box"
                data-aos="fade-up"
              >
                Our Vision
              </h2>
              <p className="text-md leading-relaxed aos-box" data-aos="fade-up">
                Our vision is to become India’s leading digital bookstore and
                reading platform — a place where every individual can find their
                next favorite book. We aim to empower readers and foster a
                culture of continuous learning by blending technology with the
                timeless joy of reading. We envision a future where quality
                literature is just a click away for anyone, anywhere.
              </p>
            </section>

            {/* Our Mission */}
            <section className="mb-16 flex flex-col md:flex-row items-center gap-8 text-start">
              {/* Text */}
              <div className="md:w-1/2">
                <h2
                  className="text-xl font-semibold mb-2 text-red-500 aos-box"
                  data-aos="fade-up"
                >
                  Our Mission
                </h2>
                <p
                  className="text-md leading-relaxed aos-box"
                  data-aos="fade-up"
                >
                  At <span className="font-medium text-red-500">BookVerse</span>
                  , our mission is to make reading a habit for everyone. We
                  strive to:
                </p>
                <ul className="list-disc ml-6 mt-2 text-lg space-y-1 text-left">
                  <li
                    className="[&::marker]:text-red-500 aos-box"
                    data-aos="fade-up"
                  >
                    Offer a vast and diverse collection of books for all age
                    groups and interests
                  </li>
                  <li
                    className="[&::marker]:text-red-500 aos-box"
                    data-aos="fade-up"
                  >
                    Promote literacy, creativity, and self-improvement through
                    accessible reading
                  </li>
                  <li
                    className="[&::marker]:text-red-500 aos-box"
                    data-aos="fade-up"
                  >
                    Support budding authors and lesser-known publishers by
                    featuring their work
                  </li>
                  <li
                    className="[&::marker]:text-red-500 aos-box"
                    data-aos="fade-up"
                  >
                    Leverage technology to enhance the browsing and buying
                    experience
                  </li>
                  <li
                    className="[&::marker]:text-red-500 aos-box"
                    data-aos="fade-up"
                  >
                    Encourage thoughtful discussions and community engagement
                    around books
                  </li>
                </ul>
              </div>
              {/* Image */}
              <div className="md:w-1/2 ">
                <img
                  src={Mission}
                  alt="Mission"
                  className="w-[500px] h-[450px] ml-36  rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 aos-box"
                  data-aos="fade-up"
                />
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="mb-16 flex flex-col md:flex-row-reverse items-center gap-8 text-start">
              {/* Text */}
              <div className="md:w-1/2">
                <h2
                  className="text-xl font-semibold mb-2 text-red-500 aos-box"
                  data-aos="fade-up"
                >
                  Why Choose Us?
                </h2>
                <ul className="list-disc ml-6 text-lg space-y-3">
                  <li
                    className="[&::marker]:text-red-500 aos-box"
                    data-aos="fade-up"
                  >
                    <span className="font-normal">Wide Selection:</span> From
                    fiction and non-fiction to academic and self-help books —
                    we’ve got it all.
                  </li>
                  <li
                    className="[&::marker]:text-red-500 aos-box"
                    data-aos="fade-up"
                  >
                    <span className="font-normal">User-Friendly Platform:</span>{" "}
                    Clean, responsive, and intuitive design makes book discovery
                    easy and enjoyable.
                  </li>
                  <li
                    className="[&::marker]:text-red-500 aos-box"
                    data-aos="fade-up"
                  >
                    <span className="font-normal">Secure Checkout:</span> Smooth
                    and safe payment options ensure complete peace of mind.
                  </li>
                  <li
                    className="[&::marker]:text-red-500 aos-box"
                    data-aos="fade-up"
                  >
                    <span className="font-normal">Fast Delivery:</span> Get your
                    books delivered quickly no matter where you live in India.
                  </li>
                  <li
                    className="[&::marker]:text-red-500 aos-box"
                    data-aos="fade-up"
                  >
                    <span className="font-normal">
                      Reader-Centric Approach:
                    </span>{" "}
                    Our recommendations and features are built with real readers
                    in mind.
                  </li>
                  <li
                    className="[&::marker]:text-red-500 aos-box"
                    data-aos="fade-up"
                  >
                    <span className="font-normal">24/7 Support:</span> Our team
                    is always here to help you with your queries and orders.
                  </li>
                </ul>
              </div>
              {/* Image */}
              <div className="md:w-1/2 ">
                <img
                  src={ChooseUs}
                  alt="Why Choose Us"
                  className="w-[500px] h-[450px] rounded-lg shadow-md  transition-transform duration-300 transform hover:scale-105 aos-box"
                  data-aos="fade-up"
                />
              </div>
            </section>

            {/* Get in Touch */}
            <section className="mb-10 items-start justify-start text-start">
              <h2
                className="text-xl font-semibold mb-2 text-red-500 aos-box"
                data-aos="fade-up"
              >
                Get in Touch
              </h2>
              <p className="text-md aos-box" data-aos="fade-up">
                Have questions, feedback, or book recommendations? We’d love to
                hear from you. Reach out to us via our contact form or email us
                directly at{" "}
                <Link
                  to="/contactus"
                  className="text-blue-500 hover:underline cursor-pointer"
                  onClick={handleClickMail}
                >
                  syedyusuf@booksystem.com
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
