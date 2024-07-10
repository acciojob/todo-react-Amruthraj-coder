import React, { useState } from "react";

const Element = ({ value, id, handleDelete }) => {
  return (
    <ul>
      <span>{value}</span>
      <button onClick={() => handleDelete(id)}>delete</button>
    </ul>
  );
};

const Todo = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(0);

  const handleAddTodo = () => {
    if (value.trim() !== "") {
      const newTodo = { value, id };
      setTodos([...todos, newTodo]);
      setId(id + 1);
      setValue(""); // Clear the input field
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleAddTodo}>Add To-do</button>
      <div>
        {todos.map((todo) => (
          <Element
            key={todo.id}
            value={todo.value}
            id={todo.id}
            handleDelete={handleDeleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
