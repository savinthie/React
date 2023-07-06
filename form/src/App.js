import  './App.css';
import {useState} from "react";

function App(){
    const[name,setName]=useState("");


    const handleSubmit =()=>{
        console.log('Form submitted!')
    };

    return(
    <>
    <div className="appClass">
    <form onSubmit={handleSubmit}>
    <label>Name : </label>
    <input type="text" placeholder="Name" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
    <br/>
    <button type="submit">Submit</button>

    </form>
    </div>
    
    
    </>
    )
}

export default App