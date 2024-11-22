import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { toggleTodo } from "../redux/slices/todoSlice";

export default function TodoList({ setTodos, isDone }) {
  // TODO: 비즈니스로직 부분을 커스텀훅으로 변경해 보세요. src/hooks/useTodo.js 준비되어 있습니다.
  const todos = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  const filteredTodos = todos.filter((todo) => todo.isDone === isDone);
  const toggleTodoItem = (id) => {
    dispatch(toggleTodo(id));
  };

  const deleteTodoItem = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h2>{isDone ? "Done" : "Wokring..."}</h2>
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodoItem={toggleTodoItem}
            deleteTodoItem={deleteTodoItem}
          />
        ))}
      </ul>
    </>
  );
}
