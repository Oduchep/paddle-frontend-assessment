import Image from 'next/image';
import React from 'react'

const GitCard = ({data}) => {
  return (
    <li className='w-full text-white px-4 py-6 flex flex-wrap justify-between border-b-2 border-[#271AC1] mb-4'>
        <Image src={data.owner.avatar_url || "/"} height={120} width={150} alt="user photo"/>
        
        <div className='w-full md:w-9/12 xl:w-10/12 pt-5 md:pt-0'>
            <h3 className='text-xl font-semibold'> {data.name} </h3>
            <h2 className='text-sm'> by {data.owner.login} </h2>
            <p className='mt-3'> {data.description} </p>
            <div className='mt-6 flex flex-wrap'>
                <span className='p-2 bg-[#271AC1]'>Stars: {data.stargazers_count}{data.stargazers_count >= 1000? 'k' : null}</span>
                <span className='p-2 bg-[#271AC1] mx-4'>Issues: {data.open_issues_count}{data.open_issues_count >=1000 ? 'k' : null}</span>
                <span className='mt-3'> Submitted 30 days ago by <a href={data.owner.html_url} target='_blank' className='underline text-[#FF00F7]' rel="noreferrer"> {data.owner.login} </a></span>
            </div>
        </div>

    </li>
  )
}

export default GitCard