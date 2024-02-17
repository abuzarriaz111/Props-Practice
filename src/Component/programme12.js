import react,{useState} from "react";
 export const Task12 = () => {
    const[email,setEmail]=useState('')
    const [error,setError]=useState('')


    const handle = (e) => {
        setEmail(e.target.value);
        setError('')

    }
        const handling  = (e) => {
            e.preventDefault();

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                setError("please enter a valid email")
                return;
            }
            else{
                alert("form submitted")
            }
            
         }



    return (  
        <>
        <form onSubmit={handling}>
        <input placeholder="@email" type="email" onChange={handle} value={email} Name='email' ></input>
        <button type="submit">submit</button>
        <p> {error}</p>
        </form>
        </>
        
    );
    
    }
 