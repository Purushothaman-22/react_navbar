
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
function App() {
  const current=localStorage.getItem("current")
  const[theme,setTheme]=useState(current?current:"light")
  useEffect(()=>{
localStorage.setItem("current",theme)
  },[theme])
  return (
    <div className={`App ${theme}`}>
      <Navbar
      theme={theme}
      setTheme={setTheme}/>
    </div>
  );
}

export default App;
