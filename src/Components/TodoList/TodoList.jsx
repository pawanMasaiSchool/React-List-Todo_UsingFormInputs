import TodoItem from "../TodoItem/TodoItem";

export default function TodoList({ myTodos, handleDelete }) {
  // console.log(myTodos);
  return (
    <div>
      {myTodos.map((item) => {
        return (
          <TodoItem
            title={item.title}
            status={item.status}
            description={item.description}
            handleDelete={handleDelete}
            id={item.id}
          />
        );
      })}
    </div>
  );
}
