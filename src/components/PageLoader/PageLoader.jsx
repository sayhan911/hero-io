import React from "react";
import { Triangle } from "react-loader-spinner";

const PageLoader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <Triangle
        visible={true}
        height="100"
        width="100"
        color="#723BE7"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default PageLoader;
