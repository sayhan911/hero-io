import React from "react";
import ErrorImage from "../../assets/error-404.png";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    window.history.length > 2 ? navigate(-1) : navigate("/");
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col justify-center items-center">
        <img className="w-xs md:w-md h-auto pt-20" src={ErrorImage} alt="Error-404" />
        <div className="flex flex-col justify-center items-center text-center pb-20">
          <h1 className="text-3xl md:text-4xl font-semibold pt-12">
            Oops, page not found!
          </h1>
          <p className="text-[#627382] text-md m-6 lg:mb-10">
            The page you are looking for is not available.
          </p>
          <button className="btn btn-primary px-9 py-6" onClick={handleGoBack}>
            Go Back!
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
