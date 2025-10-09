import React, { useState } from "react";
import AppsGrid from "../../components/AppsGrid/AppsGrid";
import { useLoaderData } from "react-router";
import { CiSearch } from "react-icons/ci";
import NothingFound from "../../components/NothingFound/NothingFound";

const Applications = () => {
  const data = useLoaderData();
  const totalApps = data.length;

  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? data.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : data;

  return (
    <div>
      <h1 className="text-center text-4xl font-semibold pt-12">
        Our All Applications
      </h1>
      <p className="text-center text-[#627382] text-md m-6 lg:mb-10">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex flex-col sm:flex-row justify-between items-center mx-12 sm:mx-7 lg:mx-20 mb-4">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 md:mb-0">
          ({totalApps}) Apps Found
        </h3>
        <label className="input w-full sm:w-1/3 lg:w-1/4">
          <CiSearch />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
          />
        </label>
      </div>
      <div className="pb-20">
        {searchedApps.length === 0 ? (
          <NothingFound></NothingFound>
        ) : (
          <AppsGrid data={searchedApps}></AppsGrid>
        )}
      </div>
    </div>
  );
};

export default Applications;
