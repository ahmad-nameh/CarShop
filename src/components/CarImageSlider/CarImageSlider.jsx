import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarImageSlider = (props) => {

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
    customPaging: function(i) {
      return (
        <a className='w-[50px] block'>
          <img src={props.data[i]} className='w-full' />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow />,

  };

  return (
    <div className='slider-container'>
      <Slider {...settings}>
        {props.data.map((item,index) => {
          return(
            <div key={index}>
              <img src={item} alt='car image' className='rounded-[10px]'/>
            </div>
          )
        })}
        
      </Slider>
    </div>
  )
}

export default CarImageSlider
