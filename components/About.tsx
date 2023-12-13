"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto justify-evenly items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl font-semibold">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
        alt="image"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        className="space-y-10 px-0 md:px-10"
      >
        <h4 className="text-4xl font-semibold ">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nemo
          commodi ducimus. Quod recusandae velit est ut pariatur aliquid iste
          incidunt suscipit? Magni iste cumque accusantium voluptates culpa
          incidunt blanditiis ducimus officia laborum eligendi quae alias rem
          dolore vero facilis dolor magnam consectetur fuga dignissimos esse,
          voluptate, ex dolorum. Vel eius labore maxime quam ex tenetur beatae,
          est neque et, nesciunt debitis sunt rerum nisi corporis quos quidem
          nobis natus ab similique non commodi voluptatem nam veritatis dolorem.
          Libero quisquam dicta est modi ratione sed voluptatem! Ab, commodi
          debitis veniam fugiat, iste modi magnam fuga distinctio corrupti vitae
          eius molestias.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
// sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
