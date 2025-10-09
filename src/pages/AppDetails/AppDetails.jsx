import React from "react";
import "./AppDetails.css";
import { useLoaderData, useParams } from "react-router";
import iconDownload from "../../assets/icon-downloads.png";
import iconRating from "../../assets/icon-ratings.png";
import iconReview from "../../assets/icon-review.png";
import AppNotFound from "../ErrorPage/AppNotFound";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();
  const singleApp = data.find((app) => app.id === appId);
  if (!singleApp) {
    return <AppNotFound></AppNotFound>;
  }
  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    description,
    size,
  } = singleApp;

  const handleInstall = () => {
    const existingApp = JSON.parse(localStorage.getItem("install"));
    let updatedList = [];
    if (existingApp) {
      const isDuplicate = existingApp.some((p) => p.id === singleApp.id);
      if (isDuplicate){
        return alert('Sorry vai')
      }
      updatedList = [...existingApp, singleApp];
    } else {
      updatedList.push(singleApp);
    }
    localStorage.setItem("install", JSON.stringify(updatedList));
  };
  return (
    <div className="bg-[#F5F5F5]">
      {/* Details Top */}
      <div className="flex flex-col lg:flex-row items-stretch mx-7 md:mx-10 lg:mx-16 gap-8 pt-20">
        <div className="flex justify-start gap-4">
          <div className="bg-white w-2/4 sm:w-1/3 lg:w-auto flex items-center justify-center rounded-sm shadow-lg">
            <img
              src={image}
              alt="App-icon"
              className="object-contain h-full w-auto max-h-[400px] p-4"
            />
          </div>
          <div className="hidden sm:flex flex-col justify-between lg:hidden">
            <div className="w-full">
              <h2 className="text-3xl font-semibold mb-1.5">{title}</h2>
              <p className="text-base text-gray-500">
                Developed by{" "}
                <span className="text-[#723BE8] font-semibold">
                  {companyName}
                </span>
              </p>
            </div>
            <button
              onClick={handleInstall}
              className="btn btn-primary p-6 text-base font-medium tracking-wide transition-transform duration-300 ease-in-out hover:scale-95"
            >
              Install Now ({size}MB)
            </button>
          </div>
          <div className="flex items-end">
            <button
              onClick={handleInstall}
              className="btn sm:hidden btn-primary p-3 sm:p-4 text-base font-medium tracking-wide transition-transform duration-300 ease-in-out hover:scale-95"
            >
              Install{" "}
              <span className="text-xs tracking-normal">({size}MB)</span>
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col justify-between">
          <div className="w-full sm:hidden flex flex-col lg:flex">
            <h2 className="text-3xl font-semibold mb-1.5">{title}</h2>
            <p className="text-base text-gray-500">
              Developed by{" "}
              <span className="text-[#723BE8] font-semibold">
                {companyName}
              </span>
            </p>
          </div>
          <div className="divider"></div>
          <div className="flex justify-between lg:justify-start gap-5 md:gap-10 lg:gap-24">
            <div className="app-details">
              <img src={iconDownload} alt="Total-download" />
              <p>Downloads</p>
              <h5>{downloads}M</h5>
            </div>
            <div className="app-details">
              <img src={iconRating} alt="Average-rating" />
              <p>Average Ratings</p>
              <h5>{ratingAvg}</h5>
            </div>
            <div className="app-details">
              <img src={iconReview} alt="Total-reviews" />
              <p>Total Reviews</p>
              <h5>{reviews}K</h5>
            </div>
          </div>
          <div>
            <button
              onClick={handleInstall}
              className="btn hidden lg:flex bg-[#05D390] text-white p-6 mt-4 text-lg font-medium tracking-wider transition-transform duration-300 ease-in-out hover:scale-95"
            >
              Install Now ({size}MB)
            </button>
          </div>
        </div>
      </div>
      <div className="divider mx-7 md:mx-10 lg:mx-16"></div>
      {/* Details Chart */}
      <div></div>
      {/* Details Bottom */}
      <div className="mx-7 md:mx-10 lg:mx-16 pt-5">
        <h3 className="text-[#011931] text-xl font-semibold">Description</h3>
        <p className="text-[#627382] text-base text-justify md:text-lg mt-3 whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
