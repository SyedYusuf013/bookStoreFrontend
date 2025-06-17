import { Mail, MessageSquare, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Contactus() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 200, // Offset (distance from top to trigger animation)
    });
  }, []);

  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Mail send:", registerForm);
  };

  const handleRegisterChange = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.message]: e.target.value,
    });
  };
  return (
    <>
      <div className="">
        <div
          className="flex items-center justify-center min-h-screen dark:bg-slate-900 dark:text-white pt-32 aos-box"
          data-aos="fade-up"
        >
          <div
            className={`relative w-[750px] h-[450px] bg-base-200  dark:bg-slate-800 dark:text-white border-2 border-black rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300 `}
          >
            {/* Back to Dashboard Button */}
            <Link
              to="/"
              className="absolute z-30 px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 bg-base-200 dark:bg-slate-800 dark:hover:bg-slate-900 dark:hover:text-white border border-gray-300 rounded-full shadow-md top-8 right-10  hover:bg-gray-100 hover:text-black"
            >
              ← Back to Home
            </Link>

            {/* Rotating Background 1 */}
            <span
              className={`absolute -top-1 right-0 w-[850px] h-[600px] bg-black origin-bottom-right transition-all duration-[0.6s] rotate-[10deg] skew-y-[40deg] dark:bg-slate-950`}
            ></span>

            {/* Login Form */}
            <div
              className={`absolute top-0 left-0 w-1/2 h-full flex flex-col justify-center pl-10 pr-16 transition-all duration-300 `}
            >
              <h2 className="text-white text-3xl font-semibold dark:text-white text-center mb-2 relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:transform after:-translate-x-1/2 after:w-10 after:h-1 dark:after:bg-slate-950 after:bg-black">
                Contact Us
              </h2>

              <form onSubmit={handleRegisterSubmit} className="">
                <div className="relative w-full h-12 my-6 ">
                  <input
                    type="text"
                    name="name"
                    value={registerForm.name}
                    onChange={handleRegisterChange}
                    required
                    pattern="[A-Za-z][A-Za-z0-9\-]*"
                    minLength="3"
                    maxLength="30"
                    title="Only letters, numbers or dash"
                    className="w-full h-full pr-6 text-base font-medium text-white transition-all duration-500 bg-transparent border-b-2 border-black outline-none peer dark:border-slate-950"
                  />
                  <label className=" absolute top-1/2 left-0 transform -translate-y-1/2 text-base text-white/50 pointer-events-none transition-all duration-500 peer-focus:top-[-5px] peer-focus:text-custom-blue peer-focus:text-base peer-valid:top-[-5px] peer-valid:text-custom-blue peer-valid:text-base px-3 py-2 outline-none">
                    Name
                  </label>
                  <p className="invisible mt-2 text-xs">
                    Must be 3 to 30 characters
                    <br />
                    containing only letters, numbers or dash
                  </p>
                  <User className="absolute right-0 text-lg transition-all duration-500 transform -translate-y-1/2 bx bxs-user top-1/2 peer-focus:text-custom-blue peer-valid:text-custom-blue text-white/50 " />
                </div>

                <div className="relative w-full h-12 my-4">
                  <input
                    type="email"
                    name="email"
                    value={registerForm.email}
                    onChange={handleRegisterChange}
                    required
                    className="w-full h-full pr-6 text-base font-medium text-white transition-all duration-500 bg-transparent border-b-2 border-black dark:border-slate-950 outline-none peer "
                  />
                  <label className="  absolute top-1/2 left-0 transform -translate-y-1/2 text-base text-white/50 pointer-events-none transition-all duration-500 peer-focus:top-[-5px] peer-focus:text-custom-blue peer-focus:text-base peer-valid:top-[-5px] peer-valid:text-custom-blue peer-valid:text-base px-3 py-2 outline-none">
                    Email
                  </label>
                  <Mail className="absolute right-0 text-lg transition-all duration-500 transform -translate-y-1/2 bx bxs-envelope top-1/2 peer-focus:text-custom-blue peer-valid:text-custom-blue text-white/50 " />
                </div>

                <div className="relative w-full h-12 my-4">
                  <textarea
                    type="message"
                    name="message"
                    placeholder="Message"
                    value={registerForm.message}
                    onChange={handleRegisterChange}
                    className=" w-full h-full pr-6 text-base font-medium text-white transition-all duration-500 bg-transparent border-b-2 border-black dark:border-slate-950 outline-none peer placeholder:px-3 placeholder:py-2 placeholder:text-white/50"
                  ></textarea>
                  <label className=" absolute top-1/2 pt-16 left-0 transform -translate-y-1/2 text-base text-white/50 pointer-events-none transition-all duration-500 peer-focus:top-[-5px] peer-focus:text-custom-blue peer-focus:text-base peer-valid:top-[-5px] peer-valid:text-custom-blue peer-valid:text-base px-3 py-2 outline-none"></label>
                  <MessageSquare className="absolute right-0 text-lg transition-all duration-500 transform -translate-y-1/2 bx bxs-envelope top-1/2 peer-focus:text-custom-blue peer-valid:text-custom-blue text-white/50 " />
                </div>

                <button
                  type="submit"
                  className="w-full h-11 bg-black dark:bg-slate-950 text-white border-none outline-none rounded-[40px] cursor-pointer text-base font-semibold transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.8)] mt-8"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Login Info Text */}
            <div
              className={`absolute top-0 right-0 w-1/2 h-full flex flex-col justify-center text-right pr-10 pl-36 pb-16 transition-all duration-300 `}
            >
              <h2 className="text-4xl font-semibold leading-tight text-white uppercase pt-12">
                Connect with us here!!
              </h2>
              <p className="mt-2 text-base text-white">
                Hello user, We are glad to see you here, now connect with us.
                <br /> Start Reading!!! <br />
                Start Learning!!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
