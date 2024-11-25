import React from "react";
import css from './Card.css'



function card ({title,thumbnail,price,quantity, discountedTotal,}){
  

return(

<div className="card">

<img src={thumbnail} className="image"></img>

        <h4 className="tour-price"> {title}</h4>
        <h4 className="tour-name">₹{price}</h4>
        <p>{quantity}</p>
        <p>{discountedTotal}</p>

    </div>
  );

};


export default card;