import { Header  } from './Component/Cars';
import { Paragraph } from './Component/Cars';
import { Headerfooter } from './Component/header_footer';
import Man from "../src/comment";
import Same from './Component/New';
import car1 from  './carsimg/car1.jpeg';
import car2 from './carsimg/car2.jpeg';
import car3 from './carsimg/car3.jpeg';
import car4 from './carsimg/car4.jpeg';
import comment from './carsimg/comment.jpeg';
import belmont from './carsimg/belmont.jpeg';
import nepal from './carsimg/nepal.jpeg';
import chistmas from './carsimg/chistmas.jpeg';
import Form from './Component/form';
//  import { Location } from 'react-router-dom';
import Test from './Component/Test';
import { Task1 } from './Component/task1';
import {Task2}  from './Component/task2';
import {Task5}  from './Component/tass5';
import {Task11}   from './Component/programme11';
import {Task12}   from './Component/programme12';


// import car2 from  '../src/car2';

// import {State}  from'./state.js';


const App = () => {
  const car=[
    {
      imgsrc:car1,
      name:'BMW',
      model:'its the latest model',
    },
    {
      imgsrc:car2,
      name:'MERCEDES',
      model:'its the old model',
    },
    {
      imgsrc:car3,
      name:'BUGATTI',
      model:'its the old model',
    },
    {
      imgsrc:car4,
      name:'Gwagon',
      model:'its the old model',
    }
  ]
  const coment={
    imgsrc:comment,
    name:"Jason Kincaid",
    comnt:"I have something insightful to say ,as usual"

  }

  const vivo=[
    {
      imgsrc:belmont,
      name:"Belmont short area",
      infrom:"the palm trees are casting their shadows on a cadillac"
    },
    {
      imgsrc:nepal,
      name:"Belmont short area",
      infrom:"the palm trees are casting their shadows on a cadillac"
    },
    {
      imgsrc:chistmas,
      name:"Belmont short area",
      infrom:"the palm trees are casting their shadows on a cadillac"
    }

  ]
    
  
  return ( 
    <div className='container'>
     
      <Header/>
      <Paragraph/>
      <Headerfooter/>
      <Man data={coment}/>
       {/* <Location data={vivo}/> */}
      <Same data={car}/>
      {/* <Test/> */}
{/*      
      <Task1/>
      <Task2/>
      <hr></hr>
      <Task5/>
      <br></br>
      <Task11/>
      <Task12/>
      <Form/> */}
      
     {/* <BoxList/> */}

     {/* <State/> */}
   
    </div>
   

   
   );
}
 
export default App;




