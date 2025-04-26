import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  if (todos.length === 0) {
    return <p style={{ textAlign: 'center', color: 'gray' }}>No tasks available.</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          toggleComplete={toggleComplete} 
          deleteTodo={deleteTodo} 
        />
      ))}
    </ul>
  );
};

export default TodoList;