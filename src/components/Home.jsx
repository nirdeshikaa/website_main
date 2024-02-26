import React, { useState, useEffect } from "react";
import MyImage from "../assets/Nirdeshika.jpg";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-red-700 via-pink-600 to-pink-300"
    >
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <p className="text-white text-3xl">Loading...</p>
        </div>
      ) : (
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl text-white">Meet Nirdeshika</h2>

            <p className="text-black-900 py-4 max-w-md font-medium">
              I am a reader, artist, and aspiring model with a delightful
              appreciation for food. Her name radiates warmth, just like her
              kind and welcoming nature.
            </p>
          </div>
          <div>
            <img
              src={MyImage}
              alt="my profile"
              className="rounded-2xl mx-auto w-2/3 md:w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
