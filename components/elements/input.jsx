import React from 'react'

const Input = ({placeholder, type, className}) => {
  return (
    <>
        <input type={type || 'text'} placeholder={`${placeholder}...`} className={`${className} w-full bg-transparent border-opacity-20 placeholder:text-[14px] placeholder:font-normal placeholder:text-[#707070] capitalize outline-none px-3 py-2`}/>
    </>
  )
}

export default Input