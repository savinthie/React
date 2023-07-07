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


  



function App(){
 const listItem = data.map(items => {
 const itemText=`${items.description} - ${items.price}`
  return <li>{itemText}</li>
 })
  return(
    <div>
    <ul>{listItem}</ul>
    </div>
  
  );

}


export default App;

