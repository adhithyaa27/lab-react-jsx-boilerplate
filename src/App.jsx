import './App.css';
import elephant from "./images/elephant.jpeg";
import React from 'react';

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  const images = imageData()
  return(
    <div id='parent'>
      {
        images.map((imgData)=>(
          <img src={imgData.img} id={imgData.id}/>
        ))
      }
    </div>
  )
}

export default App;
