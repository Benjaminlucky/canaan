import React from "react";
import { BiMailSend } from "react-icons/bi";
import { MdLocalPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { SiYoutube } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

function Topheader() {
  return (
    <div className="bg-customBrown-900 w-full overflow-hidden hidden md:block">
      <div className="thContent w-11/12 md:w-4/5 flex flex-wrap mx-auto justify-between gap-y-4">
        {/* Left Section */}
        <div className="thleft flex flex-wrap items-center text-gray-300 gap-6 py-3">
          {/* Mail Support */}
          <div className="flex items-center gap-2">
            <BiMailSend className="text-xl text-customBrown-100" />
            <a href="mailto:sales@canaandwellings.com" className="text-sm">
              sales@canaandwellings.com
            </a>
          </div>
          {/* Hotline */}
          <div className="flex items-center gap-2">
            <MdLocalPhone className="text-xl text-customBrown-100" />
            <a href="tel:+2348053642425" className="text-sm">
              Call Us: +234805 364 2425
            </a>
          </div>
          {/* Location */}
          <div className="flex items-center gap-2">
            <FaLocationDot className="text-xl text-customBrown-100" />
            <a
              href="https://maps.app.goo.gl/Mo7QoNLnD7WJCVK87"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm"
            >
              Locate us with Google Maps
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="thright">
          <div className="thrcontent flex gap-3 items-center justify-center text-customBrown-200 p-3">
            {/* Social Links */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              <SiYoutube />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topheader;
