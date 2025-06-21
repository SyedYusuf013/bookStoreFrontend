import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "../Cards/Cards";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const Freebook = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE}/book`);
        const data = res.data.filter((data) => data.category === "Free");
        setBook(data);
      } catch (err) {
        console.log("❌ Something went wrong", err.message);
      }
    };
    getBook();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 200, // Offset (distance from top to trigger animation)
    });
  }, []);

  var settings = {
    dots: true,
    arrows: false, // ❌ removes < > arrows
    autoplay: true, // ✅ enable auto scroll
    autoplaySpeed: 2000, // 2.5 seconds interval
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false, // ✅ prevent overlapping
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 my-16">
        <div>
          <h1
            className="  text-xl pb-2 text-red-500 aos-box"
            data-aos="fade-up"
          >
            Free Offered Courses
          </h1>
          <p className=" text-md aos-box" data-aos="fade-up">
            Discover our collection of free books, handpicked for avid readers
            like you. Enjoy a variety of genres, from timeless classics to
            contemporary gems, all available at no cost. Whether you're looking
            to explore new worlds or gain fresh insights, these books are yours
            to enjoy, anytime, anywhere.
          </p>
        </div>
        <div className=" mt-10 -mb-16">
          <div
            className="slider-container px-0 sm:px-4 aos-box"
            data-aos="fade-up"
          >
            <Slider {...settings}>
              {book.map((item) => (
                <Cards item={item} key={item.id} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Freebook;
