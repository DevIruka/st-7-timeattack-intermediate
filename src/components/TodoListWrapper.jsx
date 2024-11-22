import TodoList from "./TodoList";

export default function TodoListWrapper({ setTodos }) {
  return (
    <>
      <TodoList setTodos={setTodos} isDone={false} />
      <TodoList setTodos={setTodos} isDone={true} />
    </>
  );
}
