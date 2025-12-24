import React from 'react'

function ReachUsSection() {
  return (
    <div className='overflow-hidden w-[95%] sm:max-w-[75%] mx-auto my-12 bg-[#FFE9C1] rounded-xl relative flex justify-center items-center isolate'>
        <img className='absolute -left-40 lg:left-0 z-[-1]' src="/images/reach-isolation-pic.png" alt="reach-isolation-pic1" />
        <div className='p-8 text-center'>
            <h1 className='text-black text-3xl font-medium'>Start Your Journey With Silicon Forge Technologies</h1>
            <p className='text-[#757575] text-sm my-4'>Your success starts with the right partner. Begin your journey with a team that understands the intricacies of your industry and is ready to support your goals with precision and dedication.</p>
            <p className='text-[#757575] text-sm mb-8'>Get in touch with us today to discuss your IT needs and discover how our personalised approach can bolster your business growth.</p>
            <button className='bg-[#FEC05B] px-6 py-4 rounded-xl text-sm cursor-pointer'>Reach Us</button>
        </div>
        <img className='absolute rotate-180 -right-40 lg:right-0 z-[-1]' src="/images/reach-isolation-pic.png" alt="reach-isolation-pic2" />
    </div>
  )
}

export default ReachUsSection