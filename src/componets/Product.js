import React from "react";
import Card from './Card'



function mainPage ({tours }) {

    console.log(tours);

   return(
    <div>
       <h1>Mini Shopping Window </h1>   
       <p> CSS is pending for styling of this mini project</p> 

       {
                    tours.map( (tour) => {
                        return <Card key={tour.id} {...tour} ></Card>
                    } )
                }
  
      </div>

   );
    
}

export default mainPage;
