import React from 'react'

const TodosList=({todos,setTodos, setEditTodo})=> {
  const handleComplete=(todo)=>{
    setTodos(
      todos.map((item)=>{
        if(item.id===todo.id){
          return{...item, completed: !item.completed}
        }
        return item;
      })
    )
  }
  const handleEdit=({id})=>{
    const findTodo=todos.find((todo)=>todo.id===id);
    setEditTodo(findTodo);
  };

  const handleDelete=({id})=>{
    setTodos(todos.filter((todo)=>todo.id !==id));
  }
  return ( <div>
    {todos.map((todo)=>(
      <li className='list-item' key={todo.id}>
        <input type='text'
         value={todo.title}
          className={`list ${todo.completed ? "complete":""}`}
        onChange={(event)=> event.preventDefault()}
        />
        <div>
          <button className='button-complete task-button' onClick={()=>handleComplete(todo)}>
          <i class="bi bi-calendar-check"></i>
          </button>
          <button className='button-edit task-button' onClick={()=>handleEdit(todo)} >
          <i class="bi bi-pencil-square"></i>          </button>
          <button className='button-delet task-button'onClick={()=>handleDelete(todo)}>
          <i class="bi bi-trash3"></i>          </button>
        </div>
      </li>
    ))}
  </div>);
};
export default TodosList;