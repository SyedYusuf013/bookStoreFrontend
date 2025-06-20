import React, { useEffect, useState } from "react";
import banner from "../../../src/assets/b3.jpg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Mail } from "lucide-react";

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size on load
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind md: breakpoint is 768px
    };

    handleResize(); // check on mount
    window.addEventListener("resize", handleResize); // check on resize

    AOS.init({ duration: 1000, offset: 200 });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [isMobile]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row md:space-x-10 my-7">
        <div className=" w-full md:w-1/2 md:mt-32 mt-12 md:order-1 order-2 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" space-y-12">
              <h1
                className=" text-4xl font-bold aos-box"
                data-aos={isMobile ? "fade-up" : "fade-right"}
              >
                Hello, welcome here to learn something{" "}
                <span className=" text-red-500">New Everyday!!!</span>
              </h1>
              <p
                className=" text-xl aos-box"
                data-aos={isMobile ? "fade-up" : "fade-right"}
              >
                Explore a diverse range of books that cater to every kind of
                reader. Whether you're drawn to gripping thrillers, heartwarming
                romances, thought-provoking non-fiction, or inspiring
                biographies, there's something here for everyone. Dive into
                captivating stories and discover your next favorite read today.
              </p>

              <label
                className="input w-full h-12 flex items-center gap-2 px-3 py-2 border rounded-md validator dark:bg-slate-950 dark:text-white bg-base-200 focus-within:outline-none focus-within:ring-0 focus-within:shadow-none aos-box"
                data-aos={isMobile ? "fade-up" : "fade-right"}
              >
                <input
                  type="email"
                  placeholder="mail@site.com"
                  className="grow outline-none"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className=" text-sm text-red-500 flex justify-start">
                    <br />
                    <br />
                    <br />
                    <br />
                    This field is required
                  </span>
                )}
                <Mail className="h-5 opacity-50" />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </div>
            <div className="flex justify-between ">
              <Link
                to="/courses"
                className="bg-black dark:bg-slate-950 text-white px-5 py-3 rounded-md hover:bg-slate-800 duration-300 cursor-pointer transition-transform transform hover:scale-105 aos-box"
                data-aos={isMobile ? "fade-up" : "fade-right"}
              >
                Get Started
              </Link>

              <button
                className="bg-black dark:bg-slate-950 text-white px-5 py-3 rounded-md hover:bg-slate-800 duration-300 cursor-pointer transition-transform transform hover:scale-105 aos-box"
                data-aos={isMobile ? "fade-up" : "fade-left"}
              >
                Connect
              </button>
            </div>
          </form>
        </div>
        <div
          className=" w-full md:w-1/2 md:mt-32 mt-12 md:order-2 order-1 aos-box"
          data-aos={isMobile ? "fade-up" : "fade-left"}
        >
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] transition-transform duration-300 transform hover:scale-105"
            alt="Banner"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
