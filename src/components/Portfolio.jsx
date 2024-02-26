import React from "react";

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="w-full h-full sm:h-screen bg-gradient-to-b from-red-700 via-pink-600 to-pink-300"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-2 pt-28 ">
          <p className="text-4xl font-bold inline border-b-4 text-black border-black">
            Portfolio
          </p>
        </div>
        <p className="text-xl mt-20">
        Welcome to my world! Throughout my academic journey, I've engaged in various projects that have allowed me to apply theoretical knowledge to practical settings. 
        </p>
        <br />
        <ul className="list-disc pl-8 text-xl mt-4">
          <li>
            <strong>Sustainable Energy Initiative:</strong> Spearheaded a project focused on developing renewable energy solutions for rural communities.
          </li>
          <br />
          <li>
            <strong>Data Analytics Project:</strong> Collaborated with a team to analyze large datasets from a marketing campaign, utilizing statistical tools and machine learning algorithms to identify trends and patterns.
          </li>
          <br />
          <li>
            <strong>Community Health Outreach Program:</strong>Took part in organizing a health education and screening program for underserved communities. Involved in planning logistics, conducting health assessments, and delivering educational workshop.

          </li>
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
