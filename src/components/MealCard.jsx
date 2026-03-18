import React from "react";

const MealCard = ({ meal }) => {
  return (
    <div className="bg-blue-100 flex flex-col border rounded-2xl overflow-hidden max-w-70 md:max-w-60 h-90 cursor-pointer">
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
  );
};

export default MealCard;
