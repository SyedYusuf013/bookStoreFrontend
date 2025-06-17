import React, { useEffect } from "react";
import Slider from "react-slick";
import { FaQuoteLeft, FaRegStar, FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonialsData = [
  {
    id: 1,
    name: "Jhone Dehon",
    role: "CEO of Miracle",
    image:
      "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg",
    text: "This is a platform where I'am looking for it, this will help me to grow faster and easier. Very worth it.",
    stars: 4,
  },
  {
    id: 2,
    name: "Sara Lee",
    role: "CTO of VisionX",
    image:
      "https://img.freepik.com/free-photo/portrait-beautiful-smiling-woman-casual-clothes_176420-15187.jpg",
    text: "They delivered beyond expectations. I'm extremely satisfied and will continue working with them.",
    stars: 5,
  },
  {
    id: 3,
    name: "David Mark",
    role: "Freelancer",
    image:
      "https://img.freepik.com/free-photo/handsome-young-man-posing-studio_176420-28468.jpg",
    text: "Very helpful and quick support. Excellent experience overall!",
    stars: 4,
  },
  {
    id: 4,
    name: "Emily Watson",
    role: "Marketing Manager",
    image:
      "https://img.freepik.com/free-photo/happy-smiling-woman-posing-outdoors_176420-27269.jpg",
    text: "Great communication, smooth process, and quality output!",
    stars: 5,
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 200, // Offset (distance from top to trigger animation)
    });
  }, []);

  const settings = {
    dots: true,
    arrows: false, // ❌ removes < > arrows
    autoplay: true, // ✅ enable auto scroll
    autoplaySpeed: 2000, // 2.5 seconds interval
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-16">
      <h1
        className="text-xl pb-2 text-red-500 text-center aos-box"
        data-aos="fade-up"
      >
        See What Our Customers Say <span className="text-white">:)</span>
      </h1>
      <p
        className="text-md mb-10 text-center text-white aos-box"
        data-aos="fade-up"
      >
        See what our valued users have to say about their experiences with this
        website. And how it will save their time and effort.
      </p>

      <Slider {...settings}>
        {testimonialsData.map((item) => (
          <div key={item.id} className="px-4 pb-8 aos-box" data-aos="fade-up">
            <div className="bg-base-200 dark:bg-slate-950 rounded-lg shadow-xl p-6 relative transition-transform duration-300 hover:scale-105">
              <FaQuoteLeft className="absolute top-4 left-4 text-white  text-lg" />
              <img
                src={item.image}
                alt={item.name}
                className="w-[100px] h-[100px] rounded-full border-4 border-primary object-cover mx-auto transform transition-transform duration-300 hover:scale-110"
              />
              <p className="text-sm text-center mt-6 text-white ">
                {item.text}
              </p>
              <div className="mt-6 flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold ">{item.name}</h2>
                  <p className="text-sm text-[#727272] dark:text-slate-400">
                    {item.role}
                  </p>
                </div>
                <div className="flex gap-1 text-[#ffba24]">
                  {[...Array(5)].map((_, index) =>
                    index < item.stars ? (
                      <FaStar key={index} className="text-lg" />
                    ) : (
                      <FaRegStar key={index} className="text-lg" />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
