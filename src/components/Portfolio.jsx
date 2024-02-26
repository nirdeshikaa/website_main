import React from "react";

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="w-full h-full sm:h-screen bg-gradient-to-b from-green-600
  to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-2 pt-32 ">
          <p className="text-4xl font-bold inline border-b-4 border-black">
            Portfolio
          </p>
        </div>
        <p className="text-xl mt-20">
          Welcome to my portfolio! Throughout my academic journey, I have had
          the opportunity to work on diverse projects that have allowed me to
          apply theoretical concepts to real-world problems.
        </p>
        <br />
        <p className="text-xl">
          Throughout my academic journey, I've had the opportunity to work on
          exciting projects that have allowed me to apply theoretical concepts
          to real-world scenarios. Some notable projects include:
        </p>
        <ul className="list-disc pl-8 text-xl mt-4">
          <li>
            <strong>Smart Yatayat:</strong> Contributed to the development of an
            innovative transportation management system aimed at optimizing
            routes and enhancing passenger experience.
          </li>
          <br />
          <li>
            <strong>Hospital Management System:</strong> Played a key role in
            designing and implementing a robust system to streamline operations
            and improve efficiency within a healthcare setting.
          </li>
          <br />
          <li>
            <strong>Robotics Project with Arduino:</strong> Led a team in the
            creation of a robotics project leveraging Arduino technology,
            showcasing my proficiency in hardware programming and automation.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
