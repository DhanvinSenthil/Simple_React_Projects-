import'./App.css';
import React,{useState,useEffect} from 'react';

function Photo() {
    return(
      <div className="Photo">
        <center>
          <h3>Photos</h3>
          <div>
          <Slideshow imgs = {[
            'https://d2gjl3w70qc898.cloudfront.net/content/uploads/2020/10/06180832/Cricket365-Chris-Gayle.jpg',
            'https://imagevars.gulfnews.com/2019/03/05/Indian_captain_Virat_Kohli_celebrates_after_scoring_a_century_resources1_16a30b2e977_original-ratio.jpg',
            'https://resources.pulse.icc-cricket.com/ICC/photo/2019/07/26/c8d64145-435a-4f09-bc2f-e58fe625107b/Gayle.jpg',
            'https://resources.pulse.icc-cricket.com/ICC/photo/2020/02/21/d2401ab2-079d-4683-bb3a-89b7adcfe3b1/Mandhana.jpg',
            'https://www.dynamitenews.com/images/2019/11/08/shikhar-dhawan-thanks-fans-for-support-after-eight-wicket-win-over-bangladesh-1/5dc4f861012a9.jpeg',
            'https://th.bing.com/th/id/OIP.S-3XGY-ZmCxvBej8rG4NcgHaE3?w=258&h=180&c=7&r=0&o=5&dpr=2&pid=1.'
            
  
            ]}><br></br> </Slideshow></div>
        </center>
        <br></br>
      </div>
    );
  }
  
  const Slideshow =({ imgs }) => {
    var [index, setIndex] = useState(0)
    useEffect(()=>{setIndex(0)},[])
  
  const next = () => {
    if (index === imgs.length - 1){
      setIndex(0)
    }
    else{
      setIndex(index + 1)
    }
  }
  const prev = () => {
    if (index === imgs.length - 1){
      setIndex(0)
  }
    else{
      setIndex(index - 1)
    }
  }
  const change = ()=>{
    setIndex(index)
    index++;
  }
   const running=()=>{
    setInterval(change,1000)
   }
  
  
  return <div className='slideshow'>
    <img className='mainImg' style={{width: '500',height:'300px'}} src={imgs[index]}></img>
    <div className='actions'>
    <br></br>
    <button style={{width: '150px',height:'30px',backgroundColor:'blue',color:'white'}} onClick = {prev}>Previous</button>
    <button style={{width: '150px',height:'30px',backgroundColor:'blue',color:'white'}} onClick = {next}>next</button>
    <br></br>
    <button style={{width: '150px',height:'40px',backgroundColor:'aquamarine'}} onClick = {running}>slideshow</button>
    
    </div>
  </div>
  
  }

export default Photo;