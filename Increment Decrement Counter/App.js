import"./App.css"
import React,{useState,useEffect} from 'react';

function Inc() {
    const[count, useCounter] = useState(0)
  
  const Increment = () =>{
    useCounter(count + 1)
  }
  const Decrement = () =>{
    useCounter(count - 1)
  }
  
    return(
      <div class='increment'>
        <center>
          <h1>Increment & Decrement Count</h1> <br></br>
        <h3>Cricket Score</h3>
        <h3>Your Score is : {count} </h3>
        <button class='inc'style={{width: '150px',height:'25px'}} onClick={()=>Increment()}>Increment</button>    <button class='dec'style={{width: '150px',height:'25px'}} onClick={()=>Decrement()}>Decrement</button>
        <br></br>
        
        </center>
      </div>
    );
  }

  export default Inc;
  