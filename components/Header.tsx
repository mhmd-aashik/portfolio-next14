"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="sticky top-0 flex items-start xl:items-center justify-between p-5 z-20 max-w-7xl mx-auto">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* SOCIAL ICONS */}
        <SocialIcon
          url="www.youtube.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="www.youtube.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="www.youtube.com"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon url="www.email.com" fgColor="gray" bgColor="transparent" />
        <p className="uppercase hidden md:inline text-sm text-gray-400">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
