import React,{useState} from 'react'

export const Task1 = () => {
    const[str1,setStr1]=useState("civic")
    const[str2,setStr2]=useState("")
const Palindrome=()=>{
    let str3=("");
    for (let i =str1.length-1; i>=0 ; i--) {
        str3+=str1[i];
        if (str3===str1) {
            setStr2("this a palindrome")
            
        }
        else{
            setStr2("this is not a pallindrome")
        }
        
    }
}
const handleChange=(e)=>{
    setStr1(e.target.value)
}

  return (
    <div>
    <h1>{str2}</h1>
    <button onClick={Palindrome}>Palindrome</button>
    <input onChange={handleChange} type='text'/>
    </div>
  )
}






