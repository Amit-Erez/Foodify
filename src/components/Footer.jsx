import React from 'react'
import logo from "../assets/foodifyLogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faSquareFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className=' relative flex flex-col items-center h-70 sm:h-60 bg-blue-100 border-t border-gray-300 p-6 z-50'>
    <a href='#home'>
        <img src={logo} alt="logo" className='w-40'/>
    </a>
    <div className='flex pt-4 pb-6 w-full max-w-200 pl-10 pr-10'>
        <div className='grid grid-cols-[80px_80px] sm:grid-cols-4 w-full gap-2 justify-center'>
            <div className='cursor-not-allowed text-center hover:text-emerald-900 transition-all'>About</div>
            <div className='cursor-not-allowed text-center hover:text-emerald-900 transition-all'>Careers</div>
            <div className='cursor-not-allowed text-center hover:text-emerald-900 transition-all'>FAQ</div>
            <div className='cursor-not-allowed text-center hover:text-emerald-900 transition-all'>Contact</div>
        </div>
    </div>
    <div className='flex p-0-6-6-6 w-full max-w-60 items-center justify-around mb-6'>
        <FontAwesomeIcon icon={faLinkedin} className='text-[#117777] text-2xl cursor-not-allowed hover:opacity-50 transition-all'/>
        <FontAwesomeIcon icon={faInstagram} className='text-[#117777] text-2xl cursor-not-allowed hover:opacity-50 transition-all'/>
        <FontAwesomeIcon icon={faXTwitter} className='text-[#117777] text-2xl cursor-not-allowed hover:opacity-50 transition-all'/>
        <FontAwesomeIcon icon={faSquareFacebook} className='text-[#117777] text-2xl cursor-not-allowed hover:opacity-50 transition-all'/>
    </div>
    <p className='text-center text-sm'>Website by Amit Erez &copy; Copyright 2026</p>
    </div>
  )
}

export default Footer