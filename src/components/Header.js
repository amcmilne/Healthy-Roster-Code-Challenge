import React from "react";
import logo from "../assets/HealthyRoster3.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';



function Header() {
  return (
    <>
      <div className={`container max-w-full min-w-0 max-h-auto min-h-0 bg bg-yellow-700 py-10 px-10`}>
      <LazyLoadImage
          src={logo}
          alt="Healthy Roster"
          effect="blur"
          className={`p-5 shadow-xl rounded-xl bg-white`}
        />
      </div>
    </>
  );
}

export default Header;
