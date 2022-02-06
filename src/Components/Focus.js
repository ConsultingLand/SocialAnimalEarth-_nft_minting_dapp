import React from "react";

//CSS Styling file
import "./Focus.css";

//Planet Images
import saturn from "../images/saturn.png";

//AnimatedStars images
import Stars from "./Stars";
//React animation library
import { motion } from "framer-motion/dist/es/index";

const Focus = () => {
  return (
    <motion.section
      className="focus section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      variants={{
        visible: { opacity: 1 },
        // hidden: { opacity: 0 },
      }}
    >
      {" "}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        variants={
          {
            // visible: { y: 0, opacity: 1 },
            // hidden: { y: 4, opacity: 0 },
          }
        }
        className="section-container"
      >
        <div className="left-section">
          <h3 className="section-title">Gearing up for the future</h3>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            variants={
              {
                // visible: { y: 0, opacity: 1 },
                // hidden: { y: 10, opacity: 0 },
              }
            }
            className="section-paragraph"
          >
            SocialAnimalEarth is working and focusing to develop and emproof
            human value via a combination of online/offline workshops and
            educational gaming of Artificial intelligence and blockchain
            technology with Ethos, Ethics, design, art, literature, nature and
            physics.
          </motion.p>
          <motion.a
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={
              {
                // visible: { x: 0, opacity: 1 },
                // hidden: { x: -10, opacity: 0 },
              }
            }
            href="#"
            className="section-button"
          >
            See more
          </motion.a>
          {/*We can make an animation here for change text with fade to ourselves to empowering human value*/}
        </div>
        <div
          className="right-section"
          // style={{ width: "300px", height: "300px" }}
        >
          <Stars />
          <motion.img
            src={saturn}
            className="saturn-image"
            alt="saturn_image"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              y: 20,
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
      </motion.div>
    </motion.section>
  );
};

Focus.propTypes = {};

export default Focus;
