"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi The Name is Aashik",
      "Guy-Who-Loves-Tea.tsx",
      "<But Loves To Code />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="red" />
      </h1>
    </div>
  );
};

export default Hero;
