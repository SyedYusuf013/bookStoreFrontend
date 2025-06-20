import React from "react";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 200, // Offset (distance from top to trigger animation)
    });
  }, []);

  return (
    <>
      <div>
        {visible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 md:bottom-10 md:right-16 z-50 border border-white bg-base-200 dark:bg-slate-950 hover:bg-base-100 dark:hover:bg-slate-800 text-white p-3 rounded-full shadow-lg duration-300 transition-transform transform hover:scale-105 aos-box"
            data-aos="fade-down"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </>
  );
}

export default ScrollTop;
