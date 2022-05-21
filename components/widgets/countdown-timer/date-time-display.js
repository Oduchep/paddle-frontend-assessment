import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={`flex flex-col justify-center items-center bg-white p-2 md:p-2 w-full h-20 md:w-28 md:h-32 rounded-lg ${isDanger ? 'text-red-700' : "" }`}>
      <p className='font-bold text-3xl md:text-5xl mb-1 md:mb-3'>{value}</p>
      <span className='text-base font-normal'>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;