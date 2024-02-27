import React, { Component } from 'react';
import './App.css';
class Player1 extends Component {
    constructor(){
      super(); 
      this.state = {
        Runs: 12311,
        NoOfMatches: 260,
        Innings: 251,
        Average: 58.07,
      }      
    }
    IncrementItemByKey = (key) => {
      const lastValue = this.state[ key ];
      this.setState({ [ key ]: lastValue + 1 });
    }
    DecreaseItemByKey = (key) => {
      const lastValue = this.state[ key ];
      this.setState({ [ key ]: lastValue - 1 });
    }
    render() {
        return( 
            <div class="row" style={{fontFamily: 'serif'}} >
              <div class="col-md-12"></div>
              <div class = "col-md-3"></div>
              <div class="col-md-6">
              <center>
                <br></br>
                <br></br>
               <h2 style={{backgroundColor : 'sky blue', margin: 'auto',textDecoration: 'underline'}}> Player Profile</h2>
               <img class='img' src='https://imagevars.gulfnews.com/2019/12/19/Virat-Kohli-_16f1d3e177a_large.jpg'></img>

              <h3>Name : Virat kohli</h3> 
              <h3>Runs :  {this.state.Runs}</h3>
              <h3>Matches : {this.state.NoOfMatches}</h3>
              <h3>Change Runs :  <button style={{width: '80px',height:'25px' ,backgroundColor:'green'}} onClick={ () => {this.IncrementItemByKey('Runs');
              this.IncrementItemByKey('Average')}}>+</button>  <button style={{width: '80px',height:'25px',backgroundColor:'red'}} onClick={ () => {this.DecreaseItemByKey('Runs');this.DecreaseItemByKey('Average')} }>-</button></h3>
              <h3>Change Matches : <button style={{width: '80px',height:'25px',backgroundColor:'green'}} onClick={ () => {this.IncrementItemByKey('NoOfMatches');this.IncrementItemByKey('Innings')}}>+</button>  <button style={{width: '80px',height:'25px',backgroundColor:'red'}} onClick={ () => {this.DecreaseItemByKey('NoOfMatches');this.DecreaseItemByKey('Innings') }}>-</button></h3>
              <h3 style={{backgroundColor : 'skyblue', margin: 'auto'}}>Innings : {this.state.Innings}</h3>
              <br></br>
              <h3 style={{backgroundColor : 'orange', margin: 'auto'}}>Average : {this.state.Average}</h3>
</center></div></div>
        );     
    }
}
export default Player1;