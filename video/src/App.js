
import ReactPlayer from 'react-player';

function App(){

  const videoLink="https://www.youtube.com/watch?v=cd3P3yXyx30";

  return(

    <>
    <h1>React Video Player</h1>

    <ReactPlayer playing={true} url={videoLink} volume={0.5}/>

    </>
  )

  

}

export default App