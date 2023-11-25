import React from 'react';
import { useState } from 'react';
import './Droptext.scss'




const DroptextItem = ({title,text}) => {
    const[active, setActive] = useState(false)
    const toggleText = () =>{
      setActive(!active)
    }

    return (
        <div className='singleContainer'>
           
                    <div className={`titleWrap ${active && "radiusFix"}`}>
                        <h3>{title}</h3>
                        <div className={`iconArrow ${active && "turnArrow"}`} onClick={toggleText}>
                        <i className="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                    <div className={`textContent ${active && "active"}`}>
                        <p>{text}</p>
                    </div>      
        </div>


    );
};

export default DroptextItem ;