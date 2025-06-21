import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthProvider";

function Login() {
  const navigate = useNavigate();

  const { authUser, setAuthUser } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [currState, setCurrState] = useState("Login");

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const handleSignup = async (data) => {
    const signUpInfo = {
      username: data.username,
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE}/user/signup`,
        signUpInfo
      );
      if (res.data) {
        console.log(res.data);
        toast.success("Signup Successfully");
        reset();
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        setAuthUser(res.data.user);
        const redirectTo = localStorage.getItem("redirectAfterLogin");
        if (redirectTo) {
          localStorage.removeItem("redirectAfterLogin");
          navigate(redirectTo);
          toast.success("Redirected to your destination");
        } else {
          navigate("/");
        }
      }
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("Signup Error: " + err.response.data.message);
      }
    }
  };

  const handleLogin = async (data) => {
    const logInInfo = {
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE}/user/login`,
        logInInfo
      );
      if (res.data) {
        console.log(res.data);
        toast.success("LoggedIn Successfully");
        reset();
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        localStorage.setItem("Token", res.data.token);
        setAuthUser(res.data.user);

        // Redirect back
        const redirectTo = localStorage.getItem("redirectAfterLogin");
        if (redirectTo) {
          localStorage.removeItem("redirectAfterLogin");
          navigate(redirectTo);
          toast.success("Redirected to your destination");
        } else {
          navigate("/");
        }
      }
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("Login Error: " + err.response.data.message);
      }
    }
  };

  const onSubmit = (data) => {
    if (currState === "Sign Up") {
      handleSignup(data);
    } else {
      handleLogin(data);
    }
  };

  return (
    <>
      <div className="">
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute border border-black/10 hover:border-black dark:border-white/10 dark:hover:border-white duration-300 right-2 top-2 hover:dark:bg-slate-950 m-2"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </Link>

              <h3 className="font-semibold text-lg">{currState}</h3>
              <div className=" px-6 my-4 space-y-2">
                {/* username section */}
                {currState === "Login" ? null : (
                  <div className=" mb-4">
                    <span className="">Username</span>
                    <br />
                    <label className="input validator mt-2 dark:bg-slate-950 dark:text-white bg-base-200 focus-within:outline-none focus-within:ring-0 focus-within:shadow-none">
                      <input
                        type="text"
                        required
                        placeholder="Enter your username"
                        pattern="[A-Za-z][A-Za-z0-9\-]*"
                        minLength="3"
                        maxLength="30"
                        title="Only letters, numbers or dash"
                        {...register("username", { required: true })}
                      />
                      <svg
                        className="h-[1em] opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <g
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeWidth="2.5"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </g>
                      </svg>
                    </label>
                    <p className="validator-hint hidden">
                      Must be 3 to 30 characters
                      <br />
                      containing only letters, numbers or dash
                    </p>
                  </div>
                )}
                {/* email section */}
                <div className=" mt-4 mb-4">
                  <span className="">Email</span>
                  <br />
                  <label className="input validator mt-2 dark:bg-slate-950 dark:text-white bg-base-200 focus-within:outline-none focus-within:ring-0 focus-within:shadow-none">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      {...register("email", { required: true })}
                    />
                    <svg
                      className="h-[1em] opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </g>
                    </svg>
                  </label>
                  <div className="validator-hint hidden">
                    Enter valid email address
                  </div>
                </div>

                {/* password section */}
                <div className=" mt-4">
                  <span>Password</span>
                  <br />
                  <label className="input validator mt-2 dark:bg-slate-950 dark:text-white bg-base-200 focus-within:outline-none focus-within:ring-0 focus-within:shadow-none relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="Password"
                      minLength="8"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                      className="pr-10"
                      {...register("password", { required: true })}
                    />
                    <svg
                      viewBox="0 0 576 512"
                      className="h-[1em] opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="currentColor"
                        stroke="currentColor"
                      >
                        <circle
                          cx="16.5"
                          cy="7.5"
                          r=".5"
                          fill="currentColor"
                        ></circle>
                      </g>
                      <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path>
                    </svg>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 focus:outline-none h-5 w-5 flex items-center justify-center"
                    >
                      {showPassword ? (
                        // Eye icon (from Heroicons)
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      ) : (
                        // Eye slash icon (from Heroicons)
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 002.458 12c1.274 4.057 5.065 7 9.542 7 1.548 0 3.014-.355 4.312-.985M6.394 6.394A9.956 9.956 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.45 10.45 0 01-4.105 5.147M6.394 6.394l11.213 11.213M6.394 6.394L3 9.788M17.607 17.607L21 14.213"
                          />
                        </svg>
                      )}
                    </button>
                  </label>
                  <p className="validator-hint hidden">
                    Must be more than 8 characters, including
                    <br />
                    At least one number <br />
                    At least one lowercase letter <br />
                    At least one uppercase letter
                  </p>
                </div>
              </div>

              <div className=" my-4 space-y-2 px-6">
                {/* Sumbit button */}
                <button className="bg-black dark:bg-slate-950 text-white px-4 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer transition-transform transform hover:scale-105">
                  {currState === "Sign Up" ? "Create account" : "Login"}
                </button>

                {/* Terms Checkbox */}
                <div className="flex items-start gap-2 text-sm mt-2">
                  <input className="mt-1" type="checkbox" required />
                  <p>
                    By continuing, I agree to the{" "}
                    <span className="font-medium text-blue-500 hover:text-blue-600 cursor-pointer underline">
                      terms of use
                    </span>{" "}
                    &{" "}
                    <span className="font-medium text-blue-500 hover:text-blue-600 cursor-pointer underline">
                      privacy policy
                    </span>
                    .
                  </p>
                </div>

                {/* Footer Links */}
                {currState === "Login" ? (
                  <p className="text-sm">
                    Create a new account?{" "}
                    <span
                      className="font-medium text-blue-500 hover:text-blue-600 cursor-pointer underline"
                      onClick={() => setCurrState("Sign Up")}
                    >
                      Click here
                    </span>
                  </p>
                ) : (
                  <p className="text-sm">
                    Already have an account?{" "}
                    <span
                      className="font-medium text-blue-500 hover:text-blue-600 cursor-pointer underline"
                      onClick={() => setCurrState("Login")}
                    >
                      Login here
                    </span>
                  </p>
                )}
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
