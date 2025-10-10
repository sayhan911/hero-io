import React from "react";
import AppError from "../../assets/App-Error.png";

const AppNotFound = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <img
          className="w-xs md:w-md h-auto pt-20"
          src={AppError}
          alt="App-Not-Found"
        />
        <div className="flex flex-col justify-center items-center text-center pb-20">
          <h1 className="text-3xl md:text-4xl font-semibold pt-12">
            OOPS!! APP NOT FOUND
          </h1>
          <p className="text-[#627382] text-md m-6 lg:mb-10">
            The App you are requesting is not found on our system. please try
            another apps
          </p>
          <a className="btn btn-primary px-9 py-6" href="/apps">
            See All Apps
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppNotFound;
