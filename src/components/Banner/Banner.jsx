import React from "react";
import hero from "../../assets/hero.png";
import googlePlay from "../../assets/google-play.png";
import appStore from "../../assets/app-store.png";

const Banner = () => {
  return (
    <div className="w-4/5 lg:w-3/5 mx-auto pt-15">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold lg:leading-16 text-center mb-4">
        We Build <br />
        <span className="text-[#935EEE]">Productive</span> Apps
      </h1>
      <p className="text-[#627382] text-sm md:text-base text-center mb-8 md:mb-10">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="flex justify-center gap-4 mb-10">
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn py-5 transition-all duration-300 ease-in-out hover:scale-105">
            <img
              className="w-7 h-auto"
              src={googlePlay}
              alt="google-play-button"
            />{" "}
            Google Play
          </button>
        </a>

        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn py-5 transition-all duration-300 ease-in-out hover:scale-105">
            <img className="w-7 h-auto" src={appStore} alt="app-store-button" />{" "}
            App Store
          </button>
        </a>
      </div>
      <img src={hero} alt="hero-image" />
    </div>
  );
};

export default Banner;
