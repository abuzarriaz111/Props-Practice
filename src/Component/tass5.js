import React,{useState} from "react";


 export const Task5 = () => {
    const[list,setList]=useState([3,4,7,2,1])
    const[result,setResult]=useState([])
    const handle = () => {
        let value=[]
        for (let i = 0; i < list.length; i++) {
            for (let j = i+1; j < list.length; j++) {
                if(list[i]>list[j]){                  
                      let temp=list[i]
                    list[i]=list[j]
                    list[j]=temp
                }
                
               
            }
            
        }
        setResult(list)
    }
     
    
    return (
        <>

        {list}
        <button onClick={handle}>click</button>
        {result}
        </>
      );
}
 
