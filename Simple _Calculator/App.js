import React from 'react';
import './index.css';
import './App.css';
export default class Calcii extends React.Component
{
    constructor(){
        super();
        this.state={
           input:" ",
           out:' ',
           ans:' ',
           exp:' '
        }
    }
    render()
    {
        return(
            <div className='container'>
              <center>
                <h1>Calculator</h1>
                <this.Output /><br/>
                <this.Output1/>
                <table className='table'>
                    <tr>
                        <td>
                           <button type="button" class="btn btn-info" value='1' onClick={this.Clicking}> 1</button>
                        </td>
                        <td>
                           <button type="button" class="btn btn-info" value='2' onClick={this.Clicking}> 2</button>
                        </td>
                        <td>
                           <button type="button" class="btn btn-info" value='3' onClick={this.Clicking}>3</button>
                        </td>
                        <td>
                           <button type="button" class="btn btn-info" value='+' onClick={this.Clicking}> +</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="button" class="btn btn-info" value='4' onClick={this.Clicking}>4</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-info" value='5' onClick={this.Clicking}>5</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-info" value='6' onClick={this.Clicking}>6</button>
                        </td>
                        <td>
                           <button type="button" class="btn btn-info" value='-' onClick={this.Clicking}> -</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="button" class="btn btn-info" value='7' onClick={this.Clicking}>7</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-info" value='8' onClick={this.Clicking}>8</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-info" value='9' onClick={this.Clicking}>9</button>
                        </td>
                        <td>
                           <button type="button" class="btn btn-info" value='*' onClick={this.Clicking}> *</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="button" class="btn btn-info" value='0' onClick={this.Clicking}>0</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-info" value='/' onClick={this.Clicking}>/</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-info" value='C' onClick={this.Clicking}>C</button>
                        </td>
                        <td>
                           <button type="button" class="btn btn-info" value='=' onClick={this.Clicking}> =</button>
                        </td>
                    </tr>
                </table>
                </center>
            </div>
        );
    }
    Output=()=>{
        return(
        <input type="text" readOnly value={this.state.input} />
        );
    }
    Output1=()=>{
        return(
            <input type="text" readOnly value={this.state.out} />
            );
    }
    Clicking=e=>{
        let val=e.target.value;
        if(val==='C')
        {
            this.setState({out:' ',input:' '})
        }
        else if(val==='='){
            this.setState({out:eval(this.state.input)})

         }
        else
        {
            this.setState({input:this.state.input+=val})
        }
    
    }
}
