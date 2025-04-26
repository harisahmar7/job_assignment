const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className="todo-item">
      <span 
        onClick={() => toggleComplete(todo.id)}
        className={`todo-text ${todo.completed ? 'completed' : ''}`}
      >
        {todo.text}
      </span>
      <button 
        onClick={() => deleteTodo(todo.id)}
        className="delete-button"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;