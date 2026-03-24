import React, { useEffect, useState } from "react";
import MealCard from "../components/MealCard";
import banner from "../assets/eat-illustration.svg";
import wave from "../assets/wave.svg";
import axios from "axios";
import useEmblaCarousel from "embla-carousel-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Home = ({ results, editFaves, faves, hasSearched, fetchData }) => {
  const [count, setCount] = useState(8);
  const [categories, setCategories] = useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const cardSize = "w-60 h-60";

  useEffect(() => {
    setCount(8);
  }, [results]);

  useEffect(() => {
    async function getCategories() {
      const { data } = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php",
      );
      if (!data.categories) {
        setCategories([]);
      } else {
        setCategories(data.categories);
      }
    }

    getCategories();
  }, []);

  return (
    <div
      id="home"
      className={`relative flex flex-col bg-[#CFDEF3] min-h-screen items-center ${results?.length > 0 ? "justify-between" : ""}`}
    >
      <div className="flex flex-col items-center justify-center w-full mt-40 sm:mt-20 max-h-80 p-12">
        <figure className="w-full md:w-180">
          <img src={banner} alt="banner" className="zoom-overshoot" />
        </figure>
      </div>
      {!hasSearched && (
        <>
          <h1 className="p-8 text-4xl text-[#117777] zoom-overshoot delay-3">
            Find your next meal!
          </h1>
          <div className="relative z-50 pl-14 pr-14 zoom-overshoot delay-1">
            <button
              onClick={() => emblaApi && emblaApi.scrollPrev()}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-50 cursor-pointer hover:scale-110 hover:opacity-80 transition-all"
            ><FontAwesomeIcon icon={faAngleRight} className="rotate-180 text-4xl text-[#117777]"/></button>
            <button
              onClick={() => emblaApi && emblaApi.scrollNext()}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-50 cursor-pointer hover:scale-110 hover:opacity-80 transition-all"
            ><FontAwesomeIcon icon={faAngleRight} className="text-4xl text-[#117777]"/></button>

            <div className="flex justify-center rounded-2xl overflow-hidden w-full mx-auto max-w-[70vw]">
              <div className="w-full">
                <div className="overflow-hidden" ref={emblaRef}>
                  <div className="flex">
                    {categories.map((cat) => (
                      <div
                        key={cat.idCategory}
                        className="shrink-0 w-65"
                        onClick={() => fetchData(cat.strCategory)}
                      >
                        <div
                          className={`bg-blue-100 hover:bg-blue-200 flex flex-col justify-around items-center border-white rounded-[10px] overflow-hidden  ${cardSize} cursor-pointer hover:scale-102 transition-all`}
                        >
                          <figure>
                            <img
                              src={cat.strCategoryThumb}
                              alt="category-photo"
                            />
                          </figure>
                          <h4 className="text-[#117777] font-semibold">{cat.strCategory}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div ref={emblaRef} className="overflow-hidden mt-10">
            <div className="flex">
            {categories.map((cat) => (
              <div key={cat.idCategory} className="flex-[0_0_25%] mr-4">

              <div
                className={`bg-blue-100 flex flex-col justify-center items-center border-white rounded-[10px] overflow-hidden mb-4 ${cardSize} cursor-pointer shadow-2xl hover:scale-102 transition-all`}
              >
                <figure>
                  <img src={cat.strCategoryThumb} alt="category-photo" />
                </figure>
                <h4>{cat.strCategory}</h4>
              </div>
              </div>
            ))}
            </div>
          </div> */}
        </>
      )}
      <figure className="absolute flex flex-col w-full top-50 md:top-30 z-0">
        <img src={wave} alt="wave" className="border-none" />
        <img src={wave} alt="wave" className="rotate-180" />
      </figure>
      {hasSearched && results?.length === 0 ? (
        <>
          <h1 className="p-8 text-4xl text-[#117777]">No results</h1>
        </>
      ) : (
        <>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-270 justify-items-center pb-20 z-100">
            {results?.slice(0, count).map((meal) => (
              <MealCard
                key={meal.idMeal}
                meal={meal}
                editFaves={editFaves}
                faves={faves}
              />
            ))}
          </div>
          {results?.length > 0 && (
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
        </>
      )}
    </div>
  );
};

export default Home;
