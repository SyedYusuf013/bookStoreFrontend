import { Mail, MessageSquare, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";

function Contactus() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
    });
  }, []);

  const [focusedField, setFocusedField] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    try {
      if (!name.trim() || !email.trim() || !message.trim()) {
        toast.error("All fields are required.");
        return;
      }

      toast.success("Message Sent successfully");
      console.log("Message Sent: ", { name, email, message });

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while sending the message.");
    }
  };
  return (
    <>
      <div className="">
        <div
          className="flex items-center justify-center min-h-screen dark:bg-slate-900 dark:text-white pt-32 aos-box"
          data-aos="fade-up"
        >
          <div
            className={`relative md:w-[750px] md:h-[450px] bg-base-200  dark:bg-slate-800 dark:text-white border-2 border-black rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300 `}
          >
            {/* Back to Dashboard Button */}
            <Link
              to="/"
              className="absolute z-30 md:px-4 px-3 py-2 md:py-2 md:text-sm text-xs font-semibold text-white transition-colors duration-300 bg-black dark:bg-slate-950 md:bg-base-200 md:dark:bg-slate-800 md:dark:hover:bg-slate-900 md:dark:hover:text-white border border-gray-300 rounded-full shadow-md md:top-8 md:right-10 top-6 right-6 md:hover:bg-gray-100 md:hover:text-black"
            >
              ← Back to Home
            </Link>

            {/* Rotating Background 1 */}
            <span
              className={`absolute md:-top-1 md:right-0 md:w-[850px] md:h-[600px] bg-black origin-bottom-right transition-all duration-[0.6s] rotate-[10deg] skew-y-[40deg] dark:bg-slate-950`}
            ></span>

            {/* Login Form */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center text-right">
              <h2 className="text-white md:text-4xl text-3xl font-semibold dark:text-white text-center md:my-4 mt-12 relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:transform after:-translate-x-1/2 after:w-10 after:h-1 dark:after:bg-slate-950 after:bg-black">
                Contact Us
              </h2>

              <form
                onSubmit={(e) => {
                  submitHandler(e);
                }}
                className=""
              >
                <div className={`relative w-full h-12 my-6 `}>
                  <input
                    type="text"
                    placeholder=" "
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    minLength="3"
                    maxLength="30"
                    title="Only letters, numbers or dash"
                    className="w-full h-full pr-6 text-base font-medium text-white transition-all duration-500 bg-transparent border-b-2 border-black outline-none peer dark:border-slate-950"
                  />
                  <label
                    className={`absolute left-0 px-3 py-2 text-base text-white/50 transition-all duration-500 transform pointer-events-none outline-none ${
                      focusedField === "name" || name
                        ? "top-[-25px] text-custom-blue text-base"
                        : "top-1/2 -translate-y-1/2"
                    }`}
                  >
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
                    placeholder=" "
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full h-full pr-6 text-base font-medium text-white transition-all duration-500 bg-transparent border-b-2 border-black dark:border-slate-950 outline-none peer "
                  />
                  <label
                    className={`absolute left-0 px-3 py-2 text-base text-white/50 transition-all duration-500 transform pointer-events-none outline-none ${
                      focusedField === "email" || email
                        ? "top-[-25px] text-custom-blue text-base"
                        : "top-1/2 -translate-y-1/2"
                    }`}
                  >
                    email
                  </label>

                  <Mail className="absolute right-0 text-lg transition-all duration-500 transform -translate-y-1/2 bx bxs-envelope top-1/2 peer-focus:text-custom-blue peer-valid:text-custom-blue text-white/50 " />
                </div>

                <div className="relative w-full h-12 my-4 ">
                  <textarea
                    type="message"
                    placeholder=" "
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full h-full pr-6 text-base font-medium text-white transition-all duration-500 bg-transparent border-b-2 border-black dark:border-slate-950 outline-none peer "
                  ></textarea>

                  <label
                    className={`absolute left-0 px-3 py-2 text-base text-white/50 transition-all duration-500 transform pointer-events-none outline-none ${
                      focusedField === "message" || message
                        ? "top-[-25px] text-custom-blue text-base"
                        : "top-1/2 -translate-y-1/2"
                    }`}
                  >
                    Message
                  </label>
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
              className={`absolute md:top-0 md:right-0 md:w-1/2 md:h-full flex flex-col justify-center md:text-right md:pr-10 md:pl-36 md:pb-16 transition-all duration-300 `}
            >
              <h2 className="md:text-4xl md:font-semibold md:leading-tight md:text-white md:uppercase md:pt-12">
                Connect with us here!!
              </h2>
              <p className="md:mt-2 md:text-base md:text-white ">
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
