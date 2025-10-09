import React from "react";
import errorApp from "../../assets/App-Error.png";

const NothingFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center pt-10">
      <img className="w-72" src={errorApp} alt="" />
      <h1 className="text-4xl font-semibold pt-12">
        No Result Found!
      </h1>
      <p className="text-[#627382] text-md m-6 lg:mb-10">
        We apologize, but we couldn't find any apps matching your search.
      </p>
    </div>
  );
};

export default NothingFound;
