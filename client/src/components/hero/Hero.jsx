import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      className="hero__section w-full"
      initial={{ opacity: 0, y: 50 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Final animation state
      transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
    >
      <div className="hero__wrapper w-full bg-[url('./assets/homeBG.jpg')] h-screen bg-cover bg-center">
        <div className="hero__content text-center md:text-center lg:text-left flex flex-col md:gap-2 w-4/5 mx-auto py-10 md:py-16 lg:py-28">
          <motion.h3
            className="text-lg md:text-2xl lg:text-5xl font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Welcome to Canaan Dwellings
          </motion.h3>
          <motion.h2
            className="text-xl md:text-2.5xl lg:text-5xl font-extrabold text-customBrown-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Your Partner in Construction Excellence
          </motion.h2>
          <motion.p
            className="text-sm w-full md:text-xl md:w-full lg:w-4/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            At Canaan Dwellings, we don't just build structures; we build
            dreams. With a legacy of excellence and a commitment to quality,
            we're here to turn your vision into reality.{" "}
          </motion.p>
          <motion.div
            className="button w-fit mx-auto  lg:mx-0 px-4 flex  py-4 mt-7 bg-customBrown-500 rounded-sm hover:bg-customBrown-200"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <a
              href="https://wa.me/+2348037745379"
              target="_blank"
              rel="noopener noreferrer"
              className="flex  items-center gap-2"
            >
              <p className="text-xl text-white">Leave a Message</p>
              <RiWhatsappFill className="text-white text-xl" />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
