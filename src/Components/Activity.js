import React, { useState } from "react";
import "./Activity.css";
import "./OwlCarousel.css";

import { motion } from "framer-motion/dist/es/index";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

//Einstein NFT images
import pinkEinstein from "../images/pink-einstein.png";
import turqoiseEinstein from "../images/turqoise-einstein.png";
import blueEinstein from "../images/blue-einstein.png";
import yellowEinstein from "../images/yellow-einstein.png";
import purpleEinstein from "../images/purple-einstein.png";
import whiteEinstein from "../images/white-einstein.png";

// Carousel for NFT Images
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const NFTImages = [
  {
    title: "Future-Vision",
    description: `Educational Gaming Online / Offline a combination between Art 
      & Design & Ethos & Ethics and Artificial intelligence with Blockchain.`,
    image: pinkEinstein,
  },
  {
    title: "Innovation Ideas",
    description: `Insight and foresight sharing through digital discussion & NFTs
      We are building and investing in your Mind, Body, and emotions.
      Humans must be Physically Healthy, Mentally Strong, and emotionally peaceful
      `,
    image: turqoiseEinstein,
  },
  {
    title: "Summit Awarding",
    description: `Awarding and recognition of excellence in educational Dapp for Web.3`,
    image: blueEinstein,
  },
  {
    title: "SocialAnimal.Earth",
    description: `Imagination is more important than knowledge, because knowledge is limited} Albert Einstein.
      Phantasie ist wichtiger als Wissen, denn Wissen ist begrenzt -Albert Einstein
      `,
    image: yellowEinstein,
  },
  {
    title: "Future-Vision",
    description: `Trying to make the art and blockchain technology much more interesting and useful.
      From Artists to Artists
     Encourage creativity on web.3 mix of consistency and creative thinking
     `,
    image: purpleEinstein,
  },
  {
    title: "Future-Vision",
    description:
      "Educational Gaming Online / Offline a combination between Art & Design & Ethos & Ethics and Artificial intelligence with Blockchain.",
    image: whiteEinstein,
  },
];

const Activity = ({ id }) => {
  return (
    <section className="section activity-section " id={id}>
      <div className="section-title">Activity Lineup</div>

      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        nav
        style={{ margin: "3rem 0" }}
      >
        {NFTImages.map((nft, idx) => {
          return (
            <motion.div
              class="item"
              style={{ overflow: "hidden", position: "relative" }}
            >
              <div className="nft-title-number">0{idx + 1}</div>
              <img src={nft.image} />
              <div className="nft-content">
                <div className="title">{nft.title}</div>
                <div className="description">{nft.description}</div>
              </div>
            </motion.div>
          );
        })}
      </OwlCarousel>

      <Carousel className="responsiveCarousel">
        {NFTImages.map((nft, idx) => {
          return (
            <motion.div
              class="item"
              style={{ overflow: "hidden", position: "relative" }}
            >
              <div className="nft-title-number">0{idx + 1}</div>
              <img src={nft.image} />
              <div className="nft-content">
                <div className="title">{nft.title}</div>
                <div className="description">{nft.description}</div>
              </div>
            </motion.div>
          );
        })}
      </Carousel>
    </section>
  );
};

Activity.propTypes = {};

export default Activity;
