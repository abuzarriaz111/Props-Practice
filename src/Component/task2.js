import React ,{ useState }from "react";


export const Task2 = () => {
    const[list1,setList1]=useState(['1,2,3'])
    const[list2,setList2]=useState(['a,b,c'])
    const[list3,setlist3]=useState([])

   
   const handlelist = () => {

     let array=[]
     for (let i = 0; i < list1.length; i++) {
       array.push(list1)
      for (let i = 0; i < list2.length; i++) {
         array.push(list2)
      }
      setlist3(array)
     }
   }
   return ( 
    <>       
    <p>[1,2,3]</p>
    <p>[a,b,c]</p>
     <button onClick={handlelist}>Concate</button>
     {[list3]}
     
     </>

    
  );
}
 
