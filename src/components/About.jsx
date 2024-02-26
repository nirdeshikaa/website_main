import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b  from-red-700 via-pink-600 to-pink-300"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-centerw-full h-full ">
        <div className="pt-32 pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-black border-black">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Nirdeshika, a creative spirit, immerses herself in the worlds of
          literature and art, relishing the joys of reading and drawing. As a
          model in progress, she embodies grace and determination, reflecting
          beauty in words and images, while her warm personality shines through
          her exploration of diverse flavors.
        </p>
        <br />
        <p className="text-xl">
          In the realm of technical analysis, Nirdeshika excels, and her love
          for machine learning reflects a dedication to precision. Integrating
          these tools enhances predictive prowess, showcasing a harmonious blend
          of art and analysis. Amidst her busy life, Nirdeshika finds solace in
          nature, embodying an aesthetic soul with a pure and kind heart.
        </p>
      </div>
    </div>
  );
};

export default About;
