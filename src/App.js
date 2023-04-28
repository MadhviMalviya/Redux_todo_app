// import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1 className='app-title' > REDUX TO-DO APP </h1>
     <AddTodo/>
     <TodoList/>
     
    </div>
  );
}

export default App;
