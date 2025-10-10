import React from "react";
import { MagnifyingGlass } from "react-loader-spinner";

const SearchLoader = () => {
  return (
    <div>
      <MagnifyingGlass
        visible={true}
        height="200"
        width="200"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="#A061F2"
      />
    </div>
  );
};

export default SearchLoader;
