import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import Home from './Home'
import HomeEmi from './HomeEmi'
import CarEmi from './CarEmi'
import PersEmi from './PersEmi'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import { useHistory } from "react-router-dom";


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>

function Error(){
  return (
       <div className='Home'>
          <center>
            <h2>Page not found</h2>
          <img src='https://en.ryte.com/magazine/wp-content/uploads/2017/10/1500x800-404EInstellungen-1.png'width={1000}height={700}></img>

          </center>
          
       </div>
       
    )
}
      class App extends React.Component{
        render(){
        return(
      <div>
        <center>
        <h1>Welcome to EMI Calculator</h1>
        </center>
        <Router>
        
            <div className='menu'>
            <a href ="/" ><button type="button" class="btn btn-dark">Home</button></a>
            <a href="/HomeEmi" ><button type="button" class="btn btn-dark">Home Loan</button></a>
            <a href="/CarEmi" ><button type="button" class="btn btn-dark">Car Loan</button></a>
            <a href ="/PersEmi" ><button type="button" class="btn btn-dark">Personal Loan</button></a>
            
            </div>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/HomeEmi" component={HomeEmi}/>
                <Route path="/CarEmi" component={CarEmi}/>
                <Route path="/PersEmi" component={PersEmi}/>
                <Route exact path="*"component={Error}/>
            </Switch>
            
        </Router>
      </div>
        )
          
         
      }
    }

export default App;