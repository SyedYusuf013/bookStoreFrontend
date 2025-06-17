import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Cards({ item }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 200, // Offset (distance from top to trigger animation)
    });
  }, []);

  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 30;

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const shouldTruncate = item.title && item.title.length > maxLength;
  const displayedDescription =
    isExpanded || !shouldTruncate
      ? item.title
      : item.title.slice(0, maxLength) + "...";

  return (
    <>
      <div className=" my-8 px-4 sm:px-0  ">
        <div
          className="card bg-base-200 w-96 max-w-xs sm:max-w-md shadow-lg rounded-lg dark:bg-slate-950 dark:text-white transition-transform duration-300 transform hover:scale-105 aos-box"
          data-aos="fade-up"
        >
          <figure>
            <img
              src={item.image}
              alt="Books Image"
              className="w-[360px] h-[360px] mt-2 rounded-t-lg px-3  "
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">
              {item.name}
              <div className="badge text-white bg-green-500">
                {item.category}
              </div>
            </h2>
            {/* <p>{item.title}</p> */}
            <p className="">
              {displayedDescription}
              {shouldTruncate && (
                <span
                  onClick={toggleDescription}
                  className=" cursor-pointer ml-1 text-blue-500 hover:text-blue-600 underline"
                >
                  {isExpanded ? "See less" : "See more"}
                </span>
              )}
            </p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline hover:bg-black cursor-pointer hover:text-white duration-200 dark:hover:bg-slate-800">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
