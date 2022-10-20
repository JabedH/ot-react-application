import React from "react";
import logo from "../../asset/img/logo.png";
import grouplogo from "../../asset/img/Group-logo.png";

const footer = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-3 gap-4 items-end lg:px-[157px] px-[19px] pt-[28px] pb-[24px] text-start">
        <div className="">
          <img src={logo} alt="" />
          <p className="text-[18px] font-bold">PT Dwidasa Samsara Indonesia</p>
          <p className="text-[#263238]">
            Ruko Jalur Sutera 29A No. 53 <br /> Alam Sutera Serpong, Tangerang
            15323
          </p>
        </div>
        <div className="lg:my-0 my-[32px]">
          <h3 className="text-[24px] font-bold">Contact</h3>
          <p className="text-[#263238] ">
            Phone : +62.21.5314.1135 <br /> Fax : +62.21.5314.1135 <br /> Email
            : community@dwidasa.com
          </p>
        </div>
        <div className="">
          <img src={grouplogo} alt="" />
        </div>
        <div></div>
      </div>
      <div className="text-center bg-[#EE4248] p-[22px] text-white">
        <p>Copyright © 2015 - Dwidasa Samsara Indonesia</p>
      </div>
    </div>
  );
};

export default footer;
