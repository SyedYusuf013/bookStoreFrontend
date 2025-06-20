import React from "react";
import { Link } from "react-router-dom";
import { Workflow } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <hr />
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10 dark:bg-slate-950 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <Link
            to="/"
            className="link link-hover transition-transform duration-300 transform hover:scale-105"
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            className="link link-hover transition-transform duration-300 transform hover:scale-105"
          >
            About us
          </Link>
          <Link
            to="/courses"
            className="link link-hover transition-transform duration-300 transform hover:scale-105"
          >
            Course
          </Link>
          <Link
            to="/contactus"
            className="link link-hover transition-transform duration-300 transform hover:scale-105"
          >
            Contact
          </Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current cursor-pointer hover:scale-105 duration-300 transition-transform transform"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="fill-current cursor-pointer hover:scale-105 duration-300 transition-transform transform"
              >
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.3 9.42 7.9 10.96.6.11.82-.26.82-.58v-2.2c-3.22.7-3.9-1.56-3.9-1.56-.54-1.4-1.3-1.77-1.3-1.77-1.06-.73.1-.72.1-.72 1.17.1 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.26 3.38.96.1-.76.4-1.27.72-1.56-2.57-.3-5.28-1.28-5.28-5.7 0-1.26.46-2.28 1.2-3.08-.12-.3-.52-1.52.12-3.16 0 0 .98-.31 3.2 1.2a11.2 11.2 0 0 1 2.92-.4c.98 0 1.96.13 2.88.4 2.22-1.5 3.2-1.2 3.2-1.2.64 1.64.24 2.86.12 3.16.76.8 1.2 1.82 1.2 3.08 0 4.44-2.72 5.38-5.3 5.68.4.34.76 1.02.76 2.06v3.04c0 .32.2.7.82.58A10.96 10.96 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="fill-current duration-300 cursor-pointer transition-transform  transform hover:scale-105"
              >
                <path d="M7.75 2C4.68 2 2 4.68 2 7.75v8.5C2 19.32 4.68 22 7.75 22h8.5C19.32 22 22 19.32 22 16.25v-8.5C22 4.68 19.32 2 16.25 2h-8.5zm0 1.5h8.5c2.05 0 3.75 1.7 3.75 3.75v8.5c0 2.05-1.7 3.75-3.75 3.75h-8.5c-2.05 0-3.75-1.7-3.75-3.75v-8.5C4 5.2 5.7 3.5 7.75 3.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm5.25-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
              </svg>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current cursor-pointer hover:scale-105 duration-300 transition-transform transform"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a
              href="https://deepwiki.com/SyedYusuf013/bookStoreProject"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative group">
                <Workflow className="hover:scale-105 duration-300 transition-transform transform cursor-pointer fill-current" />
                <p className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 rounded text-xs text-white bg-base-100 dark:bg-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  Project Doc here
                </p>
              </span>
            </a>
          </div>
        </nav>
        <aside>
          <p className="text-[#777777]">
            Copyright © {new Date().getFullYear()} Syed F Yusuf - All rights
            reserved.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
