import React from 'react'
import { AiFillYoutube, AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai"

const Footer = () => {
  return (
    <div className='w-full md:w-[584px] mx-auto'>
        <div className='w-7/12 md:w-3/6 mx-auto flex justify-around text-3xl md:text-4xl'>
           <AiFillYoutube className='text-white opacity-50 hover:opacity-100 transition-opacity'/>
           <AiFillFacebook className='text-white opacity-50 hover:opacity-100 transition-opacity'/>
           <AiFillLinkedin className='text-white opacity-50 hover:opacity-100 transition-opacity'/>
           <AiFillInstagram className='text-white opacity-50 hover:opacity-100 transition-opacity'/>
           <AiFillTwitterSquare className='text-white opacity-50 hover:opacity-100 transition-opacity'/>
        </div>
        <div className='my-5 flex justify-evenly text-white text-opacity-50 text-base md:text-[20px]'>
            <p> Terms of services </p>
            <p> Privacy policy </p>
        </div>
        <div>
            <p className='text-white text-opacity-50 text-base md:text-[20px] text-center'> Copyright 2021 @ Peddle Technologies. All Rights Reserved. </p>
        </div>
    </div>
  )
}

export default Footer