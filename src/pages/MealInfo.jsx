import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import spinner from "../assets/icon-loading.svg";

const MealInfo = () => {
  const [recipe, setRecipe] = useState(null);
  const [ingr, setIngr] = useState([])
  const [measures, setMeasures] = useState([])
  const { id } = useParams();

  useEffect(() => {
    async function fetchRecipe(id) {
      if (!id) return;
      console.log(id);
      const { data } = await axios.get(`/api/lookup.php?i=${id}`);
      setRecipe(data.meals[0]);
    }
    fetchRecipe(id);
  }, [id]);

  useEffect(() => {
    if (!recipe) return;
    setIngr(Object.entries(recipe).filter(([key, value]) => key.includes("strIngredient") && value))
    setMeasures(Object.entries(recipe).filter(([key, value]) => key.includes("strMeasure") && value))
  }, [recipe]);

  return (
    <>
    <div className="flex flex-1 min-h-[calc(100vh-80px)] justify-center bg-[#CFDEF3] pt-20 pl-20 pr-20 pb-4 mt-40 sm:mt-20">
      {recipe ? (
          
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-[90px_400px_auto] gap-4 max-w-200">
          <h1 className="text-3xl text-center md:text-left md:text-[48px] col-span-2 h-12 md:h-20 text-[#117777] font-semibold">
            {recipe.strMeal}
          </h1>
          <div className="row-3 md:row-2 md:col-1">
            <h2 className="text-[28px] text-center md:text-left mb-4 text-[#117777] font-semibold">Ingredients:</h2>
            <div className="flex justify-center md:justify-start">
            <ul className="mr-8">
                {ingr?.map((elem, index) => (
                    <li className="p-0.5" key={index}>{elem[1]}:</li>
                ))}
            </ul>
            <ul>
                {measures?.map((elem, index) => (
                    <li className="p-0.5" key={index}>{elem[1]}</li>
                ))}
            </ul>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
          <figure className="min-w-70 max-w-100 row-2 md:row-2 sm:cols-2">
            <img
              src={recipe.strMealThumb}
              alt="meal photo"
              className="w-full rounded-[10px] overflow-hidden shadow-2xl"
              />
          </figure>
        </div>
          <div className="row-4 cols-1 md:col-span-2">
            <h1 className="text-2xl mb-4 text-[#117777] font-semibold">How to make this {recipe.strMeal}</h1>
            <p className="whitespace-pre-line">{recipe.strInstructions}</p>
            <h1 className="text-2xl mb-4 mt-4 text-[#117777] font-semibold">Enjoy!</h1>
          </div>
        </div>
      ) : (
          <div>
          <div className="bg-[#CFDEF3] min-h-screen p-20 flex items-center justify-center">
            <img
              src={spinner}
              alt="spinner"
              className="animate-spin filter brightness-0 w-20 h-20"
              />
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default MealInfo;
