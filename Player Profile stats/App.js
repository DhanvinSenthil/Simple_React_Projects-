
import './index.css';
import './App.css';
import React,{useState} from "react";
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
export default class Play extends React.Component{
    constructor(){
        super();
        this.state={
            name:'', age:'', image:'', role:'', num:''
        }
    }
    callbackFunction = (childdata) =>{ this.setState({num:childdata});
    }
    render() {
        var path=process.env.PUBLIC_URL;
        return(
            <center>
            <div className='row'>
            <div className='column'>
                <h1> Cricket Players </h1>
                <button type="button" class="btn btn-success" onClick={event=>this.ChangeState(event,'Chris Gayle','42','https://www.theindianwire.com/wp-content/uploads/2017/07/Gayle-990x556.jpg','Left-handed Batsman')}>Chris gayle
                </button>  <button type="button" class="btn btn-success" onClick={event=>this.ChangeState(event,'Virat','33','https://images.thequint.com/thequint/2019-03/53b80dee-e7da-44c9-b92f-75521e611ef4/AP18297414951439.jpg?auto=format%2Ccompress&fmt=webp','Right-handed Batsman')}>Virat Kohli
                </button>  <button type="button" class="btn btn-success" onClick={event=>this.ChangeState(event,'Ajinkiya rahane','34','https://img.etimg.com/thumb/width-1200,height-900,imgsize-230201,resizemode-1,msid-48645615/news/sports/ajinkya-rahane-the-strong-and-no-fuss-indian-cricketer.jpg','Right-handed Batsmen')}>Ajinkiya rahane
                </button>  <button type="button" class="btn btn-success" onClick={event=>this.ChangeState(event,'Rohit Sharma','36','https://im.indiatimes.in/facebook/2019/Oct/rohit_sharma_1572353374.jpg','Right-handed batsmen')}>Rohit sharma
                </button>  <button type="button" class="btn btn-success" onClick={event=>this.ChangeState(event,'Shikhar dhawan','24','https://proteammaker.com/wp-content/uploads/2020/03/Shikar-Dhawan-scaled.jpg','Left-handed Batsman')}>Shikhar dhawan
                </button>  <button type="button" class="btn btn-success" onClick={event=>this.ChangeState(event,'Dinesh karthik','37','https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/07/02/Pictures/icc-cricket-world-cup-india-nets_8510f472-9cad-11e9-abeb-d862b82ea15f.jpg','Wicket-keeper Batsman')}>Dinesh Karthik
                </button>  <button type="button" class="btn btn-success" onClick={event=>this.ChangeState(event,'KL Rahul','30','https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/05/29/829564-kl-rahul.jpg','Right-handed Batsman')}>KL Rahul</button><br></br><br></br>
                
            </div>
            <div className='column'>
                <img style={{width: '400px',height:'250px'}} src={path+this.state.image} alt="Select a Player"/>
                <Display name={this.state.name} age={this.state.age} role={this.state.role} num={this.state.num}></Display>
                <Dis parentCallback={this.callbackFunction}></Dis>
                <button>Add player</button>
            </div>
            </div>
            </center>
        )
    }
    

    ChangeState=(event,param1,param2,param3,param4)=>
    {
        this.setState({name:param1,age:param2,role:param4})
        this.setState({image:param3})
        
    }
 }
 
    function Display(props){
        return(
            <div >
               <h2>Name:{props.name}</h2>
               <h3>Age:{props.age}</h3>
               <h3>He is a {props.role}</h3>
               <h3>{props.num}</h3>
               
            </div>
        )
    }
    
    class Dis extends React.Component{
        sentData = () =>{
            this.props.parentCallback('No1');
        }
        render(){
            return(
                <div>
                   
                </div>
            )
    }
    
}
