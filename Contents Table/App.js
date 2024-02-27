import React from 'react';
import './App.css';
import data from "./data.json";

function App() {
  return(
    <div class ="app">
      <div class ="posts">
        { Data.map(data =>(
          return(
            <table key={post.id} class = "posts">
              <th>{post.productname}</th>
              <th>{post.quantity}</th>
              <th>{post.price}</th>
            </table>
          )
          
        })}
      </div>
    </div>
  );
}
export default App;
