import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Payment = () => {
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment gateway" />
      <div className="pb-10">
        <p>Payment gateway only applicable for Production build.</p>
        <div className="flex flex-col gap-.5">
          <p className="font-titleFont text-base font-semibold text-gray-600">
            Name
          </p>
          <input
            // onChange={handleEmail}
            // value={email}
            className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
            type="email"
            placeholder="eg. john fernando"
          />
          {/* {errEmail && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errEmail}
                    </p>
                  )} */}
        </div>
        <div className="flex flex-col gap-.5">
          <p className="font-titleFont text-base font-semibold text-gray-600">
            Address
          </p>
          <input
            // onChange={handleEmail}
            // value={email}
            className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
            type="email"
            placeholder="eg. johnfernando@gmail.com"
          />
          {/* {errEmail && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errEmail}
                    </p>
                  )} */}
        </div>
        <div className="flex flex-col gap-.5">
          <p className="font-titleFont text-base font-semibold text-gray-600">
            Name
          </p>
          <input
            // onChange={handleEmail}
            // value={email}
            className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
            type="email"
            placeholder="eg. No.194/2 Rukkaththana gaha rd , colombo 03."
          />
          {/* {errEmail && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errEmail}
                    </p>
                  )} */}
        </div>
        <Link to="/">
          <button className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;
