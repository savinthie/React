import img1 from './assets/img1.jpeg';



function App(){

  return(
    <>
    <h1>Different Images</h1>
    
    <img height={165} src={img1}  alt='Image 1'/>

    <img height={165} src={require("./assets/img2.jpeg")} alt='Image 2'/>

    <img  height={165} src={require("./assets/img3.jpeg")} alt='Image 3'/>


    </>
)

}

export default App;