import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className='flex justify-center items-center gap-2 p-4 cursor-pointer'>
            <img className='w-12 sm:w-14' src="/images/logo.png" alt="logo" />
            <h1 className='text-18 sm:text-[22px] text-[#848484] font-extrabold tracking-[6px]'>SILICON<span className='font-normal'>FORGE</span></h1>
        </div>
        <div className='bg-[#FEC05B]'>
          <div className='w-[95%] sm:max-w-[75%] mx-auto text-gray-900 text-sm lg:flex justify-between items-center gap-4 py-4'>
              <p><span className='font-bold'>Address:</span>XCOMPONYADDRESSX</p>
              <p>© 2025 Silicon Forge Technlogies, All Rights Reserved</p>
              <p><span className='font-bold'>Email:</span>XCOMPONYEMAILX</p>
          </div>
        </div>
    </div>
  )
}

export default Footer