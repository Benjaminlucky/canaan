import React, { useEffect, useState, createElement } from "react";
import { motion } from "framer-motion";
import { FaRegEye } from "react-icons/fa";
import { MdDiamond } from "react-icons/md";
import { values } from "../../data";

function Abouthome() {
  const [screenVariant, setScreenVariant] = useState("large");

  // Determine screen size on mount
  useEffect(() => {
    const updateVariant = () => {
      setScreenVariant(window.innerWidth <= 768 ? "small" : "large");
    };
    updateVariant(); // Set on initial render
    window.addEventListener("resize", updateVariant); // Update on resize
    return () => window.removeEventListener("resize", updateVariant);
  }, []);

  const variants = {
    small: { opacity: 0, x: -50 },
    large: { opacity: 0, x: 0 },
  };

  // Animation Variants
  const slideIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const gridItem = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="homeAbout__section w-full bg-customBrown-100"
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.3, duration: 0.8, ease: "easeOut" }}
      variants={variants}
      custom={screenVariant}
    >
      <div className="homeAbout__wrapper w-4/5 mx-auto">
        <div className="homeAbout__content text-center py-16 md:py-28">
          <motion.h3
            className="text-center text-3xl md:text-5xl pb-5"
            variants={slideIn}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About Canaan Dwellings
          </motion.h3>
          <motion.p
            className="text-center text-lg md:text-zxl w-full  lg:w-3/5 mx-auto"
            variants={slideIn}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Canaan Dwellings is a leading name in the construction and
            construction services sector, committed to providing unparalleled
            excellence and quality in every project we undertake. Our core
            values of integrity, competence, and empathy drive everything we do,
            ensuring that our clients receive the best possible service and
            support.
          </motion.p>
          <motion.div
            className="vision bg-white mt-16 w-fit flex mx-auto rounded-md"
            variants={slideIn}
          >
            <div className="vision__content p-5 md:py-10 md:px-10 flex flex-col justify-center rounded-sm shadow-sm">
              <div className="title__wrapper flex flex-row justify-center gap-2 items-center">
                <FaRegEye className="text-2xl xs:text-xl md:text-4xl flex items-start mb-4" />
                <h3 className="title text-2xl xs:text-xl  md:text-3xl flex items-center font-bold mb-5">
                  Our Vision
                </h3>
              </div>
              <p className="text-lg xs:text-lg md:text-2xl leading-relaxed rounded-sm w-full  md:w-4/5 mx-auto">
                Our vision is to set the benchmark for excellence and quality in
                construction services delivery, unrivaled by any other in the
                industry.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="core__values flex w-full mt-16"
            variants={slideIn}
          >
            <div className="core__content flex w-full">
              <div className="value__Wrapper">
                <motion.div
                  className="section__title flex gap-2 justify-center items-center mb-12"
                  variants={slideIn}
                >
                  <motion.div className="icon" variants={slideIn}>
                    <MdDiamond className="text-3xl" />
                  </motion.div>
                  <motion.h3
                    className="text-2xl xs:text-2xl md:text-3xl font-bold"
                    variants={slideIn}
                  >
                    Our Core-Values
                  </motion.h3>
                </motion.div>

                <div className="values__wrapper grid grid-cols-1 lg:grid-cols-3 gap-5">
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      className="value flex flex-col bg-white p-4 xs:px-6 xs:py-6 md:py-10 md:px-10 rounded-sm shadow-md"
                      variants={gridItem}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <div className="value__title flex flex-col">
                        <div className="value__icon flex justify-center items-center gap-1 text-2xl font-bold mb-4 md:mb-8 text-customBrown-500">
                          {createElement(value.icon)}
                          <div className="title">{value.name}</div>
                        </div>
                        <p className="text-lg leading-relaxed">{value.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Abouthome;
