"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Image from "next/image";
import Link from "next/link";

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
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <Image
        src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
        height={128}
        width={128}
        alt="dp image"
        className="relative rounded-full mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-5">{text}</span>
          <Cursor cursorColor="red" />
        </h1>
        <div>
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
