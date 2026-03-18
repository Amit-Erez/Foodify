import React, { useEffect } from 'react'
import MealCard from '../components/MealCard'
import banner from "../assets/eat-illustration.svg"

const Home = ({results}) => {

  useEffect(() => {
    if(!results) return
    console.log(results)
  }, [results])

  return (
    <div className='flex flex-col bg-linear-to-t from-[#E0EAFC] to-[#CFDEF3] min-h-screen p-0-8-8-8 items-center justify-between'>
      <div className='flex flex-col items-center justify-center w-full mt-40 sm:mt-20 max-h-80 p-12'>
        <figure className='w-full md:w-180'>
          <img src={banner} alt="banner" />
        </figure>
      </div>
        {/* <h1 className='p-8 text-4xl text-gray-600'>Find your next meal!</h1> */}
      <div className='flex-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-270 justify-items-center'>
        {results?.map((meal) => (
          <MealCard meal={meal} />
        ))}
      </div>
    </div>
  )
}

export default Home