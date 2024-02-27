import './App.css';
import React,{ useEffect, useState } from "react";
import axios from "axios";

function Res() {

  const [users, setUsers] = useState([]);
useEffect(() =>{ loadData(); },[]);

const loadData = async () => {
  const response = await axios.get('http://localhost:3000/users');
  console.log(response.data);
  setUsers(response.data)
}
  return (
    <p >
      <div className='background'>
      
    <div className="App" >
      <h2 className="title">ZOMATO CLONE</h2>
      <br></br>
      <center>
        <table class = "btn-success">
  <tr>
    <th style={{width:'20%'}}>NO.</th>
    <th style={{width:'20%'}}>DISHES</th>
    <th style={{width:'20%'}}>HOTEL NAME</th>
    
    </tr></table></center>
        {users.map(e =>(
          <div key={e.id} className='box'>
            <div className='box-1'>
                <center>
              <table style={{border: '1px solid black', width:'80%'}}>
      <tr>
      <td style={{width:'20%', height:'20%'}}>{e.id} </td>
      <td style={{width:'20%', height:'20%'}}>{e.res}</td>
      <td style={{width:'20%', height:'20%'}}>{e.name}</td>

    </tr>
</table> 

</center>
</div> </div>
    ))}
    </div>
    <br></br>
    
    <center>
    <button className="add">Add</button>  <button className="dlt">Delete</button>
    </center>
    <h1>Start Ordering!!!!! </h1>
    <br></br>
    <center className="image">
    <img src="https://www.elluminatiinc.com/wp-content/uploads/2020/05/zomato/zomato8.png"></img>
    </center>
   
    </div>
    </p>
    
    
  );
}

export default Res;