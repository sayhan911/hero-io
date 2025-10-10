import React, { useEffect, useState } from "react";
import { HiOutlineDownload } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import NoInstalledApp from "../ErrorPage/NoInstalledApp";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const Installation = () => {
  const [install, setInstall] = useState([]);
  const [sort, setSort] = useState("none");
  useEffect(() => {
    const installedApp = JSON.parse(localStorage.getItem("install"));
    if (installedApp) setInstall(installedApp);
  }, []);
  const sortedApps = () => {
    if (sort === "sort-asc") {
      return [...install].sort((a, b) => a.downloads - b.downloads);
    } else if (sort === "sort-desc") {
      return [...install].sort((a, b) => b.downloads - a.downloads);
    } else {
      return install;
    }
  };

  // Handle Install button
  const handleUninstall = (id) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      allowOutsideClick: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, uninstall!",
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          title: "Uninstalling...",
          html: "Removing your app... Hang tight!",
          timer: 2000, // Simulate 2 seconds of loading
          timerProgressBar: true,
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            const existingApp =
              JSON.parse(localStorage.getItem("install")) || [];
            let updatedList = existingApp.filter((p) => p.id !== id);
            setInstall(updatedList);
            localStorage.setItem("install", JSON.stringify(updatedList));
          },
        }).then(() => {
          Swal.fire({
            title: "Uninstalled!",
            text: "Your app has been uninstalled.",
            icon: "success",
            allowOutsideClick: false,
          });
        });
      }
    });
  };
  // End: Handle Install button

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
      {/* Sorting */}
      <div className="flex justify-between items-center mx-7 md:mx-10 lg:mx-16 pb-3">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold">
          {install.length} Apps Found
        </h3>
        <label className="form-control w-1/2 sm:w-1/3 md:w-1/5 xl:w-auto">
          <select
            className="select select-bordered"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="none">Sort by Downloads</option>
            <option value="sort-asc">Low to High</option>
            <option value="sort-desc">High to Low</option>
          </select>
        </label>
      </div>
      {/* Cards section */}
      <div className="pb-16">
        {install.length === 0 ? (
          <NoInstalledApp></NoInstalledApp>
        ) : (
          <div>
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
                  <button
                    onClick={() => handleUninstall(p.id)}
                    className="btn bg-[#05D390] text-white p-3 mb-2.5 sm:mb-0 text-base font-medium tracking-wider transition-transform duration-300 ease-in-out hover:scale-95"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Installation;
