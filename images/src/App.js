import React from 'react';
import Logo from './logo.svg';
import './App.css';
function App(){
  return(
    <>
   <div className='appClass'>
    <h2>React Logo</h2>
    <div class='imageClass'>
    <img src={Logo}/>
    </div>
    </div>
    </>
  );

}
export default App;
