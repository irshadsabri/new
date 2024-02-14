import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./store";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = (e) => {
    e.preventDefault();
    const text = e.target.elements.todo.value;
    if (text) {
      dispatch(addTodo({ id: new Date().getTime(), text, done: false }));
      e.target.elements.todo.value = "";
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo({ id }));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <div>
      <h1>To-do List</h1>
      <form onSubmit={handleAddTodo}>
        <input type="text" name="todo" />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <span>{todo.text}</span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
