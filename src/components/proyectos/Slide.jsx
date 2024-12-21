import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slide.css";
import pj1 from '../../assets/pj1.svg';
import { Brillo } from "../decoration/Brillo";


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 250 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const sliderImageUrl = [
    //First image url
    {
      url:pj1
    },
    {
        url:pj1 
    },
    {
        url:pj1
       }
  ];
  export function Slider(){
    return (
      <div className="parent mt-10 sm:px-5 relative w-full mx-auto">
        <Carousel className="z-50"
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          infinite={true}
          partialVisible={false}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style "
          itemClass="sm:px-5 sm:py-7" 
        >
          {sliderImageUrl.map((imageUrl, index) => {
            return (
            <>
              <div className="slide-pj slider p-2 sm:p-4 w-[100%] sm:w-full" key={index}>
                <img src={imageUrl.url} alt="movie" 
                className="w-full object-cover rounded-2xl sm:rounded-md"/>
              </div>
              </>
            );
          })}
        </Carousel>
      </div>
    );
  };
  