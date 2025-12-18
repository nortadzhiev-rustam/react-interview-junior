import { useState } from 'react'



function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo =() => {
    if(task.trim()==="") return;
    setTodos([...todos,task]); 
      
    setTask("")
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_,i)=> i !==index))
  }

  return (
    <>
      <div style={styles.container}>
        <h1>Todo Lists</h1>
      <div style={styles.inputBox}>
        <input type='text'
        value={iput}
        onChange={(e)=> setTask(e.target.value)}placeholder='Add a new task'></input>
        <button onClick={{addTodo}}>Add</button>
      </div>

      <ul>
        {todos.map((todo, index)=>(
          <li key={index} style={styles.todo}>
            {todo}
            <button onClick={()=> deleteTodo(index)}>X</button>
          </li>
        ))}
      </ul>
        
        
      </div>
      
    </>
  )
}

const styles ={
  container :{
    width: "300px",
    margin: "50px auto",
    textAlign:"center"
  },
  inputBox :{
    display: "flex",
    gap : "5px"

  },
  todo: {

    display:"flex",
    justifyContent:"space-between",
    marginTop:"10px"
  }
}

export default App
