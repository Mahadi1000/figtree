/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useState } from "react";
const Navbar = () => {
  const isNotActiveStyle =
    "flex items-center px-5 gap-3 text-black py-4 border-b-2 hover:text-blue border  transition-all duration-200 ease-in-out capitalize";
  const isActiveStyle =
    "flex items-center text-red py-4 px-5 gap-3 font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize";
  
   const [isOpen, setIsOpen] = useState(false);
   const toggleDrawer = () => {
     setIsOpen((prevState) => !prevState);

   };
const navLinks = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About" },
  { to: "/property", text: "Properties" },
  { to: "/contact", text: "Contact" },
];

  return (
    <div className="navbar z-10 fixed top-0 bg-black bg-opacity-50 h-20 ">
      <div className="navbar-start max-w-7xl mx-auto">
        <div>
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
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
            className=""
          >
            <div>
              <div className="flex justify-center items-center mt-5">
                <img src={logo} alt="logo of figTree" className="w-16" />
              </div>
              <div className="list-none text-blue-400 ">
                <ul>
                  {navLinks.map((link) => (
                    <li key={link.to}>
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
          <a className="btn btn-ghost ">
            <img src={logo} alt="logo of figTree" className="w-16" />
            <span className="text-white hidden md:flex font-cinzel ">Figtree</span>
          </a>
        </div>
      </div>
      <div className=" hidden lg:flex">
        <ul className="menu menu-horizontal text-white px-1">
          {/* navitems */}
          <div className="list-none flex text-blue-400 ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.to}
                  exact
                  className="flex items-center justify-center px-5 gap-3 hover:border-b-2 text-white hover:text-gray-200 transition-all duration-200 ease-in-out capitalize"
                  isActiveStyle="flex items-center  px-5 gap-3 font-extrabold  border-white transition-all duration-200 ease-in-out capitalize"
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </div>
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
