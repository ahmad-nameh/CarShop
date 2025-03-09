import React from 'react'
import Qestions from '../components/FAQ/Qestions';
import "../components/FAQ/FaqStyle.css";
import { AiFillMessage } from "react-icons/ai";
import { TbCube } from "react-icons/tb";
import { LiaWalletSolid } from "react-icons/lia";
import { PiHeadphones } from "react-icons/pi";

const FAQ = () => {
  return (
    <div className='FAQ container mx-auto mt-[65px] mb-[200px]'>
      <h2 className='text-[18px] text-center'>FAQs</h2>
      <h3 className='text-[30px] text-center'>
        Question? 
        <span className='text-(--main-color)'>Look here</span>
      </h3>

      <div className='flex items-start gap-[50px] flex-wrap'>
        <div className='qew basis-[100%] sm:basis-[65%] '>
          <Qestions />
        </div>

        <div className='bg-[#f3f3f3] px-[30px] py-[15px] rounded-[20px] shadow-[0_0_1px_rgb(81,81,81)] text-center'>
          <AiFillMessage className='mx-auto text-[50px] text-(--main-color) '/>
          <h4 className='text-[25px] text-center'>You have different questions?</h4>
          <p>Our team will answer all your questions.<br/>
          We ensure a quick response.</p>
          <button className='bg-[var(--main-color)] text-white rounded-[30px] px-[20px] py-[10px] mt-[20px] cursor-pointer'>
            Contact Us
          </button>
        </div>

      </div>


      <div className='downQ flex justify-center gap-[30px]'>
        <div>
          <span className='relative'><TbCube className='text-[50px] relative'/></span>
          <div>
            <h4 className='text-[18px] mb-[9px]'>Free Shipping</h4>
            <p>Free sshipping for order above $50</p>
          </div>
        </div>

        <div>
          <span className='relative'><LiaWalletSolid className='text-[50px] relative'/></span>
          <div>
            <h4 className='text-[18px] mb-[9px]'>Flexible Payment</h4>
            <p>Multiple secure payment options</p>
          </div>
        </div>

        <div>
          <span className='relative'><PiHeadphones className='text-[50px] relative'/></span>
          <div>
            <h4 className='text-[18px] mb-[9px]'>24x7 Support</h4>
            <p>We support online all days</p>
          </div>
        </div>
      </div>
      
    </div>

  )
}

export default FAQ
