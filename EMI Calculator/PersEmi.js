import React,{useState} from "react";
function PersEmi() {
   const [valueA, setValueA] = useState(0);
   const [valueB, setValueB] = useState(0);
   const [valueC, setValueC] = useState(0);
   const [result, setResult] = useState(0);
   

   const handleSubmit = () => {
       
       const Num1 = valueA
       const Num2 = valueB / 12
       const Num3 = valueC * 12

       setResult((Num1 * (Num2/100) * Math.pow((1+Num2/100), Num3))/(Math.pow((1+Num2/100), Num3)-1))
   }

   return(
       <div class='Pemi'>
           <center>
               <h2>Personal Loan Calculator</h2>
               <img src='https://s.yimg.com/uu/api/res/1.2/Pm1qyshppGQjlgUI9czWxA--~B/aD0xNDE0O3c9MjEyMTtzbT0xO2FwcGlkPXl0YWNoeW9u/http://media.zenfs.com/en-US/homerun/motleyfool.com/bd55243d7cf27562b18072d61e168822'width='1000'height='400'></img>
               <h3>Your Loan Amount (USD) : <input type= 'text' value = {valueA} onChange = {(e)=>setValueA(e.target.value)}></input> </h3>
               <h3> Loan Interest Rate : <input type= 'text' value = {valueB} onChange = {(e)=>setValueB(e.target.value)}></input> </h3>
               <h3> Loan  Duration (Months): <input type= 'text' value = {valueC} onChange = {(e)=>setValueC(e.target.value)}></input> </h3>
               <button type="button" color='green'onClick={handleSubmit} class="btn btn-success">Submit</button>
              
               <br></br>
               <h2>Your EMI is : {result}</h2>
           </center>
       </div>
   );
}
export default PersEmi;