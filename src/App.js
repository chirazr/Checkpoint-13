
import './App.css';
import { useState } from 'react';

function App() {
  const [person, setperson ]=useState({fullname:"your name",profession:"your profession", show:false})
  return (
    <div className="App">
      <button onClick={()=>setperson({...person, show:true})}>Show</button>
      {
        person.show==true?
        (
          <>
          <h1>{person.fullname}</h1>
          <h2>{person.profession}</h2>
          </>
        ):null
      }
      
     
    
      </div>)
     }
  
      


export default App;
