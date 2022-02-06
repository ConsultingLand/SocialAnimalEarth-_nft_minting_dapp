import React from "react";
import "./Footer.css";

//Space Object Image
import jupiter from "../images/jupiter-modified.png";
import logo from "../images/logo2.png";
import medium from "../images/medium.png";

//React animation
import { motion } from "framer-motion/dist/es/index";
//Video
//import introVideo from "../images/SocialAnimalEarth intro.mp4";

import Stars from "./Stars";

const Footer = () => {
  return (
    <motion.section
      className="section dark-section section-footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      variants={{
        visible: { opacity: 1 },
        // hidden: { opacity: 0 },
      }}
    >
      <div
        className="section-container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="left-section">
          <div className="planet-image">
            <motion.img
              src={jupiter}
              alt="saturn_image"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                y: 20,
                backgroundColor: "#9A623B",
                backgroundImage:
                  "linear-gradient(43deg,#D6D1BA 0%,#D6D1BA 15%,#D6D1BA 100%)",
                borderRadius: "100%",
                boxShadow:
                  "#D6D1BA 10px -2px 110px, #D6D1BA 0 -10px 20px,5px 5px 15px 5px rgba(0, 0, 0, 0)",
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
        <div className="rigth-section" style={{ marginTop: "5rem" }}>
          <Stars />
          <h3 className="section-title footer-title">Let's Create Value!</h3>
          <video width="100%" height="100%" controls>
            <source src="https://gateway.pinata.cloud/ipfs/Qmf5qkMkEc7FEbcBti2M9QPaRtSqgRqNdCDbShphwfHb4Z?preview=1" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="bottom-section">
        <div className="footer-section-container">
          <div className="footer-blocks">
            <div className="footer-blocks-top">
              <div className="left-footer-block">
                <div className="footer-block-title">Carreers</div>
                <div className="footer-block-paragraph">
                  Are you ready for something fresh and exciting, a chance to
                  dive into some cool, new tech?
                </div>
                <div className="footer-block-paragraph">
                  SocialAnimal.Earth is the ultimate Web3 Educational gaming
                  platform.
                </div>
                <div className="footer-block-paragraph">
                  Our vision is to build educational gaming dApps for improving
                  the new generation and to contribute to the open,
                  decentralized economy.
                </div>
                <div className="footer-block-title play-title">
                  ❝ Play to Earn, Play to learn! ❞
                </div>
                {/* <div className="footer-block-paragraph">
                  High-level understanding of Blockchain development practices
                  (development languages used, ability to describe development
                  languages benefits, method, tools available for web3
                  developers.
                </div>
                <div className="footer-block-paragraph">
                  We truly appreciate the mindset of someone who always finds a
                  way of improving existing work and strives to reach higher
                  highs.
                </div>
                <div className="footer-block-list">
                  <div className="footer-block-list-title">
                    We are always searching for below
                  </div>
                  <li>Design of project architecture.</li>
                  <li>
                    Creation of graphic language, art concept, 2D/3D content.
                  </li>
                  <li>Script and plot development.</li>
                </div> */}
              </div>
              <div className="right-footer-block">
                <div className="top-section-footer-right">
                  <div className="website-logo">
                    <img src={logo} />
                  </div>
                  <div className="help-section">
                    <div className="title">Do you need help ? Let us know!</div>
                    <a href="mailto:hello@consulting.land.com">
                      hello@consulting.land
                    </a>
                  </div>
                </div>

                <div className="right-footer-blocks">
                  <div className="footer-block">
                    <div className="footer-link">
                      <a
                        href="https://socialanimalearth.medium.com/"
                        target={"_blank"}
                      >
                        Blog
                      </a>
                    </div>
                    <div className="footer-link">
                      <a
                        href="https://docs.socialanimal.earth/"
                        target={"_blank"}
                      >
                        Careers
                      </a>
                    </div>
                    <div className="footer-link">
                      <a
                        href="https://drive.google.com/file/d/1cmTv72gcwi9TAAcPtymDq-aUDgusFQDr/view?usp=sharing"
                        target={"_blank"}
                      >
                        Privacy
                      </a>
                    </div>
                  </div>
                  <div className="footer-block">
                    <div className="footer-link">
                      <a
                        href="https://drive.google.com/file/d/1XJ3sk1tS7MsXxfFQfgG2TQQdRS7Uysf8/view?usp=sharing"
                        target={"_blank"}
                      >
                        Terms of Use
                      </a>
                    </div>
                    <div className="footer-link">
                      <a
                       href="https://drive.google.com/file/d/1lsLBDUr7d2Kjz8yI2LZwWwJYYf6-ZB8r/view?usp=sharing"
                        target={"_blank"}
                      >
                        Imprint
                      </a>
                    </div>
                    <div className="footer-link">
                      <a
                        href="https://docs.socialanimal.earth/"
                        target={"_blank"}
                      >
                        Knowable
                      </a>
                    </div>
                  </div>
                </div>
                {/* <div className="footer-block-list">
                  <div className="footer-block-list-title">
                    It is mandatory you have these attributes to succeed in the
                    role:
                  </div>
                  <li>Passion for blockchain technologies. </li>
                  <li>
                    Always up to date with blockchain news and new technology.
                  </li>
                  <li>
                    Only send us your CV via email add the two emojis 🔨 💙 in
                    your application reference for it to be valid.
                  </li>
                </div> */}
              </div>
            </div>
            <div className="footer-blocks-bottom">
              <div className="social-links">
                <div className="social-link">
                  {" "}
                  <a
                    href="https://socialanimalearth.medium.com/"
                    target={"_blank"}
                  >
                    {" "}
                    <img src={medium} />
                  </a>
                </div>
                <div className="social-link">
                  {" "}
                  <a href="https://discord.gg/XbTbv6vcUU" target="_blank">
                    <i class="fab fa-discord"></i>{" "}
                  </a>
                </div>
                <div className="social-link">
                  {" "}
                  <a href="https://docs.socialanimal.earth/" target="_blank">
                    {" "}
                    <img src="https://avatars.githubusercontent.com/u/7111340?s=280&v=4" />
                  </a>
                </div>
                <div className="social-link">
                  {" "}
                  <a href="https://twitter.com/SocialAnimalEar" target="_blank">
                    <i class="fab fa-twitter"></i>
                  </a>
                </div>
                <div className="social-link">
                  {" "}
                  <a
                    href="https://opensea.io/collection/albert-einstein-serie-v3"
                    target="_blank"
                  >
                    <img src="https://opensea.io/static/images/logos/opensea.svg" />
                  </a>
                </div>
              </div>
              <div className="copyright">
                SocialAnimal.Earth. All right reserved made with ❤️ On Planet
                Earth
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Footer;
