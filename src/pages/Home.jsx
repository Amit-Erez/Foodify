import React, { useEffect } from 'react'

const Home = ({results}) => {

  useEffect(() => {
    if(!results) return
    console.log(results)
  }, [results])
  
  return (
    <div className='bg-gray-100 min-h-[calc(100vh-80px)]'>
      Home
      
    </div>
  )
}

export default Home