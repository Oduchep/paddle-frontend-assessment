import React from 'react'
import { AiFillYoutube, AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai"

const Footer = () => {
  return (
    <div className='w-full md:w-[584px] mx-auto'>
        <div className='w-4/6 mx-auto flex justify-around'>
           <AiFillYoutube className='text-white opacity-50 hover:opacity-100 transition-opacity text-4xl'/>
           <AiFillFacebook className='text-white opacity-50 hover:opacity-100 transition-opacity text-4xl'/>
           <AiFillLinkedin className='text-white opacity-50 hover:opacity-100 transition-opacity text-4xl'/>
           <AiFillInstagram className='text-white opacity-50 hover:opacity-100 transition-opacity text-4xl'/>
           <AiFillTwitterSquare className='text-white opacity-50 hover:opacity-100 transition-opacity text-4xl'/>
        </div>
        <div className='my-5 flex justify-evenly text-white text-opacity-50 text-[20px]'>
            <p> Terms of services </p>
            <p> Privacy policy </p>
        </div>
        <div>
            <p className='text-white text-opacity-50 text-[20px] text-center'> Copyright 2021 @ Peddle Technologies. All Rights Reserved. </p>
        </div>
    </div>
  )
}

export default Footer