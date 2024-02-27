import './App.css';
import { ReactDOM } from 'react';
import React, { useEffect, useState } from "react";
import Axios from "axios";

function Book() {

  const [users, setUsers] = useState([]);
  const [id,setId] = useState("");
  const [name,setName] = useState("");
  const [year,setYear] = useState("");
  const [updated,setUpdated] = useState({id:"",name:"",year:""})

useEffect(() =>{ loadData(); },[]);

const loadData = async () => {
  const response = await Axios.get('http://localhost:3000/users');
  console.log(response.data);
  setUsers(response.data)
}

const AddUser = (e) =>{

  e.preventDefault();

  Axios.post('http://localhost:3001/users',{
    id, name, year
  }).then(() =>{
      setId("");setName("");setYear("");
  }).catch((err)=>{
    console.log(err);
  })
  setTimeout(() =>{ loadData(); },500)
}

const deleteUser =(id) =>{
  Axios.delete(`http://localhost:3001/users/${id}`);
  setTimeout(() =>{ loadData(); },500)
}

const updateUser =(id) =>{
  Axios.put(`http://localhost:3001/users/${updated.id}`,{
    id:updated.id,name:updated.name,year:updated.year
  }).then((response)=>{
    console.log(response);
  }).catch((e) =>{console.log(e)})
  alert("Successfully Updated... then click save button to exit update option..")

  setTimeout(() =>{ loadData(); },500)
}

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <div className="App">      
      <h2 style={{ backgroundColor:'#554593'}}>Book Details </h2>
       <h4> <input type = "text" placeholder='Book Name' value={id} onChange = {e => setId(e.target.value)}/></h4>
        <h4> <input type = "text" placeholder='Book Auther' value={name} onChange = {e => setName(e.target.value)}/></h4>
        <h4> <input type = "text" placeholder='Book Year' value={year} onChange = {e => setYear(e.target.value)}/></h4>
        <button style={{width: '170px',height:'25px', backgroundColor:'green'}} onClick={AddUser}>Submit</button>
        <br></br>
        <br></br>
        <table style={{border: '2px solid black', width:'100%', backgroundColor:'#554593'}}>
  <tr>
    <th style={{width:'25%'}}>Name</th>
    <th style={{width:'25%'}}>Author</th>
    <th style={{width:'25%'}}>Year</th>
    <th style={{width:'25%'}}>Option</th>
    </tr></table>
        {users.map(e =>(
      <div key={e.id} className='box'>
      <div className='box-1'>
      <table style={{border: '1px solid black', width:'100%'}}>
      <tr>
      <td style={{width:'25%'}}>{e.id} </td>
      <td style={{width:'25%'}}>{e.name}</td>
      <td style={{width:'25%'}}>{e.year}</td>
      
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Update & Save</h2>
          <h3>  <input type="text" placeholder = "Name" onChange={e => setUpdated({...updated,id:e.target.value})} />
          </h3><h3>     <input type="text" placeholder = "Auther" onChange={e => setUpdated({...updated,name:e.target.value})} />
          </h3> <h3>  <input type="text" placeholder = "Year" onChange={e => setUpdated({...updated,year:e.target.value})} />
         </h3>   <button style={{width: '80px',height:'25px', backgroundColor:'#9d4502'}} onClick={updateUser}>Update</button>  <button style={{width: '80px',height:'25px', backgroundColor:'green'}} onClick={toggleModal}>
              Save </button>
          </div>
        </div>
      )}
      <td style={{width:'25%'}}>
      <button style={{width: '80px',height:'25px', backgroundColor:'#554593'}} onClick={toggleModal}>  Edit </button>  <button style={{width: '80px',height:'25px', backgroundColor:'red'}} onClick = {() => {deleteUser(e.id)} }>Delete
      </button> 
      </td>
    </tr>
</table> 
</div> </div>
    ))}
    </div>
  );
}

export default Book;