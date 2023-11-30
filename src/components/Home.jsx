import React from "react";
import { Shoe, noise, savings } from "../assets";

const Home = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <img src={noise} alt="" className="w-full object-cover h-screen" />
      </div>
      <img src={Shoe} alt="" className="absolute rotate-45" />
      <div className="flex w-full items-center justify-center p-5 mt-10">
        <div className=" relative w-[1100px] h-[500px] glass">
          <img src={savings} alt="" className=" -right-[100px] -top-[60px] w-[350px] absolute rotate-45" />
        </div>
      </div>
    </div>
  );
};

export default Home;
