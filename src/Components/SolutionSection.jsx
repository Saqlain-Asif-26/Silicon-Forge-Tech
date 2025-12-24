import React from 'react'

function SolutionSection() {
  return (
    <div className='w-full bg-cover bg-right bg-[url("/images/solution-pic.png")]'>
        <div className='w-[95%] sm:max-w-[75%] mx-auto sm:flex flex-col gap-2'>
            <div className='bg-[#FEC05BE5] sm:w-2/3 md:w-1/2 p-6 rounded-b-xl'>
                <h1 className='text-3xl text-black pb-4 font-medium'>Solutions That Match Your Vision</h1>
                <p className='text-sm text-[#757575]'>At Silicon Forge Technologies, we appreciate that every business is distinct. Our approach mirrors this belief. We offer custom IT services and solutions designed to equip your organisation with the essential tools, guidance, and resources needed to grow and thrive in a competitive environment. From developing bespoke applications to maintaining seamless operational performance, our services are geared towards empowering your next chapter of success.</p>
            </div>
            <div className='bg-[#FEC05BE5] sm:w-2/3 md:w-1/2 p-6 rounded-t-xl self-end mt-4 sm:mt-0'>
                <h1 className='text-3xl text-black pb-4 font-medium'>Our Promise to You</h1>
                <p className='text-sm text-[#757575]'>We are passionate about helping businesses unlock their potential through intelligent, practical IT strategies that enhance productivity and efficiency. With a commitment to clear communication, client collaboration, and outstanding service delivery, we ensure that every solution we provide is a step forward for your business.</p>
            </div>
        </div>
    </div>
  )
}

export default SolutionSection