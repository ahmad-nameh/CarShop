import React from 'react'
import CarFeatures from '../components/CarFeatures/CarFeatures';
import CarImageSlider from '../components/CarImageSlider/CarImageSlider';
import data from "../db/carDetails";

const CarDetials = () => {

  return (
    <div className='container mx-auto my-10'>
      <div className='flex items-center gap-12 flex-wrap'>

        <div className="slider-container w-full lg:w-[48%]">
          <CarImageSlider data={data[0].carImages}/>
        </div>

        <div className='w-full lg:w-[48%]'>
          <h2 className='text-2xl'>{data[0].carName}</h2>
          <p className='my-5 text-[#373737]'>{data[0].carStatus}</p>
          <div className='flex gap-5 flex-wrap'>
            {data[0].cr.map((item,index) => {
              return(
                <span className='py-1 px-5 bg-[#ededed] rounded-xl' key={index}>{item}</span>
              )
            })}
            
          </div>
          <p className='mt-4 ml-3 text-xl'>1500 $</p>
        </div>

    </div>
    <CarFeatures data={data[0].CarFeatures} />
    </div>
  )
}

export default CarDetials
