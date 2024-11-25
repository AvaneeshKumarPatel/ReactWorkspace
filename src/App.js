import  data from './componets/data'
import { useState } from 'react';
import Product from './componets/Product'


function App( ) {

  const [tours, setTours] = useState(data);

  return(
      <div>
      <Product tours={tours}></Product>
      
      </div>
  );


   
}

export default App;
