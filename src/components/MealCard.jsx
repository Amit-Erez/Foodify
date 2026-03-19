import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MealCard = ({ meal }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <>
    {isLoading ? 
    <div className="bg-gray-600 rounded-2xl overflow-hidden w-70 md:w-60 h-90 shadow-2xl animate-pulse">

    </div>
    :
    <Link to={`/details/${meal.idMeal}`}>
    <div className="bg-blue-100 flex flex-col border-white rounded-[10px] overflow-hidden mb-4 max-w-70 md:max-w-60 h-100 md:h-90 cursor-pointer shadow-2xl hover:scale-102 transition-all">
      <figure>
        <img
          src={meal.strMealThumb}
          alt="meal-photo"
          className="w-full h-full"
        />
      </figure>
      <div className="flex flex-col items-center p-3 h-full justify-around text-center">
        <h1 className="font-bold text-[17px]">{meal.strMeal}</h1>
        <p>{meal.strArea}</p>
      </div>
    </div>
    </Link>
    
    }
    </>
  );
};

export default MealCard;
