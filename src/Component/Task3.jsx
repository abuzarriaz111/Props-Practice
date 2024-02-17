import { useState } from "react";

 import React from 'react'
 
 const Task3 = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 8]);
  
    const reverse = (array) => {
      const reversedArray = [];
      for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
      }
    
    //   setData(reversedArray);

      console.log(reversedArray,"result");
    }
   return (
    <div>
    {/* <p>Original Array: {data.join()}</p> */}
    <p>Reversed Array: {reverse(data)}</p>
  </div>
   )
 }
 
 export default Task3