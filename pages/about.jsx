import React from 'react'
import Contact from '../components/sections/contact'
import Footer from '../components/sections/footer'
import { BsArrowRight } from 'react-icons/bs'

const About = () => {
  return (
    <div className='pt-20 px-2 md:px-20 w-full overflow-hidden'>
      <section>
        <div className='h-[548px] w-10/12 md:w-2/3 glass-blur absolute top-28 left-0 z-10'></div>

        <div className='w-1/2 mx-auto relative z-20 text-white py-14 flex flex-col'>
          <h1 className='uppercase text-sm mb-5 flex items-center'>
            <span className='block w-11 h-[2px] mr-2 bg-white'></span>
            <span> About us </span>
          </h1>
          <p className='font-normal text-6xl self-end'> Built for Saas <br/> and E-commerce </p>
        </div>

        <div className='w-full relative z-20 text-white py-5 md:py-14 flex flex-col'>
          <p className='relative font-normal text-base w-full md:w-1/3 self-end'> Our tools are easy to set up and use with a user friendly dashboard that enables you to set up, launch, automate and manage multi-affiliate campaigns in 5 minutes. </p>
        </div>
      </section>

      <section className='my-5 md:my-20 w-full md:w-5/6 mx-auto relative z-20'>
        <p className='font-normal text-4xl text-white'>
          Metricks was developed because just like you, we needed a product that could give us <strong> good value</strong>.
        </p>
      </section>

      <section className='my-10 md:my-28 w-full md:w-5/6 mx-auto flex justify-between flex-wrap'>
        <div className='text-white w-full md:w-1/2 relative z-20 px-10'>
          <div>
            <p className='pl-2'> 01 </p>
            <h3 className='uppercase text-sm mb-5 flex items-center'>
              <span className='block w-11 h-[2px] mr-2 bg-white'></span>
              <span> Why us? </span>
            </h3>
          </div>
          <p className='text-base'> We pride ourselves in our ability to innovate and create world-class tools that provide reliable and efficient touchpoints between advertisers and affiliates.</p>
        </div>

        <div className='text-white px-10 w-full md:w-1/2 relative z-20 mt-5'>
          <div>
            <p className='pl-2'> 02 </p>
            <h3 className='uppercase text-sm mb-5 flex items-center'>
              <span className='block w-11 h-[2px] mr-2 bg-white'></span>
              <span> Growing with you </span>
            </h3>
          </div>
          <p className='text-base mb-5'> Leveraging the best technology, we have developed an all-in-one affiliate marketing tracking software, a genius tool to help you track, automate and optimize your influencer campaigns, all from one dashboard.</p>
          <p className='text-base'> Our team of experts are constantly brainstorming, testing and developing new solutions with only one thing in mind - your business growth. Your success is our success and by giving you the tools you need to scale, we grow as well.</p>
        </div>

        <div className='h-[400px] w-1/2 glass-blur absolute bottom-[40rem] right-0 z-10'></div>
      </section>

      <section className='my-10 md:mt-60 md:mb-20'>
        <div className='relative z-20'>
          <p className='font-normal text-4xl text-white'>
            Got a Question?
          </p>
          <p className='text-white text-base my-4'>
            See how Metricks can help your business grow with best Affiliate Marketing Tracking Software.
          </p>
          <p className='capitalize text-base text-[#FF00F7]'> 
            Contact us <span> <BsArrowRight className='inline ml-2'/></span>
          </p>
        </div>

        <div className='h-72 w-full glass-blur absolute bottom-56 inset-x-0 z-10'></div>
      </section>

      <section className='pt-20 pb-5 relative z-20'>
        <Footer/>
      </section>
      
      <div className='absolute top-48 left-0 md:left-1/3 w-72 h-96 bg-gradient-to-b from-[#7F1E7B] to-[#19073B] z-0'></div>
      <div className='absolute bottom-[40rem] right-0 md:right-72 w-64 h-[22rem] bg-gradient-to-b from-[#213F72] to-[#19073B]'></div>
      <div className='absolute top-40 right-0 w-32 h-32 bg-gradient-to-b from-[#213F72] to-[#19073B] rounded-full'></div>
      <div className='absolute bottom-64 right-28 w-80 h-56 bg-gradient-to-b from-[#7F4129] to-[#1C0C28]'></div>

      <Contact/>
    </div>
  )
}

export default About