import React, { useState,useEffect } from "react";
import ToDoHeader from "./Components/ToDoHeader";
import TodosList from "./Components/TodosList";
import ToDoForm from "./Components/ToDoForm";
// import "./App.css";
import "./ToDo.css";

const App = () => {
    const initialState=JSON.parse(localStorage.getItem("todos"))||[];
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState(initialState);
    const [editTodo, setEditTodo]=useState(null);

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos));

    },[todos]);

    return (
        <div className="container">
            <div className="app-wrapper">
                <div><ToDoHeader /></div>
                <div>
                    <ToDoForm
                        input={input}
                        setInput={setInput}
                        todos={todos}
                        setTodos={setTodos}
                        editTodo={editTodo}
                        setEditTodo={setEditTodo}
                    /></div>
                <div>
                    <TodosList 
                    todos={todos} 
                    setTodos={setTodos}
                    setEditTodo={setEditTodo}
                    />
                </div>
            </div>
        </div>);
}
export default App;