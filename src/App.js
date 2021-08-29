import React, { useState } from "react";



export default function App() {
  const [todos, setTodos] = useState([
    {id: 1, title: 'Ir ao supermercado', done: false},
    {id: 2, title: 'Ir ao churrasco', done: false},
    {id: 3, title: 'Voltar ao autodromo', done: false}
  ]);

  const handleFormSubmit = e => {
    //previne que a pagina resete
    e.preventDefault();
  }

  return (
    <div className="App">
        {
          todos.map(item => (
            <div key={item.id}>{item.title}</div>
          ))
        } 
        <br/>
        <hr />
        <br/>

        <form onSubmit={handleFormSubmit}>
          <input type="text" name="todo" id="title" placeholder="nova tarefa..." />
          <button>Adicionar</button>
        </form>
    </div>
  );
}

