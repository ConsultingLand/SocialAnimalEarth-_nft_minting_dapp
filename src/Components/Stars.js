import React from "react";
import star from "../images/star.png";
import { motion } from "framer-motion/dist/es/index";

const Stars = () => {
  return (
    <>
      <motion.img
        src={star}
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1, rotate: 360 }}
        transition={{
          duration: 3,
          delay: 1,
          ease: [3, 2, 2, 1],
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          width: "20px",
          height: "20px",
          right: "150px",
          position: "absolute",
        }}
      />
      <motion.img
        src={star}
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1, rotate: 360 }}
        transition={{
          duration: 3,
          ease: [3, 2, 2, 1],
          repeat: Infinity,

          repeatType: "reverse",
        }}
        style={{
          width: "50px",
          height: "50px",
          bottom: "220px",
          position: "absolute",
        }}
      />
      <motion.img
        src={star}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, rotate: 710 }}
        transition={{
          duration: 3,
          ease: [3, 2, 2, 1],
          repeat: Infinity,

          repeatType: "reverse",
        }}
        style={{
          width: "20px",
          height: "20px",
          right: "150px",
          bottom: "0",
          position: "absolute",
        }}
      />
      <motion.img
        src={star}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, rotate: 360 }}
        transition={{
          duration: 3,
          ease: [3, 2, 2, 1],
          repeat: Infinity,

          repeatType: "reverse",
        }}
        style={{
          width: "20px",
          height: "20px",
          right: "150px",
          bottom: "0",
          position: "absolute",
        }}
      />
      <motion.img
        src={star}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, rotate: 360 }}
        transition={{
          duration: 3,
          ease: [3, 2, 2, 1],
          repeat: Infinity,
          delay: 2,
          repeatType: "reverse",
        }}
        style={{
          width: "30px",
          height: "30px",
          right: "0",
          bottom: "220px",
          position: "absolute",
        }}
      />
      <motion.img
        src={star}
        style={{ width: "20px", height: "20px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, rotate: 360 }}
        transition={{
          duration: 3,
          delay: 1,
          ease: [3, 2, 2, 1],
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </>
  );
};

export default Stars;
