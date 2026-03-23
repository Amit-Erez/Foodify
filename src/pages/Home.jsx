import React, { useEffect, useState } from "react";
import MealCard from "../components/MealCard";
import banner from "../assets/eat-illustration.svg";
import wave from "../assets/wave.svg";


const Home = ({ results, addToFaves }) => {
  const [count, setCount] = useState();

  useEffect(() => {
    if (!results) return;
    console.log(results);
    setCount(8);
  }, [results]);

  if (!results)
    return (
      <div
        id="home"
        className="relative flex flex-col bg-[#CFDEF3] h-[calc(100vh-240px)] items-center"
      >
        <div className="flex flex-col items-center justify-center w-full mt-40 sm:mt-20 max-h-80 p-12">
          <figure className="w-full md:w-180">
            <img src={banner} alt="banner" className="zoom-overshoot" />
          </figure>
        </div>
        <h1 className='p-8 text-4xl text-[#117777]'>No results</h1>
            <figure className="absolute flex flex-col w-full top-50 md:top-30 z-0">
        <img src={wave} alt="wave" className="border-none" />
        <img src={wave} alt="wave" className="rotate-180" />
      </figure>
      </div>
    );

  return (
    <div
      id="home"
      className="relative flex flex-col bg-[#CFDEF3] min-h-screen items-center justify-between"
    >
      <div className="flex flex-col items-center justify-center w-full mt-40 sm:mt-20 max-h-80 p-12">
        <figure className="w-full md:w-180">
          <img src={banner} alt="banner" className="zoom-overshoot" />
        </figure>
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-270 justify-items-center pb-20 z-100">
        {results?.slice(0, count).map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} addToFaves={addToFaves} />
        ))}
      </div>
      {results.length > 0 && (
        <div>
          <div className="text-3xl text-[#117777] m-6 cursor-pointer hover:opacity-50 transition-opacity">
            {count < results.length ? (
              <h1
                onClick={() =>
                  setCount((prevCount) =>
                    Math.min(prevCount + 8, results.length),
                  )
                }
              >
                See more...
              </h1>
            ) : (
              <a href="#home">Back to top</a>
            )}
          </div>
        </div>
      )}
      <figure className="absolute flex flex-col w-full top-50 md:top-30 z-0">
        <img src={wave} alt="wave" className="border-none" />
        <img src={wave} alt="wave" className="rotate-180" />
      </figure>
    </div>
  );
};

export default Home;
