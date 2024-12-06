import React from "react";
import { BsChatLeftTextFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdPhone } from "react-icons/md";
import { motion } from "framer-motion";

function Footer() {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <>
      <motion.div
        className="footer__section relative bg-cover bg-[url('./assets/footerBg.jpg')]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {/** transparent background */}
        <div className="absolute inset-0 bg-black bg-opacity-90"></div>
        {/** content */}
        <motion.div
          className="footer__content relative z-10 w-4/5 mx-auto"
          variants={fadeIn}
        >
          <div className="mainfooter__wrapper grid grid-cols-1 md:grid-cols-2 gap-10 py-20 md:py-32">
            <motion.div
              className="footer__left"
              variants={fadeIn}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="footer__contact flex flex-col gap-2 mb-12">
                <div className="footer__title flex gap-2 items-center text-white text-3xl md:text-4xl font-semibold mb-2">
                  <BsChatLeftTextFill />
                  Contact us
                </div>
                <p className="text-gray-400 text-sm md:text-lg">
                  Ready to get started on your next project? Contact Canaan
                  Dwellings today to discuss your needs and how we can help you
                  achieve your construction goals.
                </p>
              </div>
              <div className="office__address">
                <div className="address__title flex gap-2 items-center text-white text-2xl md:text-4xl font-semibold">
                  <FaLocationDot />
                  Office Address
                </div>
                <p className="text-sm md:text-lg text-gray-300 ">
                  Canaan Dwellings Suite, 3 Achi Street, Independence Layout
                  Enugu
                </p>
                <p className="mt-3 text-gray-400 text-sm md:text-lg">
                  <span className="font-bold">Lagos Office: </span>14 Monsurat
                  Olayinka Way, Lekki Scheme 2, Lagos.
                </p>
              </div>
              <div className="phone mt-12 flex gap-2 text-white text-base md:text-2xl">
                <MdPhone />
                +234 (0)803 774 5379
              </div>
            </motion.div>
            <motion.div
              className="footer__right flex w-full"
              variants={fadeIn}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="footer__form w-full bg-customBrown-100 rounded-md shadow-md">
                <form action="" className="py-8 px-6 flex flex-col gap-5">
                  <motion.div
                    className="form__input flex w-full"
                    variants={fadeIn}
                  >
                    <input
                      type="text"
                      placeholder="Enter Full Name "
                      className="flex w-full py-3 px-3 rounded-sm outline-none"
                    />
                  </motion.div>
                  <motion.div
                    className="form__input flex w-full"
                    variants={fadeIn}
                  >
                    <input
                      type="email"
                      placeholder="Enter Email Address"
                      className="w-full py-3 px-3 rounded-sm outline-none"
                    />
                  </motion.div>
                  <motion.div
                    className="form__input flex w-full"
                    variants={fadeIn}
                  >
                    <input
                      type="text"
                      placeholder="Enter Phone number"
                      className="w-full py-3 px-3 rounded-sm outline-none"
                    />
                  </motion.div>
                  <motion.div className="form__input w-full" variants={fadeIn}>
                    <textarea
                      placeholder="Leave us a message"
                      className="w-full outline-none py-10 px-5"
                    ></textarea>
                  </motion.div>
                  <motion.a
                    href="#"
                    className="bg-customBrown-900 text-base md:text-xl px-8 md:px-10 py-3 flex justify-center text-white hover:text-customBrown-200"
                    variants={fadeIn}
                  >
                    Send Message
                  </motion.a>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      <div className="footer__bottom bg-black w-full flex">
        <div className="bottom__content mx-auto py-3 text-white text-center">
          <p>
            Canaan Dwellings | All Rights Reserved |{" "}
            <span className="text-gray-400">Developed by The Illuminators</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
