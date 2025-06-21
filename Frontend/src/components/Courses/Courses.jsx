import { useEffect, useState } from "react";
import Cards from "./../Cards/Cards";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

function Courses() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE}/book`);
        setBook(res.data);
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

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="pt-32 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl aos-box" data-aos="fade-down">
            We're delighted to have you{" "}
            <span className=" text-red-500">Here! :)</span>
          </h1>
          <p className="mt-12 aos-box" data-aos="fade-down">
            Welcome to the Courses section of our Bookstore Web App! 📚 <br />
            Here, you'll find a curated selection of learning resources and
            book-based courses designed to help you expand your knowledge and
            skills. Whether you're a beginner or an advanced learner, explore
            topics across various genres and start your learning journey today!
          </p>
          <Link to={"/"}>
            <button
              className=" bg-black dark:bg-slate-950 text-white px-4 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer mt-6 aos-box"
              data-aos="fade-down"
            >
              Back
            </button>
          </Link>
        </div>
        <div className=" my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Courses;
