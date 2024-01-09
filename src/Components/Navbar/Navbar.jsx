/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo2.png";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

import Button from "../../Components/Button/Button";
const Navbar = () => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${+97455118686}`, "_blank");
  };

  const isNotActiveStyle =
    "flex items-center px-5 gap-3 text-black py-4 border-b-2 hover:text-blue border  transition-all duration-200 ease-in-out capitalize";
  const isActiveStyle =
    "flex items-center py-4 px-5 gap-3 font-bold border-r-2 border-black upppercase transition-all duration-200 ease-in-out ";
  const isLargeNotActiveStyle =
    "flex items-center px-4 gap-3 hover:border-b-[1px] text-gray-100 py-3 hover:text-gray-300 transition-all upppercase";
  const isLargeActiveStyle =
    "flex items-center py-3 px-4 gap-3 font-semibold border-b-[1px] border-white text-white transition-all  upppercase";

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const navLinks = [
    { to: "/about", text: "About Us" },
    { to: "/sustainability", text: "sustainability" },
    { to: "/communities", text: "communities" },
    { to: "/property", text: "OFFERS" },
  ];
  return (
    <div className="navbar  shadow-lg top-0 z-10 absolute  bg-black bg-opacity-50 h-20 ">
      <div className="navbar-start max-w-7xl mx-auto">
        <div>
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={toggleDrawer}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="left"
            className="z-10"
          >
            <div>
              <div className="flex justify-center items-center mt-5">
                <img src={logo} alt="logo of figTree" className="w-16" />
              </div>
              <div className="list-none ">
                <ul>
                  {navLinks.map((link) => (
                    <li className="uppercase" key={link.to}>
                      <NavLink
                        to={link.to}
                        exact
                        className={({ isActive }) =>
                          isActive ? isActiveStyle : isNotActiveStyle
                        }
                      >
                        {link.text}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Drawer>
        </div>
        <div className="navbar">
          <a href="/" className="flex items-center ">
            <img
              src={logo}
              alt="logo of figTree"
              className="w-20 hidden md:flex items-center"
            />

          </a>
        </div>
      </div>
      <div className=" hidden lg:flex">
        <ul className="menu menu-horizontal  px-1">
          {/* navitems */}
          <div className="list-none flex  ">
            {navLinks.map((link, index) => (
              <li className="uppercase" key={index}>
                <NavLink
                  to={link.to}
                  exact
                  className={({ isActive }) =>
                    isActive ? isLargeActiveStyle : isLargeNotActiveStyle
                  }
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </div>
        </ul>
      </div>
      <div className="w-[75%] md:justify-end">
        <div className="flex gap-2 justify-center items-center">
          <div className="flex gap-2">
            <button
              onClick={handleWhatsApp}
              className="flex btn-sm text-sm md:btn-md justify-center btn btn-success border-none text-white items-center"
            >
              <FaWhatsapp className="text-xl  text-white" />
              <span className="hidden md:flex"> Whatsapp</span>
            </button>

            <div className="mr-5">
             <Button></Button>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
