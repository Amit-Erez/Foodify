import React, { useEffect, useState } from 'react'
import MealCard from '../components/MealCard'
import banner from "../assets/eat-illustration.svg"

const Home = ({results}) => {
  const [count, setCount] = useState(8)

  useEffect(() => {
    if(!results) return
    console.log(results)
    setCount(8)
  }, [results])

  return (
    <div className='flex flex-col bg-[#CFDEF3] min-h-screen items-center justify-between'>
      <div className='flex flex-col items-center justify-center w-full mt-40 sm:mt-20 max-h-80 p-12'>
        <figure className='w-full md:w-180'>
          <img src={banner} alt="banner" className='zoom-overshoot'/>
        </figure>
      </div>
        {/* <h1 className='p-8 text-4xl text-[#117777]'>Find your next meal!</h1> */}
      <div className='flex-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-270 justify-items-center pb-20'>
        {results?.slice(0, count).map((meal) => (
          <MealCard key={meal.idMeal} meal={meal}/>
        ))}
      </div>
        {results.length > 0 && 
      <div>
        {count < results.length && 
        <h1 className='text-4xl text-[#117777] m-6 cursor-pointer hover:opacity-50 transition-opacity'
        onClick={() => setCount(prevCount => Math.min(prevCount + 8, results.length))}>See more...</h1>
      }
      </div>
      }
    </div>
  )
}

export default Home