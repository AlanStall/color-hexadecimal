import React, { useState } from 'react'
import './app.css'

function App() {
  const [color, setColor] = useState("");

  function changeColor(){
    var hexColorText = "#"+color;
    var hexColorArea = "#"+color;
    var thisColorText = document.querySelector("h1");
    var thisColorArea = document.querySelector("textarea")
    thisColorText.style.color = hexColorText;
    thisColorArea.style.backgroundColor = hexColorArea;
  }

  return (
    <>
      <h4 id="title">Chose a color in hexadecimal</h4>
      <br></br>      
      <input         
        className="color-hexadecimal"
        onChange={(e) => setColor(e.target.value)}
        onSelect={changeColor}
      >        
      </input>
      <h1 
        className="this-color"        
        >
        This color!!!
      </h1>
      <textarea className='area-color'></textarea>
    </>
  )
}

export default App
