import React, { useState } from 'react'
import './app.css'

function App() {
  const [color, setColor] = useState("");

  return (
    <>
      <h4 id="title">Chose a color in hexadecimal</h4>
      <br></br>      
      <input                 
        onChange={(e) => setColor(e.target.value)}
      >        
      </input>
      <h1 style={{color: `#${color}`}}>This color!!!</h1>      
      <textarea style={{backgroundColor: `#${color}`}}></textarea>
    </>
  )
}

export default App
