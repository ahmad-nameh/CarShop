import React from 'react'
import { NavLink } from 'react-router-dom'

const CarCard = (props) => {
  return (
    <div className='w-[250px] p-3 bg-[#f5f5f5] rounded-xl relative'>
      <img src={props.data.photo} className='w-[100%] h-[175px] object-contain'/>
      <p className='text-xl'>{props.data.name}</p>
      
      <p className='mt-2 ml-[7px] h-[35px] leading-none text-gray-500'>
        {props.data.newPrice} $
        <br/>
        {props.data.oldPrice&&<del>{props.data.oldPrice} $</del>}
      </p>

      {props.data.oldPrice&&
      <span className='absolute p-[4px_10px] bg-orange-600 text-white top-[10px] right-[10px] rounded-[10px] text-[10px]'>
        Offer
      </span>}

      <NavLink
        to='/carDetails' 
        state={{CarId : props.data.id}}
        className='absolute p-[4px_10px] bg-[var(--main-color)] text-white bottom-[10px] right-[10px] rounded-[10px]'>
        View
      </NavLink>

    </div>
  )
}

export default CarCard
