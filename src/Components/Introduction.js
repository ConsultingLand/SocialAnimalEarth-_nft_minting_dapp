import React from "react";
import "./Introduction.css";
import { motion, useTransform, useViewportScroll } from "framer-motion/dist/es/index";

//Planet images
import rocket from "../images/rocket-red.png";
import venus from "../images/venus-modified.png";

const Introduction = ({ id }) => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 2000], [0, 800]);
  const y4 = useTransform(scrollY, [0, 7000], [700, -1200]);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      variants={{
        visible: { opacity: 1 },
        // hidden: { opacity: 0 },
      }}
      className="section introduction "
      id={id}
    >
      <div className="section-container">
        <motion.img
          src={rocket}
          className="rocket-image"
          style={{
            position: "absolute",
            right: "450px",
            top: "250px",
            y: y4,
            zIndex: "-1",
            height: "250px",
            width: "250px",
          }}
        />

        <motion.img
          src={venus}
          className="rocket-image"
          style={{
            position: "absolute",
            right: "0",
            top: "-800px",
            left: "0",
            y: y1,
            zIndex: "-1",
            height: "200px",
            width: "200px",
            backgroundColor: "#AA6919",
            backgroundImage:
              "linear-gradient(43deg,#AA6919 0%,#AA6919 15%,#AA6919 100%)",
            borderRadius: "100%",
            boxShadow:
              "#AA6919 10px -2px 110px, #AA6919 0 -10px 20px,5px 5px 15px 5px rgba(0, 0, 0, 0)",
          }}
        />
        <div className="left-section">
          <h3 className="section-title">Introduction</h3>
          <p className="section-paragraph">
            Workshops Online/Offline a combination between Art & Design & Ethos
            & Ethics and Artifical Intelligent.
          </p>
          <p className="section-paragraph">
            We are building and investing in your Mind, Body & Emotions. Humans
            must be physically, healthy, mentally strong and emotinonaily
            peaceful from Artists to Humans.
          </p>
          <button className="section-button">See more</button>
        </div>
      </div>
    </motion.section>
  );
};

export default Introduction;
