
import React from 'react'

const Todo = ({todo,onDelete}) => {
  return (
    <div>
      
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className='btn brn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  );
}

export default Todo;
