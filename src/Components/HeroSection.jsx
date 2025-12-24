import React from 'react'
import Navbar from './Navbar'

function HeroSection() {
  return (
    <div className='w-full h-[95%] bg-[url("/images/hero-pic.png")] bg-cover bg-center'>
      <Navbar />
        <div className='w-[95%] sm:max-w-[75%] mx-auto'>
            <h1 className='text-3xl sm:text-5xl lg:text-6xl pt-20 sm:pt-32 leading-12 sm:leading-18'>Building a <span className='text-[#fec05b] font-bold'>Stronger <br/>Future </span>Through IT <br/>Innovation</h1>
            <p className='py-4 text-sm w-90% lg:w-[60%] sm:leading-5 text-gray-300'>In a rapidly evolving technological landscape, businesses require dependable IT support to stay competitive. Silicon Forge Technologies is your partner in delivering industry-leading IT services and solutions designed to enhance your business performance in an increasingly digital world. Our commitment lies in fostering enduring relationships with our clients, understanding their unique needs, and offering individualised support to propel their success.</p>
            <div className='text-gray-900 text-sm lg:flex justify-between items-center gap-4 sm:px-8 pt-4 pb-16'>
                <p><span className='font-bold'>Address:</span>XCOMPONYADDRESSX</p>
                <p>Privacy Policy - Terms & Conditions - Cookie Policy</p>
                <p><span className='font-bold'>Email:</span>XCOMPONYEMAILX</p>
            </div>
        </div>
    </div>
  )
}

export default HeroSection