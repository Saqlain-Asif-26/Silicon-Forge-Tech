import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

function Navbar() {

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(prev => !prev);
  }
  return (
    <div className=' z-999 relative w-[95%] sm:max-w-[75%] mx-auto flex justify-between items-center rounded-b-3xl bg-[#202020]'>
        <div className='flex justify-center items-center gap-2 p-4 cursor-pointer'>
            <img className='w-12 sm:w-14' src="/images/logo.png" alt="logo" />
            <h1 className='text-18 sm:text-[22px] text-[#848484] font-extrabold tracking-[6px]'>SILICON<span className='font-normal'>FORGE</span></h1>
        </div>
        <div className='flex justify-center items-center gap-1 p-4 cursor-pointer' onClick={toggleMenu}>
            <div className='w-2 h-2 sm:w-3 sm:h-3 border-2 sm:border-4 border-[#848484] rounded-full'></div>
            <div className='w-2 h-2 sm:w-3 sm:h-3 border-2 sm:border-4 border-gray-600 rounded-full'></div>
            <div className='w-2 h-2 sm:w-3 sm:h-3 border-2 sm:border-4 border-[#848484] rounded-full'></div>
        </div>
        <div className={`py-4 fixed top-0 left-0 w-full h-screen bg-[#202020] transition-transform duration-1000 ease-in-out ${showMenu ? "translate-y-0" : "-translate-y-full"}`}>
          <div className=' flex justify-between items-start px-4 sm:p-0 sm:max-w-[72%] mx-auto'>
            <div className='mt-32 flex flex-col justify-between items-start gap-2'>
              <h1 className='cursor-pointer text-2xl sm:text-3xl my-2 sm:my-4 font-medium tracking-wider'>Home</h1>
              <h1 className='cursor-pointer text-2xl sm:text-3xl my-2 sm:my-4 font-medium tracking-wider'>Forging the Future</h1>
                <div className='flex cursor-pointer gap-2 items-center'>
                  <h1 className='text-2xl sm:text-3xl my-2 sm:my-4 font-medium tracking-wider'>Stratgic IT Solutions</h1>
                  <FaAngleDown />
                </div>
                <div className='ml-4 text-lg sm:text-xl'>
                  <h1 className='my-2 sm:my-4 flex gap-2 items-center cursor-pointer'><FaArrowRight className='-rotate-45' /> Infrastructure Support</h1>
                  <h1 className='my-2 sm:my-4 flex gap-2 items-center cursor-pointer'><FaArrowRight className='-rotate-45' /> Software Development</h1>
                  <h1 className='my-2 sm:my-4 flex gap-2 items-center cursor-pointer'><FaArrowRight className='-rotate-45' /> IT Consultancy</h1>
                  <h1 className='mt-2 sm:mt-4 flex gap-2 items-center cursor-pointer'><FaArrowRight className='-rotate-45' /> Configration Management</h1>
                </div>
              <h1 className='cursor-pointer text-2xl sm:text-3xl my-2 sm:my-4 font-medium tracking-wider'>Get In Touch</h1>
            </div>
            <button onClick={toggleMenu}><IoCloseOutline className='w-10 h-10 cursor-pointer' /></button>
          </div>
        </div>
    </div>
 )
}

export default Navbar