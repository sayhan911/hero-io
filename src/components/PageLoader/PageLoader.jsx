import React from "react";
import { Triangle } from "react-loader-spinner";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-center items-center">
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
