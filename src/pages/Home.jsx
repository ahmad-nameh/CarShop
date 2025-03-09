import React from 'react'
import Landing from '../components/landing/Landing'
import CarsTypeSlider from '../components/CarsTypeSlider/CarsTypeSlider';
import Advertisement from '../components/Advertisement/Advertisement';
import data from "../db/cars";


const Home = () => {

  return (
    <div className='container mx-auto'>
      <Landing />
      <CarsTypeSlider title="Luxury Cars" data={data.luxury} />
      <CarsTypeSlider title="Sport Cars" data={data.sport} />
      <Advertisement />
      <CarsTypeSlider title="Family Cars" data={data.family} />
      <CarsTypeSlider title="Economy Cars" data={data.economy} />
    </div>
  )
}

export default Home
