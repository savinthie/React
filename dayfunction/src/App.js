function App(){
  const time=new Date();
  const day=time.toLocaleString("en-us",{weekday: "long"});
  const morning=time.getHours()>=6 && time.getHours()<=12;
  
  let dayMessage;

  if(day.toLowerCase()==="monday"){
    dayMessage=`Happy ${day}`;
  }
  else if(day.toLowerCase()==="tuesday"){
    dayMessage=`Happy ${day}, four days to go`;
  }
  else if(day.toLowerCase()==="wednesday"){
    dayMessage=`Happy ${day}, three days to go`;
  }
  else if(day.toLowerCase()==="thursday")
  {
    dayMessage=`Happy ${day}, two days to go`;
  }else if(day.toLowerCase()==="friday"){
    dayMessage=`Happy ${day}, one more day to go`;
  }  
  else{
    dayMessage=`stay calm and keep having fun`;
  }

  return(
    <div className="appClass">
      <h1>{dayMessage}</h1>
      {morning ? <p>Have you had your breakfast yet?</p> : ''}
    </div>

  );
}

export default App;
