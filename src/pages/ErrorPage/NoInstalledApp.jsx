import React from "react";
import AppError from "../../assets/App-Error.png";

const NoInstalledApp = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center pt-10">
      <img className="w-72" src={AppError} alt="No-Installed-App" />
      <h1 className="text-4xl font-semibold pt-12">No App is installed!</h1>
      <p className="text-[#627382] text-md m-6 lg:mb-10">
        It seems you haven't installed any apps yet. Start exploring and add
        your favorites!
      </p>
    </div>
  );
};

export default NoInstalledApp;
