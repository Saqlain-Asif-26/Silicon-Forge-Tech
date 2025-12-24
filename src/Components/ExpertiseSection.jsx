import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

function ExpertiseSection() {
  return (
    <div className='w-full relative z-0'>
        <img className='absolute top-0 left-0 -z-1' src="/images/expertise-isolation-pic.png" alt="isolation-pic1" />
        <div className='py-16  w-[95%] sm:max-w-[75%] mx-auto'>
            <div className='pb-8 flex flex-col justify-center items-center text-center'>
                <h1 className='text-3xl font-medium'>Our Expertise</h1>
                <p className='text-[#757575] py-4 text-sm w-[90%] md:w-2/3'>We cater to a multitude of IT dimensions, ensuring your business can excel in a demanding environment. Our core service offerings include:</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-between items-center'>
                <div className='bg-[#ffe9c1] rounded-xl px-6 h-full grid grid-cols-1 items-start justify-start'>
                    <img className='w-full bg-cover content-center' src="/images/expertise-pic1.png" alt="expertise-pic1" />
                    <h1 className='py-2 text-lg leading-6 text-black font-bold'>Infrastructure Support</h1>
                    <p className=' text-[#757575] text-sm'>Our bespoke system, network, and desktop support services are designed to minimise operational downtime and reduce infrastructure complexity through proactive support. Our assistance guarantees optimal system operations, especially for businesses with a limited or inexperienced IT team.</p>
                    <div className='self-end py-2 relative'>
                        <h5 className='cursor-pointer text-[#FEC05B]'>Find our more</h5>
                        <div className='absolute p-3 bg-[#FEC05B] rounded-full right-0 -bottom-4 cursor-pointer'><FaArrowRight className='-rotate-45' /></div>
                    </div>
                </div>
                <div className='bg-[#ffe9c1] rounded-xl px-6 h-full grid grid-cols-1 items-start justify-start'>
                    <img className='w-full bg-cover content-center' src="/images/expertise-pic2.png" alt="expertise-pic2" />
                    <h1 className='py-2 text-lg leading-6 text-black font-bold'>Software Development</h1>
                    <p className=' text-[#757575] text-sm'>We offer high-quality software development services, from concept to execution. Our expert team is adept at delivering bespoke web, desktop, and mobile apps as well as cross-platform solutions. Our commitment to long-term post-launch support ensures seamless integration of new features and swift resolution of bugs or errors.</p>
                    <div className='self-end py-2 relative'>
                        <h5 className='cursor-pointer text-[#FEC05B]'>Find our more</h5>
                        <div className='absolute p-3 bg-[#FEC05B] rounded-full right-0 -bottom-4 cursor-pointer'><FaArrowRight className='-rotate-45' /></div>
                    </div>
                </div>
                <div className='bg-[#ffe9c1] rounded-xl px-6 h-full grid grid-cols-1 items-start justify-start'>
                    <img className='w-full bg-cover content-center' src="/images/expertise-pic3.png" alt="expertise-pic3" />
                    <h1 className='py-2 text-lg leading-6 text-black font-bold'>IT Consultancy</h1>
                    <p className=' text-[#757575] text-sm'>We believe in future-proofing your business. Our consultancy service provides expert guidance on new technologies or systems, business need assessments, and planning for IT tool integration. Stay ahead of the curve by leveraging our specialist knowledge and capabilities.</p>
                    <div className='self-end py-2 relative'>
                        <h5 className='cursor-pointer text-[#FEC05B]'>Find our more</h5>
                        <div className='absolute p-3 bg-[#FEC05B] rounded-full right-0 -bottom-4 cursor-pointer'><FaArrowRight className='-rotate-45' /></div>
                    </div>
                </div>
                <div className='bg-[#ffe9c1] rounded-xl px-6 h-full grid grid-cols-1 items-start justify-start'>
                    <img className='w-full bg-cover content-center' src="/images/expertise-pic4.png" alt="expertise-pic4" />
                    <h1 className='py-2 text-lg leading-6 text-black font-bold'>Configration Management</h1>
                    <p className=' text-[#757575] text-sm'>Ensure consistent IT performance with our configuration management services. We help businesses control innovation, manage change, and plan upgrades strategically. Our service facilitates infrastructure continuity and long-term planning for your existing infrastructure setup.</p>
                    <div className='self-end py-2 relative'>
                        <h5 className='cursor-pointer text-[#FEC05B]'>Find our more</h5>
                        <div className='absolute p-3 bg-[#FEC05B] rounded-full right-0 -bottom-4 cursor-pointer'><FaArrowRight className='-rotate-45' /></div>
                    </div>
                </div>
            </div>
        </div>
        <img className='absolute rotate-180 bottom-0 right-0 -z-1' src="/images/expertise-isolation-pic.png" alt="isolation-pic2" />
    </div>
  )
}

export default ExpertiseSection