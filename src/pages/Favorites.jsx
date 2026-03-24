import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import table from "../assets/hand-drawn-top-view-table-background.png"
import wave from "../assets/wave.svg";

export const Favorites = ({ faves, editFaves }) => {
  const [faveRecipes, setFaveRecipes] = useState([]);
  const navigate = useNavigate()

  async function fetchRecipe(id) {
    if (!id) return;
    const { data } = await axios.get(`/api/lookup.php?i=${id}`);
    const meal = data.meals[0];
    return meal;
  }

  useEffect(() => {
    if(faves.length === 0) {
        setFaveRecipes([])
        return
    }
    async function getFaveMeals() {
      const favMealsData = faves.map((fave) => fetchRecipe(fave));
      const faveMeals = await Promise.all(favMealsData);
      setFaveRecipes(faveMeals);
    }

    getFaveMeals();
  }, [faves]);

  function toggleFavorite(e, id) {
    e.preventDefault();
    editFaves(id);
  }

  return (
    <div className='relative flex flex-col bg-[#CFDEF3] min-h-screen items-center p-48 sm:p-40'>
        <div className="absolute left-[10%] cursor-pointer z-50 text-[#117777] text-2xl bg-white p-1 rounded hover:opacity-50 transition-all"
        onClick={() => navigate(-1)}>Back
        </div>
      <h1 className=" text-5xl sm:text-6xl text-[#117777] mb-6 sm:mb-20">
        Favorites
      </h1>
      {faves.length === 0 ? 
      <>
      <p>Add your favorites here...</p> 
      </>
    :
     
      <div className="flex flex-wrap justify-center 2xl:justify-start p-6 sm:min-w-100 max-w-260 gap-4 h-auto z-100">
        {faveRecipes.map((recipe) => (
          <Link
          to={`/details/${recipe.idMeal}`}
          className="w-60 sm:w-80 mb-8"
          key={recipe.idMeal}
          >
            <div className="relative grid grid-cols-[120px_auto] gap-2 h-30 border-white rounded-[10px] overflow-hidden shadow-2xl hover:scale-102 transition-all bg-blue-100">
              <figure className="overflow-hidden">
                <img
                  src={recipe.strMealThumb}
                  alt="meal photo"
                  className="h-full"
                />
              </figure>
              <h1 className="text-[#117777] font-semibold text-[11px] lg:text-[14px] p-2">
                {recipe.strMeal}
              </h1>
              <div
                className="absolute right-2 bottom-2 w-6 h-6"
                onClick={(e) => toggleFavorite(e, recipe.idMeal)}
              >
                <svg
                  className="faveheart text-red-500 hover:scale-110 transition-all"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M241 87.1l15 20.7 15-20.7C296 52.5 336.2 32 378.9 32 452.4 32 512 91.6 512 165.1l0 2.6c0 112.2-139.9 242.5-212.9 298.2-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C139.9 410.2 0 279.9 0 167.7l0-2.6C0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1z"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
}
      <figure className="absolute flex flex-col w-full top-50 md:top-30 z-0">
        <img src={wave} alt="wave" className="border-none" />
        <img src={wave} alt="wave" className="rotate-180" />
      </figure>
      
    </div>
  );
};
