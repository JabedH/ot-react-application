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
      <section className="lg:grid grid-cols-2 flex flex-col-reverse lg:px-[157px] px-[19px] lg:pt-[150px] pt-[100px]  lg:text-start lg:gap-[50px] gap-[32px]">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          className="grid justify-items-center lg:justify-items-start "
        >
          <h1 className=" lg:text-[48px] text-[30px] font-bold mb-[12px]">
            Making the most of the ever-growing <br />{" "}
            <span className="text-[#EE4248]">Information Technology</span>
          </h1>
          <p className="text-[20px] ">
            Managed by a team of professional experts with extensive experience
            and impressive track records
          </p>
          <button className="bg-[#EE4248] btn text-white p-[12px] border-0 lg:my-12 my-5 w-32 h-14">
            Read More
          </button>
        </div>
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="300"
          className=""
          src={device}
          alt=""
        />
      </section>
      {/* typing section */}
      <section className="bg-[#F6F6F6] ">
        <div className="lg:px-[157px] px-[19px] py-[57px] lg:grid grid-cols-2 gap-[50px] items-center">
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="300"
            src={typing}
            alt=""
          />
          <div
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="lg:text-start"
          >
            <h3 className="text-[32px] font-bold lg:mt-0 mt-[40px]">
              Welcome to{" "}
              <span className="text-[#EE4248] ">
                Dwidasa Samsara <br /> Indonesia (DSI)
              </span>
            </h3>
            <p className="text-[18px] leading-[27px] lg:w-[500px] text-justify">
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
      <section className="lg:my-[115px] mt-[36px] ">
        <h3
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="300"
          className="lg:mb-[57px] mb-[32px] font-medium text-[32px]"
        >
          Product and Service
        </h3>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          className="flex justify-center "
        >
          <div className="lg:grid grid-cols-3  gap-[53px] lg:px-[157px] px-[19px] lg:text-start">
            <div className="grid justify-items-center lg:justify-items-start mb-[60px]">
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
            <div className="grid justify-items-center lg:justify-items-start mb-[60px]">
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
            <div className="grid justify-items-center lg:justify-items-start mb-[60px]">
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
