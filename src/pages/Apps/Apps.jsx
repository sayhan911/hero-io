import React, { Suspense } from "react";
import App from "../App/App";

const Apps = ({ data }) => {
  return (
    <div>
      <h1 className="text-center text-4xl font-semibold pt-12">
        Trending Apps
      </h1>
      <p className="text-center text-[#627382] text-md mt-5 mb-10">
        Explore All Trending Apps on the Market developed by us
      </p>
      <Suspense
        fallback={<span className="loading loading-infinity loading-xl"></span>}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-5 sm:mx-7 lg:mx-20">
          {data.map((apps) => (
            <App key={apps.id} apps={apps}></App>
          ))}
        </div>
      </Suspense>
      <div className="flex justify-center pt-10 pb-20">
        <button className="btn btn-show-all px-9 py-6">
          Show All
        </button>
      </div>
    </div>
  );
};

export default Apps;
