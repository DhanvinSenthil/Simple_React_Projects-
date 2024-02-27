import'./App.css';
import React,{useState} from "react";
function CarEmi() {
   const [valueA, setValueA] = useState(0);
   const [valueB, setValueB] = useState(0);
   const [valueC, setValueC] = useState(0);
   const [result, setResult] = useState(0);
   

   const handleSubmit = () => {
       
       const Num1 = valueA
       const Num2 = valueB / 12
       const Num3 = valueC * 12

       setResult((Num1 * (Num2/100) * Math.pow((1+Num2/100), Num1))/(Math.pow((1+Num2/100), Num3)-1))
   }

   return(
       <div class='Cemi'>
           <center>
               <h2>Car Loan Calculator</h2>
               <img src="https://www.insurancejournal.com/app/uploads/2019/02/rising-auto-loan-delinquencies-economists.jpg"width='1000'height='400'></img>
               <h3>Your Loan Amount (USD) : <input type= 'text' value = {valueA} onChange = {(e)=>setValueA(e.target.value)}></input> </h3>
               <h3> Loan Interest Rate : <input type= 'text' value = {valueB} onChange = {(e)=>setValueB(e.target.value)}></input> </h3>
               <h3> Loan  Duration (Months): <input type= 'text' value = {valueC} onChange = {(e)=>setValueC(e.target.value)}></input> </h3>
               <button type="button"onClick={handleSubmit} class="btn btn-success">Submit</button>
              
               <br></br>
               <h2>Your EMI is : {result}</h2>
           </center>
       </div>
   );
}
export default CarEmi;