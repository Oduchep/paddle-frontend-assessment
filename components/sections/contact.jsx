import { useContext } from 'react'
import React from 'react'
import { DataContext } from '../../utilities/data'
import Input from '../elements/input'
import { BsArrowRight } from 'react-icons/bs'
import Button from '../elements/button'

const Contact = () => {
    const {contact, openContact} = useContext(DataContext)
  return (
    <div className={`fixed glass-blur z-20 inset-0 overflow-y-auto h-full w-full ${contact ? 'block' : 'hidden'}`}>
        <div className="relative float-right inset-y-0 py-24 px-5 lg:px-16 w-4/5 md:w-1/2 shadow-lg bg-gradient-to-b from-[#210045] to-[#0C0123]">
            <h2 className='text-2xl md:text-3xl text-white font-semibold'>
                Hey, we are still in the works, but you can send us a message!
            </h2>
            <div className='my-5'>
                <form action="">
                    <label className='text-xl text-white font-light'> First Name</label>
                    <div className='bg-white rounded-lg mt-5 mb-8 p-2'>
                        <Input placeholder="Enter your First name"/>
                    </div>

                    <label className='text-xl text-white font-light'> Last Name</label>
                    <div className='bg-white rounded-lg mt-5 mb-8 p-2'>
                        <Input placeholder="Enter your last name"/>
                    </div>

                    <label className='text-xl text-white font-light'> Email address</label>
                    <div className='bg-white rounded-lg mt-5 mb-8 p-2'>
                        <Input placeholder="Enter your email address"/>
                    </div>

                    <label className='text-xl text-white font-light'> Tell us what you need help with: </label>
                    <div className='h-28 bg-white rounded-lg mt-5 mb-8 p-2'>
                        <textarea className='w-full h-full outline-none text-slate-500 placeholder:text-red-600'>
                            Enter a topic, like channel problem...
                        </textarea>
                    </div>

                    <div className='w-40 h-14'>
                        <Button label="send now"/>
                    </div>
                </form>

            </div>
            <div className='absolute top-5 -left-8 md:-left-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex justify-center items-center'>
                <button onClick={() => openContact(false)}>
                    <BsArrowRight className='text-[#210045] text-4xl'/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Contact