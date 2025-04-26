import { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import Filter from './Filter';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos && savedTodos.length > 0) {
      setTodos(savedTodos);
    } else {
      fetchTodosFromAPI();
    }
  }, []);

  const fetchTodosFromAPI = async () => {
    try {
      const res = await fetch('https://dummyjson.com/todos');
      const data = await res.json();
      const formattedTodos = data.todos.map(todo => ({
        id: todo.id,
        text: todo.todo,
        completed: todo.completed,
      }));
      setTodos(formattedTodos);
      localStorage.setItem('todos', JSON.stringify(formattedTodos));
    } catch (error) {
      console.error('Failed to fetch todos:', error);
    }
  };

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <Filter filter={filter} setFilter={setFilter} />
      <TodoList 
        todos={filteredTodos} 
        toggleComplete={toggleComplete} 
        deleteTodo={deleteTodo} 
      />
    </div>
  );
};

export default TodoApp;