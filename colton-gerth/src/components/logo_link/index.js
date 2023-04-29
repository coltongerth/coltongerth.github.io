import { motion } from "framer-motion";
// import {useState, useEffect } from "react";

export default function LogoLink(item) {
    return (
        <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, x: 5},
          visible: { opacity: 1, x: 0, transition: { delay: 1.5, duration: 0.6 } }
        }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
            whileHover={{rotate: -3,
            scale: 1.05}}>
              <a href={item.link}>
                <img src={item.src} alt="logo"></img>
              </a>
        </motion.div>
    );
  }
  
//   export default LogoLink;