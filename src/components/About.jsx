import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-green-600
  to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-centerw-full h-full ">
        <div className="pt-32 pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I'm Anushna Chaulagain, currently pursuing a Bachelor of Science with
          Honours in Computer and Data Science at Birmingham City University. I
          am deeply passionate about the intersection of technology and data,
          particularly in the realm of machine learning.
        </p>
        <br />
        <p className="text-xl">
          One of my primary areas of interest lies in machine learning. I am
          fascinated by its ability to enable computers to learn from data and
          make decisions without being explicitly programmed. Exploring
          algorithms, techniques, and applications within machine learning is a
          journey I find incredibly rewarding and intellectually stimulating.
        </p>
      </div>
    </div>
  );
};

export default About;
