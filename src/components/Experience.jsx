import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import illustrator from "../assets/illustrator.png";
import canva from "../assets/canva.png";
import figma from "../assets/figma.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
    },
    {
      id: 3,
      src: github,
      title: "Github",
    },
    {
      id: 4,
      src: illustrator,
      title: "Adobe Illustrator",
    },
    {
      id: 5,
      src: figma,
      title: "Figma",
    },
    {
      id: 6,
      src: canva,
      title: "Canva",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-red-700 via-pink-600 to-pink-300 w-full h-full sm:h-screen "
    >
      <div className="max-w-screen-lg mx-auto pt-32 p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4  text-black border-black p-2  inline">
            Experience
          </p>
          <p className="py-6">
            These are the applications that I am familiar with:
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-4 px-12 sm:px-0">
          {techs.map(({ id, src, title }) => (
            <div
              key={id}
              className="shadow-md hover:scale-105 duration-500 py-2 bg-black rounded-lg"
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
