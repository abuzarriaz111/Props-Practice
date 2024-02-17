import React,{useState} from "react";

 export const Task11 = () => {
    const [data,setData]=useState({name:''})

    const handle = (e) => {
        const value=e.target.value;
        const Name=e.target.name;
        setData({...data,[Name]:value})
       
     }
     const handling  = (e) => {
        e.preventDefault();
        if (data.name.length===0) {
            alert("please enter name")
            return;
        }
        else{
            alert("form submitted")
        }
        
     }
      
    
    return ( 
        <>
        <form onSubmit={handling}>
        <input type="name" onChange={handle} value={data.name} Name='name' placeholder="firstname"></input>
        <button type="submit" >submit</button>

        </form>
       
        </>
     );
}
 
