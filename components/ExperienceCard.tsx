"use client";
import React from "react";
import { motion } from "framer-motion";

function ExperienceCard({}) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[800px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
        alt="image"
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />

      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light">CEO of AshTech</h4>
        <p className="font-bold text-2xl mt-1">AshTech</p>
        <div className="flex space-x-2 my-2">
          {/* tech used */}
          {/* tech used */}
          {/* tech used */}
        </div>

        <p className="uppercase py-5 text-gray-300">
          Started .... works ended...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summery list</li>
          <li>Summery list</li>
          <li>Summery list</li>
          <li>Summery list</li>
          <li>Summery list</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
