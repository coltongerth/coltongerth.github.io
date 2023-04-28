import { motion } from "framer-motion";
// import {useState, useEffect } from "react";

export default function LogoLink(item) {
    return (
        <motion.div
            whileHover={{rotate: -3,
            scale: 1.05}}>
              <a href={item.link}>
                <img src={item.src} alt="logo"></img>
              </a>
        </motion.div>
    );
  }
  
//   export default LogoLink;