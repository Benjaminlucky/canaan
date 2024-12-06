import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { menuLinks } from "../../data";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/canaandwellingsLogo.svg";

function Topnav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="topnav">
      <div className="topnavWrapper w-4/5 mx-auto flex items-center justify-between py-2 bg-white">
        <div className="topnavContent">
          {/** Logo section */}
          <div className="brand">
            <a href="/">
              <img
                src={logo}
                alt="Canaan Dwellings Logo"
                className="w-[140px] h-30 md:w-40 lg:w-40 object-contain z-1000"
              />
            </a>
          </div>
        </div>

        {/** Toggle Menu Button for Small devices */}
        <button
          onClick={toggleMenu}
          className="absolute right-12 text-2xl md:hidden"
        >
          {isMenuOpen ? <FaTimes /> : <HiMenuAlt3 />}
        </button>

        {/** Navigation Links */}
        <div className=" ">
          <ul
            className={`bg-customBrown-500 flex flex-col absolute left-2 top-20 w-full md:relative md:top-0 md:bg-transparent lg:bg-transparent md:flex-row lg:flex-row justify-between items-center gap-2 transition duration-500 ease-in-out ${
              isMenuOpen
                ? "translate-x-0 text-center"
                : "-translate-x-full md:translate-x-0"
            }`}
          >
            {menuLinks.map((link, index) => (
              <li key={index} className="w-full flex text-center ">
                <NavLink
                  onClick={toggleMenu}
                  to={link.link}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-customBrown-100 w-full font-bold py-3 px-3 hover:text-customBrown-500 transition duration-500 ease-in-out"
                      : "w-full font-semibold py-3 px-3 hover:text-customBrown-200 transition duration-500 ease-in-out"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Topnav;
