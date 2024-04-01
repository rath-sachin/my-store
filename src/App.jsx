import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
  const [value, setValue] = useState("#FFFFFF");
  const body = useRef();

  useEffect(() => {
    body.current = document.body;
  }, [])

  useEffect(() => {
    body.current.style = `background-color: ${value};`
  }, [value])
    
  return <>

    <input type='text' value={value} onChange={e => setValue(e.target.value)}/>
    <input type='color' value={value} onChange={e => setValue(e.target.value)}/>
  </>
    
}

export default App;
