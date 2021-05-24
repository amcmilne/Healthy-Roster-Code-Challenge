import React from "react";
import logo from "../assets/HealthyRoster_horizontal.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';



function Header() {
  return (
    <>
      <div className={`container max-w-full min-w-0 bg bg-yellow-700 py-10 px-10`}>
      <LazyLoadImage
          src={logo}
          alt="Healthy Roster"
          effect="blur"
          className={`py-6 px-6 shadow-xl mx-auto my-auto mt-1 mb-1 rounded-full bg-white`}
        />
      </div>
    </>
  );
}

export default Header;
