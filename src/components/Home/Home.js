import React from "react";
import device from "../../asset/img/device.png";

const Home = () => {
  return (
    // device section
    <section className="grid grid-cols-2 mx-[157px] my-[125px] text-start gap-[100px]">
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
  );
};

export default Home;
