import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="grid pt-52 main-header rounded-bl-[100px] h-[600px] text-white relative z-40 overflow-hidden">
      <Navbar />
      <div className="flex items-center bg-pattern absolute h-full w-full content-center">
        <div className="max-w-7xl mx-auto px-10">
          <div className="font-overpass pt-20">
            <h1 className="text-[2rem] lg:text-6xl font-semibold pb-2">
              A modern publishing platform
            </h1>
            <p className="font-light text-lg ">
              Grow your audience and build your online brand{" "}
            </p>
          </div>
          <div className="font-ubuntu flex justify-center gap-4 font-bold pt-10 lg:pt-20">
            <button className="white-btn">Start for Free</button>
            <button className="outline-btn">Learn More</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
