import React from "react";
import "./Egypt.css";
import eknath from "../images/color-1.jpg";
import eknath2 from "../images/color-2.jpg";
import { motion } from "framer-motion/dist/es/index";

import Stars from "./Stars";
const Egypt = () => {
  return (
    <motion.div
      className=" section-column egypt-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      variants={{
        visible: { opacity: 1 },
        // hidden: { opacity: 0 },
      }}
    >
      <div className="section-title">Echnaton </div>
      <div className="egypt-concepts">
        <div className="egypt-concept">
          <div className="right-concept">
            <img src={eknath} />
          </div>
        </div>
        <div className="egypt-concept">
          <Stars />
          <div className="right-concept left">
            <img src={eknath2} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Egypt;
