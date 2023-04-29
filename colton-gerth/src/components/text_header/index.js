import { motion } from "framer-motion";
// import {useState, useEffect } from "react";

export default function TextHeader(item) {
    return (
        <motion.h1
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
        // whileHover={{
        //   scale: 1.05
        // }}
        >
        {item.text}
        </motion.h1>
    );
  }