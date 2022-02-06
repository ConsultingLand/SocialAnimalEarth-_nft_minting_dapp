import React from "react";
import "./Human.css";
import mars from "../images/mars.png";

import { motion } from "framer-motion/dist/es/index";

const HumanCardInformations = [
  {
    title: "Art Design Literature",
    list: [{ item: "Fine art & Edu Gaming" }],
  },

  {
    title: "Ethos Ethics",
    list: [
      { item: "Nature Physics " },
      { item: "Mental Balance " },
      { item: "Spiritual" },
    ],
  },

  {
    title: "Blockchain",
    list: [{ item: "Metaverse" }, { item: "Decentral" }, { item: "Fair" }],
  },

  {
    title: "AI",
    list: [
      { item: "Machine Learning" },
      { item: "Blockchain" },
      { item: "Web 3.0" },
    ],
  },
];

const Human = () => {
  const cardVariants = {
    // hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  return (
    <section className=" section-free  section dark-section section-column">
      <div className="section-container">
        <div className="top-section">
          <div
            className="planet-image"
            style={{ width: "300px", height: "300px", margin: "5rem  auto" }}
          >
            <motion.img
              src={mars}
              alt="mars_image"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                y: 20,
                backgroundColor: "#4158d0",
                backgroundImage:
                  "linear-gradient(43deg,#A50013 0%,#A50013 15%,#A50013 100%)",
                borderRadius: "100%",
                boxShadow:
                  "#A50013 10px -2px 110px, #A50013 0 -10px 20px,5px 5px 15px 5px rgba(0, 0, 0, 0)",
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
            />
          </div>
        </div>
        <div className="section-title" style={{ marginBottom: "5rem   " }}>
          Human
        </div>
        <div className="bottom-section">
          <div className="human-cards">
            {HumanCardInformations.map((humanCard, index) => {
              return (
                <motion.div
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index + 1}
                  variants={cardVariants}
                  alt="mars_image"
                  initial="hidden"
                  className="human-card"
                  key={index}
                >
                  <div className="human-card-icon">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <div className="human-card-title">{humanCard.title}</div>
                  <div className="human-card-list">
                    {humanCard.list.map((listItem, idx) => {
                      return (
                        <div className="human-card-list-item" key={idx}>
                          {listItem.item}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

//Human.propTypes = {};

export default Human;
