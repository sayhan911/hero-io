import React, { useState } from "react";
import AppsGrid from "../../components/AppsGrid/AppsGrid";
import { useLoaderData } from "react-router";
import { CiSearch } from "react-icons/ci";
import AppNotFound from "../ErrorPage/AppNotFound";
import PageLoader from "../../components/PageLoader/PageLoader";
import SearchLoader from "../../components/PageLoader/SearchLoader";

const Applications = () => {
  const data = useLoaderData();
  const totalApps = data.length;

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setLoading(true);
    setSearch(value);
    setTimeout(() => setLoading(false), 500);
  };

  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? data.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : data;

  return (
    <div>
      {/* title section */}
      <div>
        <h1 className="text-center text-4xl font-semibold pt-12">
          Our All Applications
        </h1>
        <p className="text-center text-[#627382] text-md m-6 lg:mb-10">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mx-12 sm:mx-7 lg:mx-20 mb-4">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 md:mb-0">
          ({term ? searchedApps.length : totalApps}) Apps Found
        </h3>
        <label className="input">
          <CiSearch />
          <input
            value={search}
            onChange={handleSearch}
            type="search"
            placeholder="Search Apps"
          />
        </label>
      </div>
      {/* App list */}
      <div className="pb-20 min-h-[400px] flex justify-center items-center">
        {loading ? (
          <div className="flex justify-center py-10">
            <SearchLoader></SearchLoader>
          </div>
        ) : searchedApps.length === 0 ? (
          <AppNotFound />
        ) : (
          <AppsGrid data={searchedApps} />
        )}
      </div>
    </div>
  );
};

export default Applications;
