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
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
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
      <div className="parent mt-10 relative">
        <Carousel className="pt-10 z-50"
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          infinite={true}
          partialVisible={true}
          dotListClass="custom-dot-list-style"
        >
          {sliderImageUrl.map((imageUrl, index) => {
            return (
            <>
              <div className="slide-pj slider p-4 mb-10 mx-5 w-[420px]" key={index}>
                <img src={imageUrl.url} alt="movie" className=""/>
              </div>
              </>
            );
          })}
        </Carousel>
        <Brillo
                key={"b1"}
                width={850}
                height={200}
                left={250}
                top={150}
                blur={200}
         ></Brillo>
      </div>
    );
  };
  