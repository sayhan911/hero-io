import React, { useEffect, useState } from "react";
import "./AppDetails.css";
import { useLoaderData, useParams } from "react-router";
import iconDownload from "../../assets/icon-downloads.png";
import iconRating from "../../assets/icon-ratings.png";
import iconReview from "../../assets/icon-review.png";
import AppNotFound from "../ErrorPage/AppNotFound";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Rectangle,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();
  const singleApp = data.find((app) => app.id === appId);

  const [isInstalled, setIsInstalled] = useState(false);
  useEffect(() => {
    const existingApp = JSON.parse(localStorage.getItem("install")) || [];
    setIsInstalled(existingApp.some((p) => p.id === appId));
  }, [appId]);

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
    ratings,
  } = singleApp;
  const sortedRatings = [...ratings].sort(
    (a, b) => parseInt(b.name) - parseInt(a.name)
  );
  // Handle install button
  const handleInstall = () => {
    const existingApp = JSON.parse(localStorage.getItem("install")) || [];
    const updatedList = [...existingApp, singleApp];
    localStorage.setItem("install", JSON.stringify(updatedList));
    setIsInstalled(true);
    MySwal.fire({
      title: "Installing...",
      html: "Setting up your app... Hang tight!",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      willClose: () => {},
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        return MySwal.fire({
          title: "Installation Complete!",
          text: "Your app has been successfully installed.",
          icon: "success",
        });
      }
    });
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
              disabled={isInstalled}
              className="btn bg-[#05D390] text-white py-6 px-0 text-lg font-medium tracking-wide transition-transform duration-300 ease-in-out hover:scale-95"
            >
              {isInstalled ? "Installed" : `Install Now (${size}MB)`}
            </button>
          </div>
          <div className="flex items-end">
            <button
              onClick={handleInstall}
              disabled={isInstalled}
              className="btn sm:hidden bg-[#05D390] text-white p-3 sm:p-4 text-base font-medium tracking-wide transition-transform duration-300 ease-in-out hover:scale-95"
            >
              {isInstalled ? (
                "Installed"
              ) : (
                <>
                  Install{" "}
                  <span className="text-xs tracking-normal">({size}MB)</span>
                </>
              )}
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
              <h5>{downloads}M</h5>
              <p>Downloads</p>
            </div>
            <div className="app-details">
              <img src={iconRating} alt="Average-rating" />
              <h5>{ratingAvg}</h5>
              <p>Average Ratings</p>
            </div>
            <div className="app-details">
              <img src={iconReview} alt="Total-reviews" />
              <h5>{(reviews / 1000).toFixed(reviews % 1000 === 0 ? 0 : 1)}K</h5>
              <p>Total Reviews</p>
            </div>
          </div>
          <div>
            <button
              onClick={handleInstall}
              disabled={isInstalled}
              className="btn hidden lg:flex bg-[#05D390] text-white p-6 mt-4 text-lg font-medium tracking-wide transition-transform duration-300 ease-in-out hover:scale-95"
            >
              {isInstalled ? "Installed" : `Install Now (${size}MB)`}
            </button>
          </div>
        </div>
      </div>
      <div className="divider mx-7 md:mx-10 lg:mx-16"></div>
      {/* Details Chart */}
      <div className="mx-7 md:mx-10 lg:mx-16">
        <h3 className="text-[#011931] text-xl font-semibold mb-4">Ratings</h3>
        <div className="h-80 -ml-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={sortedRatings}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="count"
                fill="#FF8813"
                barSize={30}
                activeBar={<Rectangle fill="#8E53EE" stroke="white" />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="divider mx-7 md:mx-10 lg:mx-16"></div>
      {/* Details Bottom */}
      <div className="mx-7 md:mx-10 lg:mx-16 pb-14">
        <h3 className="text-[#011931] text-xl font-semibold">Description</h3>
        <p className="text-[#627382] text-base text-justify md:text-lg mt-3 whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
