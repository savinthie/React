import {useState} from "react";

const ToDo = props => (

<tr>
  <td>
    <label>{props.id}</label>
  </td>
  <td>
    <input/>
  </td>
  <td>
    <label>{props.createAt}</label>
  </td>
</tr>
);

function App(){
  const[todos,setTodos]= useState([{
    id:'todo1',
    createdAt:'18:00',
  },
  {
    id:'todo2',
    createdAt:'20:30',
  }
]);

const reverseOrder = () =>{
  setTodos([...todos].reverse());
}

return(
  <div>
    <button onClick={reverseOrder}>Reverse</button>
    <table>
      <tbody>
        {todos.map((todo,index) => (
        <ToDo id= {todo.id} createAt={todo.createdAt} />
        ))}
      </tbody>
    </table>
  </div>
)

}
export default App