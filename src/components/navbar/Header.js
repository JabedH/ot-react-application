import React from "react";
import logo from "../../asset/img/logo.png";
import mail from "../../asset/img/mail.png";
import shuffle from "../../asset/img/shuffle.png";
import Union from "../../asset/img/Union.png";
import button from "../../asset/img/button.png";

const header = () => {
  return (
    <div className="navbar bg-base-100 shadow-md h-[100px] lg:px-[160px]">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-[18px] flex gap-[20px]">
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Product</a>
          </li>
          <li>
            <a>Technology</a>
          </li>
          <li tabIndex={0}>
            <a>
              About
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-gray-100 rounded-none">
              <li>
                <a>About 1</a>
              </li>
              <li>
                <a>About2</a>
              </li>
            </ul>
          </li>
          <li tabIndex={0}>
            <a>
              Client
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-gray-100">
              <li>
                <a>Client 1</a>
              </li>
              <li>
                <a>Client 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Partner</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="grid grid-cols-3 gap-5 items-end lg:visible invisible">
          <img src={Union} alt="" />
          <img src={mail} alt="" />
          <img src={shuffle} alt="" />
        </div>
        <div class="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <img src={button} alt="" />
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default header;

// <div className="dropdown">
//           <label tabIndex={0} className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </label>
//           <ul
//             tabindex="0"
//             class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
//           >
//             <li>
//               <a class="justify-between">
//                 Profile
//                 <span class="badge">New</span>
//               </a>
//             </li>
//             <li>
//               <a>Settings</a>
//             </li>
//             <li>
//               <a>Logout</a>
//             </li>
//           </ul>
//         </div>
