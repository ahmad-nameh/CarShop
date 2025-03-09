import React from 'react'

const CarFeatures = (props) => {
  return (
    <div className='flex justify-center flex-wrap gap-10 mt-[100px] mb-[50px] '>
      {props.data.map((item,index) => {
        return(
          <div className='p-3 rounded-xl relative basis-[90%] sm:basis-[45%] bg-[#ededed]' key={index}>
            <h3 className='text-xl mb-4'>{item.featureName}</h3>
            <p className='text-gray-600'>{item.featureDescription}</p>
          </div>
        )
      })}
    </div>
  )
}

export default CarFeatures
