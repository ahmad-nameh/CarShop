import React from 'react'
import img1 from "../../assets/7197355.png"
import { Typewriter } from 'react-simple-typewriter'
import img from "../../assets/pngwing.com.png"

const Landing = () => {
  return (
    <div className='flex justify-between items-center flex-wrap'>
      <div className='w-full lg:w-1/2 relative z-0 p-[60px] overflow-hidden'>
        <h1 className='text-4xl/14 tracking-[5px]'>
          Find Your Drive,<br/>
          <div className='relative'>
            Discover Your Ride,
            <img src={img} className='absolute w-[60%] h-full top-0 z-[-1]' />
          </div>
          Your Dream Car Awaits<br/>
        </h1>
        
        <p className='mt-10 text-lg text-gray-500 min-h-[80px]'>
          <Typewriter
              words={[`Experiance the Ultimate freedom pf choice with GoCar - tailor your adventure by 
              choosing from our premium fleet of vehicles`]}
              // loop={5}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
          />
        </p>
        <button className='mt-7 px-4 py-2 bg-(--main-color) text-white rounded-sm'>Get Started</button>
      </div>
      <div className='w-full lg:w-1/2'>
        <img src={img1} className='w-full h-full'/>
      </div>
      
    </div>
  )
}

export default Landing
