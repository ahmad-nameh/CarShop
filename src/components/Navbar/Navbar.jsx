import React from 'react'
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPerson } from "react-icons/io5";


export default function Navbar() {
  return (
    <nav className='bg-(--main-color) text-[white]'>
      <div className='container mx-auto flex justify-between items-center py-2'>
        <p className='flex items-center gap-2'>
          <IoPerson/>Hi Ahmad
        </p>
        <div className='flex gap-8'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Faq">FAQ</NavLink>
        </div>
        <GiHamburgerMenu/>
      </div>
    </nav>
  )
}
