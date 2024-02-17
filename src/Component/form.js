import { useState } from "react";


const Form = () => {
    const[name,setname]=useState({

        firstname:'',
        lastname:'',
        phonenumber:'',
        email:'',  
    })
     const handling = (e) => {
        const value=e.target.value;
        const Name=e.target.name;
        setname({...name,[Name]:value})
       
     }
     const handle = (e) => {
        e.preventDefault();

        if (name.firstname.length<=5) {
            alert("enter maximum digit")
        }
        if (name.lastname.length<=3) {
            alert("enter maximum digit")
        } if (name.phonenumber.length<=10) {
            alert("enter maximum digit")
        }
        else{
            alert("form submitted")
        }
     }
    
      
    return (  
        <>
            <form onSubmit={handle}>
                <input type="text" value={name.firstname} onChange={handling} placeholder="firstName" name="firstname" required></input>
                <input type="text" value={name.lastname}  onChange={handling}  placeholder="lastName" name="lastname" required></input>
                <input type="number" value={name.phonenumber}  onChange={handling} placeholder="PhoneNumber" name="phonenumber" required></input>
                <input type="text" value={name.email}  onChange={handling} placeholder="email" name="email" required></input>
                <button type="text-bg-dark" >submit</button>
            </form>
        </>
    
   
    );
}
 
export default Form;