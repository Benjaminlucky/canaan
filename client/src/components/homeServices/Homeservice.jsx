import React, { createElement } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { services } from "../../data";

function Homeservice() {
  // Define variants for animation with conditional properties for small devices
  const serviceVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    smallDevice: { opacity: 0.8, y: 30 }, // Slightly different animation for small screens
  };

  return (
    <div className="homeservice__section relative bg-cover bg-[url('./assets/homeServicebg.avif')]">
      {/** Transparent Background */}
      <div className="absolute inset-0 bg-customBrown-200 bg-opacity-95"></div>
      <div className="homeservice__content z-10 relative flex justify-center items-center py-20 md:py-32 ">
        <div className="services__wrapper flex flex-col justify-center w-4/5 mx-auto">
          <div className="service__title">
            <h3 className="text-4xl text-white text-center font-bold">
              Our Services
            </h3>
          </div>
          <motion.div
            className="service__wrapper grid grid-cols-1 xs:grid-cols-1 lg:grid-cols-2 gap-10 mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              staggerChildren: 0.3,
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service flex flex-col justify-center text-center"
                variants={serviceVariant} // Apply the variant for animation
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }} // Add hover effect animation
                whileTap={{ scale: 0.95 }} // Tap effect (optional)
                // Modify the animation for small devices
                initial={window.innerWidth < 768 ? "smallDevice" : "hidden"}
                animate="visible"
              >
                <motion.div className="service__content text-white flex flex-col justify-center h-full border-solid rounded-md p-5 md:py-10 md:px-10 !border-2 !border-white hover:!border-transparent transition-all hover:bg-white hover:!text-black">
                  <div className="service__icon flex justify-center text-7xl mb-5">
                    {createElement(service.icon)}
                  </div>
                  <div className="service__title text-xl md:text-2xl font-semibold mb-5">
                    {service.name}
                  </div>
                  <div className="service__text text-gray-900 text-center leading-relaxed">
                    {service.text}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Homeservice;
