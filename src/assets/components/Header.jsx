import React from "react";

function Header() {
  return (
    <header className="grid pt-52 main-header rounded-bl-[100px] h-[600px] text-white relative">
      <div className="bg-pattern-desktop absolute h-full w-full grid content-center">
        <div className="font-overpass pt-20">
          <h1 className="text-6xl font-semibold">
            A modern publishing platform
          </h1>
          <p className="font-light text-lg ">
            Grow your audience and build your online brand{" "}
          </p>
        </div>
        <div className="font-ubuntu flex justify-center gap-4 font-bold pt-20">
          <button className="white-btn">Start for Free</button>
          <button className="outline-btn">Learn More</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
