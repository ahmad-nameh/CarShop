import React from 'react'
import Slider from "react-slick";
import CarCard from '../card/CarCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarsTypeSlider = (props) => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background:"var(--main-color)"}}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "var(--main-color)" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };


  return (
    <>
      <h2 className='text-xl text-gray-700 mt-7'>{props.title} :</h2>
      <div className='container mx-auto my-7 slider-container'>
        <Slider {...settings}>
          {props.data.map((item,index) => {
            return(
              <CarCard data={item} key={index}/>
            )
          })}
        </Slider >
      </div>
    </>
  )
}

export default CarsTypeSlider
