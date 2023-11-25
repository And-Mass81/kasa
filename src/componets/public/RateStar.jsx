import React from 'react';
import "./RateStar.scss";

const RateStar = ({rateData}) => {

    const rangeStar = [1, 2, 3, 4, 5] 

    return (
        
        <div >
            {rangeStar.map((singleStar) =>
                rateData >= singleStar ? <span key={singleStar} ><img src="/img/StarRed.png" alt="" className='rateStar'/></span> 
                    
                    : <span key={singleStar} className='grayStar' ><img src="/img/StarGray.png" alt="" className='rateStar'/></span>
            )}
        </div>
    );
};

 export default RateStar;

 