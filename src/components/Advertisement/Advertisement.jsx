import React from 'react'
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { FaMoneyBillWave , FaRegHandshake } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import img from "../../assets/3d-car-with-simple-background.jpg"

const Advertisement = () => {
  return (
    <div className='flex items-center flex-wrap justify-center gap-[15%]'>
      <div className=''>
        <h3 className='text-2xl'>Why Choosing Our webSite?</h3>
        <p className='flex items-center gap-6 mt-5 ml-5 font-mono text-xl'>
          <BiSolidLike className='text-(--main-color) text-xl'/>
          Quality & Variety
        </p>
        <p className='flex items-center gap-6 mt-5 ml-5 font-mono text-xl'>
          <FaMoneyBillWave className='text-(--main-color) text-xl'/>
          Affordable Rates
        </p>
        <p className='flex items-center gap-6 mt-5 ml-5 font-mono text-xl'>
          <FaRegHandshake className='text-(--main-color) text-xl'/>
          Easy Booking
        </p>
        <p className='flex items-center gap-6 mt-5 ml-5 font-mono text-xl'>
          <BsFillChatSquareTextFill className='text-(--main-color) text-xl'/>
          Customer Satisfaction
        </p>
      </div>
      <img src={img} className='basis-1/2 w-[400px]' />
    </div>
  )
}

export default Advertisement
