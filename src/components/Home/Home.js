import React from "react";
import device from "../../asset/img/device.png";
import typing from "../../asset/img/typing.png";
import service1 from "../../asset/img/service-1.png";
import service2 from "../../asset/img/service-2.png";
import service3 from "../../asset/img/service-3.png";

const Home = () => {
  return (
    <div>
      {/* device section */}
      <section className="grid grid-cols-2 px-[157px] py-[125px] text-start gap-[50px]">
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
        <div className="px-[157px] py-[57px] grid grid-cols-2 gap-[50px] items-center">
          <img src={typing} alt="" />
          <div className="text-start">
            <h3 className="text-[32px] font-bold">
              Welcome to{" "}
              <span className="text-[#EE4248] ">
                Dwidasa Samsara <br /> Indonesia (DSI)
              </span>
            </h3>
            <p className="text-[18px] leading-[27px] w-[500px] text-justify">
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
      {/* Product and Service section */}
      <section className="my-[115px]">
        <h3 className="mb-[57px] font-medium text-[32px]">
          Product and Service
        </h3>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-[43px] px-[157px]">
            <div className="text-start">
              <img className="w-[87px]" src={service1} alt="" />
              <h3 className="my-[15px] text-[28px] font-bold text-[#EE4248]">
                Our Product
              </h3>
              <p className="text-[18px] w-[319px]">
                Our product is made on the base of our team’s careful research
                and analyses, ranging from internet based application.
              </p>
              <button className="bg-[#EE4248] btn text-white border-0 mt-[15px]">
                Read More
              </button>
            </div>
            <div className="text-start">
              <img className="w-[87px]" src={service2} alt="" />
              <h3 className="my-[15px] text-[28px] font-bold text-[#EE4248]">
                Our Service
              </h3>
              <p className="text-[18px] w-[319px]">
                DSI’s shared service solutions focus on the front-end based
                software development, designed specifically for the banking and
                financial sectors.
              </p>
              <button className="bg-[#EE4248] btn text-white border-0 mt-[15px]">
                Read More
              </button>
            </div>
            <div className="text-start">
              <img className="w-[87px]" src={service3} alt="" />
              <h3 className="my-[15px] text-[28px] font-bold text-[#EE4248]">
                Our Technology
              </h3>
              <p className="text-[18px] w-[319px]">
                First JAVA, runs on more than 850 million personal computers
                worldwide, and on billions of devices worldwide, including
                mobile and TV devices..
              </p>
              <button className="bg-[#EE4248] btn text-white border-0 mt-[15px]">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
