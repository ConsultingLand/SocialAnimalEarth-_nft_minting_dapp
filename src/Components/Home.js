import React, { useEffect } from "react";
import styled from "styled-components";

//Css Style File
import "./Home.css";

//Planet Images
import earth from "../images/earth-modified.png";
import sun from "../images/sun-modified.png";
import surface from "../images/purp4.png";

//Particle JS Dependencies
import Particles from "react-tsparticles";
import ParticleConfig from "../config/particle-config";

//Stars Png (More than one)
import Stars from "./Stars";

//React animation library
import { useViewportScroll, motion, useTransform } from "framer-motion/dist/es/index";

const Home = ({ id }) => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [200, 900], [0, 200]);

  const y4 = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <>
      <motion.section className="home  section  " id={id} style={{ y: y1 }}>
        <Particles params={ParticleConfig}></Particles>
        <div className="section-container">
          <div className="left-section">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.8 }}
              animate={{ opacity: 1, y: 0 }}
              className="section-title"
            >
              SocialAnimal. Earth
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              style={{ opacity: 0 }}
              className="home-paragraph"
            >
              It's time to invest in ourselves, empowering human value.
            </motion.p>
            <motion.button className="home-button">
              Available Feb.22nd
            </motion.button>
            <button className="connect-mask">
              Connect to MetaMask <i class="fas fa-mask"></i>
            </button>

            <SocialMediaLinks>
              <SocialMediaLink
                target={"_blank"}
                href="https://www.instagram.com/socialanimalearth/"
              >
                <i class="fab fa-instagram"></i>
              </SocialMediaLink>
              <SocialMediaLink
                target={"_blank"}
                href="https://discord.gg/nqWBPgvh7s"
              >
                {" "}
                <i class="fab fa-discord"></i>{" "}
              </SocialMediaLink>
              <SocialMediaLink
                target={"_blank"}
                href="https://socialanimalearth.medium.com/"
              >
                {" "}
                <i class="fab fa-medium-m"></i>{" "}
              </SocialMediaLink>
              <SocialMediaLink
                target={"_blank"}
                href="https://twitter.com/SocialAnimalEar"
              >
                <i class="fab fa-twitter"></i>
              </SocialMediaLink>
              <SocialMediaLink
                target={"_blank"}
                href="https://www.linkedin.com/company/socialsnimalearth"
              >
                {" "}
                <i class="fab fa-linkedin-in"></i>{" "}
              </SocialMediaLink>
              <SocialMediaLink
                target={"_blank"}
                href="https://t.me/socialanimalearth"
              >
                {" "}
                <i class="fab fa-telegram-plane"></i>{" "}
              </SocialMediaLink>
            </SocialMediaLinks>
          </div>

          <div className="rigth-section">
            <Stars />
            <motion.img
              style={{
                y: 20,
              }}
              animate={{ y: 70 }}
              transition={{
                duration: 4,
                ease: [0.075, 0.075, 0.075, 0.075],
                repeat: Infinity,
                repeatType: "reverse",
              }}
              src={surface}
              className="surface"
              alt="cloud_image"
            />
          </div>

          <motion.img
            src={sun}
            style={{
              width: "170px",
              height: "170px",
              y: y1,
              backgroundColor: "#4158d0",
              backgroundImage:
                "linear-gradient(43deg,#FF5A00 0%,#FF5A00 15%,#FF5A00 100%)",
              borderRadius: "100%",
              boxShadow:
                "#FF5A00 10px -2px 110px, #FF5A00 0 -10px 20px,5px 5px 15px 5px rgba(0, 0, 0, 0)",
            }}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          />

          <motion.img
            src={earth}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 0.7 }}
            transition={{ duration: 3 }}
            style={{
              width: "120px",
              height: "120px",
              y: y4,
              objectFit: "cover",
              position: "absolute",
              right: "650px",
              top: "350px",
              backgroundColor: "#4158d0",
              backgroundImage:
                "linear-gradient(43deg,#4158d0 0%,#4158d0 15%,#4158d0 100%)",
              borderRadius: "100%",
              boxShadow:
                "#4158d0 10px -2px 110px, #4158d0 0 -10px 20px,5px 5px 15px 5px rgba(0, 0, 0, 0)",
            }}
          />
        </div>
      </motion.section>
    </>
  );
};

const SocialMediaLinks = styled(motion.ul)`
  display: flex;
  width: 210px;
  margin: 2rem 0;
  justify-content: space-between;
  align-self: center;
  a: {
    color: #635c75;
  }
`;

const SocialMediaLink = styled.a`
  color: #ffff;
  font-size: 1.2rem;
`;

export default Home;
