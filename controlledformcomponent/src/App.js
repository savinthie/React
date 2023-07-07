import {useState} from 'react';

function App(){
const [score,setScore]=useState("10");
const [comment,setComment]=useState("");


const handleSubmit =(e)=>{
  e.preventDefault();
  if(Number(score)<=5 && comment.length <=10)
{
  alert("Please provide a comment explaining why the experience is poor")
}
else{
  alert("Thanks for your rating")
}

}


  return(
  <div className='App'>
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h2>Feedback form</h2>
        <div className="Field">
          <label>Score :{score} </label>
          <input type='range'
           min='0'
           max='10' 
           name='name' 
           value={score} 
           onChange={e => setScore(e.target.value)}
           />
        </div>
        <label>Comment : </label>
        <textarea value={comment} onChange={e=>setComment(e.target.value)}/>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
    
  </div>
  
  )


}
export default App
