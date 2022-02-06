import React from "react";
import { motion } from "framer-motion/dist/es/index";
import "./Timeline.css";

//Timeline step images
import astronout from "../images/astronout.png";
import planets from "../images/planets.png";
import robot from "../images/robot.png";
import rocket from "../images/astronout.png";
import shuttle from "../images/shuttle.png";

const timeLineVariants = {
  // hidden: { opacity: 0 },
  visible: (custom) => ({
    opacity: 1,

    transition: { delay: custom * 0.2 },
  }),
};

const timeline = [
  {
    image: astronout,
    year: "Q4 2021",
    list: ["Albert Einstein Serie#00", "Smart contract deploying", " Pre Sale"],
  },
  {
    image: planets,
    year: "Q1 2022",
    list: [
      "Albert Einstein Serie#01",
      "Smart contract rewards for holders for AES#00",
    ],
  },
  {
    image: robot,
    year: "Q2 2022",
    list: ["Pharos Serie Echanaton #02", "Pre Sale", " Rewards for holders"],
  },
  {
    image: rocket,
    year: "Q3 2022",
    list: [
      "Parallel universe metaverse games",
      "Metaverse games basis on Albert Einstein + Pharaohs",
    ],
  },
  {
    image: shuttle,
    year: "Q1 2023",
    list: ["Building on Educational on Metaverse", "VOOVLY [VOOV]"],
  },
];

const Timeline = (props) => {
  return (
    <>
      <div className="section-title road-map">Roadmap</div>
      <section className="timeline">
        <ul>
          {timeline.map((timeLine, index) => {
            return (
              <motion.li
                whileInView="visible"
                viewport={{ once: true }}
                custom={index + 1}
                variants={timeLineVariants}
                initial="hidden"
              >
                <div className="content">
                  <img src={timeLine.image} style={{ margin: "0 auto" }} />
                  <h3>{timeLine.year}</h3>
                  <div className="content-list">
                    {timeLine.list.map((item) => {
                      return <div> {item}</div>;
                    })}
                  </div>
                </div>
              </motion.li>
            );
          })}

          <div style={{ clear: "both" }}></div>
        </ul>
      </section>
    </>
  );
};

export default Timeline;
