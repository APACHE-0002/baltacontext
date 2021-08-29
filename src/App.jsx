import React from "react";
import  AddTodo  from "./components/AddTodo";
import  TodoList  from "./components/TodoList";
import  TodoProvider  from "./contexts/TodoContext";



const App = () => {
  
  return (
    <TodoProvider>
      <TodoList></TodoList>
      <AddTodo></AddTodo>
    </TodoProvider>
  );
}

export default App;
