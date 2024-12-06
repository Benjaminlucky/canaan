import React from "react";
import { motion } from "framer-motion";

function InstituteHome() {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  return (
    <motion.div
      className="institute__section w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="institute__wrapper w-4/5 mx-auto">
        <div className="institute__content py-20 md:py-32">
          <motion.div
            className="institute__title flex justify-center"
            variants={fadeIn}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-3xl md:text-4xl text-center xs:text-2xl  font-bold mb-10 lg:mb-20">
              Our Construction Institute
            </h3>
          </motion.div>
          <div className="institute__grid grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10">
            <motion.div
              className="institute__left flex  flex-col justify-center"
              variants={fadeIn}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-lg xs:text-sm md:text-2xl text-center lg:text-justify mb-10">
                Our institute is dedicated to nurturing and developing the next
                generation of building services professionals. Our rigorous
                curriculum ensures that our graduates are not only skilled
                craftsmen but also uphold the values that define Canaan
                Dwellings.
              </p>
              <a
                href="#"
                className="bg-customBrown-200 py-4 px-8 md:py-5 text-center md:px-10 text-customBrown-900 font-bold text-lg md:text-xl rounded-md hover:bg-customBrown-900 hover:text-customBrown-100 transition-all shadow-md"
              >
                Enroll Today
              </a>
            </motion.div>
            <motion.div
              className="institute__right"
              variants={fadeIn}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src="./assets/homeInstitute.avif"
                alt="Canaan Dwellings Institute Student"
                className="rounded-md"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default InstituteHome;
