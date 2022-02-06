import React from "react";
import PropTypes from "prop-types";
import "./Roadmap.css";
import earth from "../images/earth-modified.png";
import Stars from "./Stars";
import { motion } from "framer-motion/dist/es/index";
const Roadmap = ({ id }) => {
  return (
    <motion.section
      className="section dark-section earth-section"
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      variants={{
        // visible: { opacity: 1 },
        // hidden: { opacity: 1 },
      }}
    >
      <div className="section-container">
        <div className="left-section">
          <div className="planet-image">
            <motion.img
              src={earth}
              alt="saturn_image"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                y: 20,
                backgroundColor: "#4158d0",
                backgroundImage:
                  "linear-gradient(43deg,#4158d0 0%,#4158d0 15%,#4158d0 100%)",
                borderRadius: "100%",
                boxShadow:
                  "#4158d0 10px -2px 110px, #4158d0 0 -10px 20px,5px 5px 15px 5px rgba(0, 0, 0, 0)",
              }}
              animate={{ y: 70, opacity: 1 }}
              transition={{
                duration: 2,
                ease: [0.75, 0.75, 0.75, 0.75],
                repeat: Infinity,
                repeatType: "reverse",
              }}
              initial={{ opacity: 1 }}
              variants={{
                visible: { y: 0 },
                hidden: { y: 4 },
              }}
              alt="cloud_image"
            />
          </div>
        </div>
        <div className="rigth-section">
          <Stars />
          <h3 className="section-title">SocialAnimal.Earth</h3>
          <p className="section-paragraph">
            Human life is a journey basic of searching, searching for truth love
            purpose and value etc.
          </p>
          <p className="section-paragraph">
            We as SocialAnimalEarth are planning to be part of your journey,
            joining you, encouraging you with the raw material that you need.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

Roadmap.propTypes = {};

export default Roadmap;
