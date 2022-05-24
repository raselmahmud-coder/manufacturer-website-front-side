import React from "react";
import { GiBlackFlag } from "react-icons/gi";
import { FaLaptopHouse } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { BsStars } from "react-icons/bs";
import Ticker from "./Ticker";
const BusinessSummary = () => {
  return (
    <section className="lg:my-40 my-24">
      <h1 className="text-5xl uppercase text-lime-300 text-center">
        Millions Business Trust Us
      </h1>
      <h3 className="text-2xl uppercase text-lime-100 text-center">
        Over the world Hundred of country Business with us
      </h3>
      <div className="grid lg:grid-cols-4 grid-cols-2 text-center py-12">
        <div className="flex flex-col">
          <i>
            <GiBlackFlag
              size={"40px"}
              title="Countries"
              className="inline-block text-lime-300 border-2 rounded-full"
            />
          </i>
          <span className="text-4xl font-bold text-green-300 my-2">
            <Ticker count={111} />
          </span>
          <p className="text-3xl font-bold">Countries</p>
        </div>
        <div className="flex flex-col">
          <i>
            <FaLaptopHouse
              size={"40px"}
              title="Countries"
              className="inline-block text-lime-300 border-2 rounded-full"
            />
          </i>
          <span className="text-4xl font-bold text-green-300 my-2">
            <Ticker count={211} />
          </span>
          <p className="text-3xl font-bold">Complete Projects</p>
        </div>
        <div className="flex flex-col">
          <i>
            <IoIosPeople
              size={"40px"}
              title="Countries"
              className="inline-block text-lime-300 border-2 rounded-full"
            />
          </i>
          <span className="text-4xl font-bold text-green-300 my-2">
            <Ticker count={511} />
          </span>
          <p className="text-3xl font-bold">Happy Clients</p>
        </div>
        <div className="flex flex-col">
          <i>
            <BsStars
              size={"40px"}
              title="Countries"
              className="inline-block text-lime-300 border-2 rounded-full"
            />
          </i>
          <span className="text-4xl font-bold text-green-300 my-2">
            <Ticker count={411} />
          </span>
          <p className="text-3xl font-bold">Feedbacks</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 bg:shadow mt-9">
        <div>
          <h1 className="lg:text-4xl text-2xl font-bold text-center p-4">
            Have any question or want to get free quotes?
          </h1>
        </div>
        <div>
          <div className="flex justify-center mt-5">
            <button className="btn btn-secondary">Request a Quote</button>
            <button className="btn btn-Primary ml-6">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSummary;
