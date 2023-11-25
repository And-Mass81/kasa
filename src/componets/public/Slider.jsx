import React, { useState } from 'react';
import "./slider.scss"





 const Slider = ({ slideData }) => {

    const [slide, setSlide] = useState(0);
    const picsArray = slideData.length

    const nextSlide = () => {
      setSlide( slide === picsArray - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? picsArray - 1 : slide - 1);
    }

    return (

        <div className='slider'>
            <i className="fa-solid fa-chevron-left fa-2x" onClick={prevSlide}></i>
            <i className="fa-solid fa-chevron-right fa-2x" onClick={nextSlide}></i>
            {slideData.map((item, idx) => {
                return (

                    <img src={item} key={idx} alt='logement' className={slide === idx ? "slide" : "slide slide-hidden"} />
 
                )
            })}
            
            {slideData.map((item, idx) => {
                return (
                  <span className='indicatorIndex'key={idx} >{slide +1} / {slideData.length}</span>
 
                )
            })}
            
        </div>
    );
};

export default Slider;



