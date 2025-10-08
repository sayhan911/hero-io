import React from "react";
import "./Community.css";
const Community = () => {
  return (
    <div className="community text-white py-12">
      <h2 className="text-center text-3xl lg:text-4xl font-bold mb-7 px-5">Trusted by Millions, Built for You</h2>
      <div className="grid grid-cols-1 sm:flex justify-center text-center sm:gap-7 md:gap-20 lg:gap-32 px-16">
        <div>
          <h6>Total Downloads</h6>
          <h4 className="text-4xl md:text-5xl lg:text-6xl my-2 font-bold">29.6M</h4>
          <p>21% more than last month</p>
        </div>
        <div className="my-12 sm:my-0">
          <h6>Total Reviews</h6>
          <h4 className="text-4xl md:text-5xl lg:text-6xl my-2 font-bold">906K</h4>
          <p>46% more than last month</p>
        </div>
        <div>
          <h6>Active Apps</h6>
          <h4 className="text-4xl md:text-5xl lg:text-6xl my-2 font-bold">132+</h4>
          <p>31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default Community;
