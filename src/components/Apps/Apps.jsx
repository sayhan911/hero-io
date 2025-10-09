import React, { Suspense } from "react";
import App from "../App/SingleApp";
import { Link } from "react-router";
import AppsGrid from "../AppsGrid/AppsGrid";

const Apps = ({ data }) => {
  return (
    <div>
      <h1 className="text-center text-4xl font-semibold pt-12">
        Trending Apps
      </h1>
      <p className="text-center text-[#627382] text-md m-6 lg:mb-10">
        Explore All Trending Apps on the Market developed by us
      </p>
      <AppsGrid data={data} limit={8}></AppsGrid>
      <div className="flex justify-center pt-10 pb-20">
        <Link to="/apps">
          <button className="btn btn-show-all px-9 py-6">Show All</button>
        </Link>
      </div>
    </div>
  );
};

export default Apps;
