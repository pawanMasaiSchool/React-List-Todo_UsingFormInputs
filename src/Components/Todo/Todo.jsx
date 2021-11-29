import { useState } from "react";
import { v4 as uuid } from "uuid";
import Input from "../Input.jsx/Input";
import TodoList from "../TodoList/TodoList";
import styles from "./Todo.module.css";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  const handleDeleting = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleCreationOfTodoElement = (name, desc) => {
    const payload = {
      key: todos.length + 2,
      id: todos.length + 2,
      title: name,
      status: "Pending",
      description: desc
    };
    setTodos([...todos, payload]);
  };

  // console.log(todos);

  return (
    <>
      <div className={styles.myTodo}>
        <TodoList myTodos={todos} handleDelete={handleDeleting} />
        <br />
        <br />
        <Input CreatingTask={handleCreationOfTodoElement} />
      </div>
    </>
  );
}
