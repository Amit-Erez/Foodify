import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Favorites = ({ faves }) => {
  const [faveRecipes, setFaveRecipes] = useState();
  console.log(faves);

  async function fetchRecipe(id) {
    if (!id) return;
    console.log(id);
    const { data } = await axios.get(`/api/lookup.php?i=${id}`);
    const meal = data.meals[0];
    return meal;
  }

  useEffect(() => {
    async function getFaveMeals(faves) {
      const favMealsData = await faves.map((fave) => fetchRecipe(fave));
      const faveMeals = await Promise.all(favMealsData);
      console.log(faveMeals);
      setFaveRecipes(faveMeals);
    }

    getFaveMeals(faves);
  }, [faves]);

  return (
    <div className='className="relative flex flex-col bg-[#CFDEF3] min-h-screen items-center p-40'>
      <h1 className="text-6xl text-[#117777] mb-20">Favorites</h1>
      <div className="flex flex-col w-full h-auto">
        {faveRecipes?.map((recipe) => (
          <Link to={`/details/${recipe.idMeal}`}>
            <div className="grid grid-cols-[240px_auto] gap-4 w-full h-45 mb-8">
              <figure className="h-45 overflow-hidden rounded-[10px]">
                <img src={recipe.strMealThumb} alt="meal photo" />
              </figure>
              <h1 className="text-[#117777] font-semibold text-[1.2rem]">
                {recipe.strMeal}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
