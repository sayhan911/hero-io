import React, { useEffect, useState } from "react";
import { HiOutlineDownload } from "react-icons/hi";
import { FaStar } from "react-icons/fa";

const Installation = () => {
  const [install, setInstall] = useState([]);
  const [sort, setSort] = useState("None");
  useEffect(() => {
    const installedApp = JSON.parse(localStorage.getItem("install"));
    if (installedApp) setInstall(installedApp);
  }, []);
  const sortedApps = () => {
    if (sort === "sort-asc") {
      return [...install].sort((a, b) => a.size - b.size);
    } else if (sort === "sort-desc") {
      return [...install].sort((a, b) => b.size - a.size);
    } else {
      return install;
    }
  };
  return (
    <div className="bg-[#F5F5F5]">
      {/* Title section */}
      <div className="pb-7">
        <h1 className="text-center text-4xl font-semibold pt-12">
          Your Installed Apps
        </h1>
        <p className="text-center text-[#627382] text-md m-6 lg:mb-10">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center mx-7 md:mx-10 lg:mx-16 pb-3">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold">
          {install.length} Apps Found
        </h3>
        <label className="form-control">
          <select
            className="select select-bordered"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="none">Sort by Size</option>
            <option value="sort-asc">Low to High</option>
            <option value="sort-desc">High to Low</option>
          </select>
        </label>
      </div>
      {/* Cards section */}
      <div className="pb-16">
        {sortedApps().map((p) => (
          <div
            key={p.id}
            className="flex flex-col sm:flex-row items-center justify-between px-3 mb-5 mx-7 md:mx-10 lg:mx-16 bg-white shadow-md"
          >
            <div className="flex items-center w-full gap-5">
              <div className="flex items-center justify-center w-24 h-24 rounded-xl bg-gray-200 my-3">
                <img
                  className="w-full h-auto p-2"
                  src={p.image}
                  alt="Installed-App"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">{p.title}</h2>
                <div className="flex gap-5">
                  <span className="flex items-center gap-0.5 text-[#00d390] font-medium tracking-wide">
                    <HiOutlineDownload />
                    {p.downloads}M
                  </span>
                  <span className="flex items-center gap-0.5 text-[#ff8811] font-medium tracking-wide">
                    <FaStar />
                    {p.ratingAvg}
                  </span>
                  <span className="text-gray-500">{p.size} MB</span>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-end">
              <button className="btn bg-[#05D390] text-white p-3 mb-2.5 sm:mb-0 text-base font-medium tracking-wider transition-transform duration-300 ease-in-out hover:scale-95">
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
