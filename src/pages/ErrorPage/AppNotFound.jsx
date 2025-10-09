import React from "react";
import AppError from "../../assets/App-Error.png";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router";

const AppNotFound = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    window.history.length > 2 ? navigate(-1) : navigate("/");
  };
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
          <button className="btn btn-primary px-9 py-6" onClick={handleGoBack}>
            Go Back!
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppNotFound;
