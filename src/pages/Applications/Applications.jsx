import React from "react";
import AppsGrid from "../../components/AppsGrid/AppsGrid";
import { useLoaderData } from "react-router";

const Applications = () => {
  const data = useLoaderData();
  return (
    <div>
      <h1 className="text-center text-4xl font-semibold pt-12">
        Trending Apps
      </h1>
      <p className="text-center text-[#627382] text-md m-6 lg:mb-10">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="pb-20">
      <AppsGrid data={data}></AppsGrid>
      </div>
    </div>
  );
};

export default Applications;
