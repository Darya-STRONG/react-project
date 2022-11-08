import React, { useState } from 'react';
import Star from './Star';


function StarRating ({totalStars}) {
  const [starsSelected, setstarsSelected] = useState(0);

  return (

    <div className="star-rating">    


                {[...Array(totalStars)].map((n, i) => 
                <Star 
                key={i.toString()}
                selected={i<starsSelected}
                onClick={() => setstarsSelected(i+1)}
                // onMouseEnter={() => setstarsSelected(i+1)}
                // onMouseLeave={() => setstarsSelected(0)}

                //Помоги пожалуйста розобраться с событиями!)

                />
                )}
    </div>
  )
}
export default StarRating