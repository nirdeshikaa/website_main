import React, { useState, useEffect } from "react";
import MyImage from "../assets/Nirdeshika.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-green-600"
    >
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <p className="text-white text-3xl">Loading...</p>
        </div>
      ) : (
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl text-white">
              I am a Data Scientist
            </h2>

            <p className="text-amber-400 py-4 max-w-md">
              Bonjour! I'm Anushna Chaulagain. If you'd like to learn more about
              my projects, feel free to explore my portfolio. ¡Gracias!
            </p>
            <div>
              <Link
                to="/portfolio"
                smooth
                duration={500}
                className="group text-black
             w-fit px-6 py-4 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-200 to-lime-600 cursor-pointer"
              >
                PortFolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
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
