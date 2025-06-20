import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo1.jpg";
import Login from "./../Login/Login";
import Logout from "../Logout/Logout";
import { useAuth } from "../../context/authProvider";
import toast from "react-hot-toast";
import { AlignJustify, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const shouldAuth = params.get("authRequired") === "true";
    const redirectPath = params.get("redirect");

    if (shouldAuth) {
      const modal = document.getElementById("my_modal_3");
      if (modal) {
        modal.showModal(); // Show the login/signup modal
      }

      toast.error("You must be logged in or signup.");

      if (redirectPath) {
        localStorage.setItem("redirectAfterLogin", redirectPath);
      }

      // Clean URL
      params.delete("authRequired");
      params.delete("redirect");

      navigate(
        {
          pathname: location.pathname,
          search: params.toString(),
        },
        { replace: true }
      );
    }
  }, [location, navigate]);

  // localStorage.clear()
  const { authUser, setAuthUser } = useAuth();

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <Link
          to={"/"}
          className="transition-transform duration-300 transform hover:scale-105"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to={"/aboutus"}
          className="transition-transform duration-300 transform hover:scale-105"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to={"/courses"}
          className="transition-transform duration-300 transform hover:scale-105"
        >
          Course
        </Link>
      </li>
      <li>
        <Link
          to={"/contactus"}
          className="transition-transform duration-300 transform hover:scale-105"
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <>
      <div
        className={`max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white fixed top-0 left-0 right-0 z-50 ${
          sticky
            ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-950 duration-300 transition-all ease-in-out"
            : ""
        }`}
      >
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown relative">
              <button
                type="button"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className={`btn btn-ghost lg:hidden  ${
                  sticky
                    ? "bg-base-100 dark:bg-slate-900"
                    : "bg-base-200 dark:bg-slate-950"
                }`}
              >
                <AlignJustify />
              </button>
              <ul
                className={`absolute top-full left-0 mt-2 w-52 rounded-box z-50 p-2 shadow menu menu-sm transition-all duration-300 ${
                  sticky
                    ? "bg-base-200 dark:bg-slate-950"
                    : "bg-base-100 dark:bg-slate-900 dark:text-white"
                } ${isMenuOpen ? "block" : "hidden"}`}
              >
                {React.Children.map(navItems.props.children, (item) =>
                  React.cloneElement(item, {
                    onClick: () => setIsMenuOpen(false),
                  })
                )}
              </ul>
            </div>
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className={`btn btn-ghost text-xl transition-transform duration-300 transform hover:scale-105  ${
                  sticky
                    ? "hover:bg-base-100 dark:hover:bg-slate-900"
                    : "dark:hover:bg-slate-950"
                }`}
              />
            </Link>
          </div>
          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 ">{navItems}</ul>
            </div>
            <div className="hidden md:block">
              <label className="flex items-center gap-2 px-3 py-2 border rounded-md">
                <input
                  type="search"
                  className="grow outline-none"
                  placeholder="Search"
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
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
              </label>
            </div>
            <div className="transition-transform duration-300 transform hover:scale-105">
              <label className="cursor-pointer">
                <svg
                  className="h-7 w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  {theme === "light" ? <Sun /> : <Moon />}
                </svg>
              </label>
            </div>
            {authUser ? (
              <Logout />
            ) : (
              <div className="">
                <button
                  className={`bg-black dark:bg-slate-900 text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer transition-transform  transform hover:scale-105  ${
                    sticky ? "" : "dark:bg-slate-950"
                  }`}
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
                <Login />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
