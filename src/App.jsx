import { useState } from 'react'
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function fetchTodos( ) {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    const value = localStorage.key(i);
    result.push(value);
  }
  return result;
}

function App() {
  const [todos, setTodos] = useState(fetchTodos());

  const addTodo = (todo) => {
    console.log('clicked ')
    localStorage.setItem(todo, todo);
    setTodos((currentTodos) => { //setTodos: 원본 데이터를 그대로 가지고 있는 상태에서 추가적으로 넣겠다 (배열/상태 추가 방식)
      return [...currentTodos, todo] //... : 배열을 풀어서 집어넣어줘 
    })
  }

  const removeTodo = (todo) => {
    const result = todos.filter(todoItem => {
      if (todoItem !==todo) {
        return true;
      }
    })
      setTodos(result);
      localStorage.removeItem(todo);
  }

  return (
    <div>
      <TodoHeader />
      <TodoInput onTodoAdd={addTodo} />
      <TodoList todos={todos} onTodoRemove={removeTodo} />
      {/* <div>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={index }>
                <span>{todo}</span>
                <button onClick={() => handleRemove(todo, index)}>remove</button>
              </li>
            )
          } )}
        </ul>
      </div> */}
    </div>
  )
}

export default App
