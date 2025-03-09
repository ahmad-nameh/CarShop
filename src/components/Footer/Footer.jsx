import React from 'react'
import { FaSquareFacebook  , FaSquareInstagram , FaSquareTwitter} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className='bg-(--main-color) text-[white] text-center leading-[3] py-3 rounded-t-lg rounded-r-lg mt-[80px]'>
      <p className='flex justify-center items-center gap-3'>
        Mail us :<IoMdMail/>
      </p>

      <p>Join Us at :</p>
      <div className='flex gap-10 justify-center'>
        <FaSquareFacebook />
        <FaSquareInstagram />
        <FaSquareTwitter />
      </div>
    </div>
  )
}

export default Footer
