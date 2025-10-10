import React, { Suspense } from "react";
import App from "../App/SingleApp";

const AppsGrid = ({ data, limit }) => {
  const displayedApps = limit ? data.slice(0, limit) : data;

  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center py-10">
            <span className="loading loading-infinity loading-xl"></span>
          </div>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-12 sm:mx-7 lg:mx-20">
          {displayedApps.map((apps) => (
            <App key={apps.id} apps={apps}></App>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default AppsGrid;
