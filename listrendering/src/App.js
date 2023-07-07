const data=[
  {
    id:"1",
    description:"description 1",
    image:"https://picsum.photos/200/300/?random",
    price:"$5.00",
  },
  {
    id:"2",
    description:"description 2",
    image:"https://picsum.photos/200/300/?random",
    price:"$6.00",
  },
  {
    id:"3",
    description:"description 3",
    image:"https://picsum.photos/200/300/?random",
    price:"$8.00",
  },
];

const information=data.map(information=>
  {return {
    content: `${information.description}`,
    price: information.price,
  }
  
  })



function App(){
  console.log(information);
  return<h1>Examine the console output</h1>

}


export default App;
