import React from "react";
import device from "../../asset/img/device.png";
import typing from "../../asset/img/typing.png";

const Home = () => {
  return (
    <div>
      {/* device section */}
      <section className="grid grid-cols-2 px-[157px] my-[125px] text-start gap-[100px]">
        <div>
          <h1 className=" text-[48px]  font-bold mb-[12px]">
            Making the most of the ever-growing <br />{" "}
            <span className="text-[#EE4248]">Information Technology</span>
          </h1>
          <p className="text-[20px] ">
            Managed by a team of professional experts with extensive experience
            and impressive track records
          </p>
          <button className="bg-[#EE4248] btn text-white p-[12px] border-0 my-12 w-32 h-14">
            Read More
          </button>
        </div>
        <img src={device} alt="" />
      </section>
      {/* typing section */}
      <section className="bg-[#F6F6F6] ">
        <div className="px-[157px] py-[57px] grid grid-cols-2 items-center">
          <img src={typing} alt="" />
          <div className="text-start">
            <h3 className="text-[32px] font-bold">
              Welcome to{" "}
              <span className="text-[#EE4248] ">
                Dwidasa Samsara <br /> Indonesia (DSI)
              </span>
            </h3>
            <p className="text-[18px] leading-[27px] w-[500px]">
              Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by
              the founders, who each of them has a common end objective to
              innovate new creations by making the most of the ever-growing
              information technology through{" "}
              <span className="text-[#EE4248] font-bold">DSI’s</span> distinct
              front-end based application concept. <br /> <br /> Managed by a
              team of professional experts with extensive experience and
              impressive track records,{" "}
              <span className="text-[#EE4248] font-bold">DSI</span> believes
              that continuous improvements and innovations assure your business
              to run effectively and efficiently.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
