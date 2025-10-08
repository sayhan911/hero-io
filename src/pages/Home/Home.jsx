import React from "react";
import Banner from "../../components/Banner/Banner";
import Community from "../../components/Community/Community";
import Apps from "../Apps/Apps";
import { useLoaderData } from "react-router";

const Home = () => {
    const data = useLoaderData();
  return (
    <div className="bg-[#F5F5F5]">
      <Banner></Banner>
      <Community></Community>
      <Apps data={data}></Apps>
    </div>
  );
};

export default Home;
