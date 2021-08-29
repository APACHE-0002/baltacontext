import React, { useState, createContext} from 'react';

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        {id: 1, title: 'Ir ao supermercado', done: false},
        {id: 2, title: 'Ir ao churrasco', done: false},
        {id: 3, title: 'Voltar ao autodromo', done: false}
      ]);

      const saveTodo = todo => {
          const newTodo = {
            id: todos.length +1,
            title: todo.target.value,
            done: false,
          };
          setTodos([...todos, newTodo])
      }

      //no value do provider, passar os valores que os componentes podem pegar do context
      return(
          <TodoContext.Provider value={{ todos, saveTodo}}>
              {children}
          </TodoContext.Provider>
      )
}

export default TodoProvider;