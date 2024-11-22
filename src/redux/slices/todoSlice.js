import { createSlice } from "@reduxjs/toolkit";

// TODO: 로컬스토리지에 최신상태를 동기화 해서, 새로고침 시에도 상태가 유지되도록 해보세요.
export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [
      { id: 1, title: "제목1", content: "내용1", isDone: false },
      { id: 2, title: "제목2", content: "내용2", isDone: false },
      { id: 3, title: "제목3", content: "내용3", isDone: true },
      { id: 4, title: "제목4", content: "내용4", isDone: true },
      { id: 5, title: "제목5", content: "내용5", isDone: true },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      // TODO: 투두 추가 상태변경 해보세요.
    },
    deleteTodo: (state, action) => {
      // TODO: 투두 삭제 상태변경 해보세요.
    },
    toggleTodo: (state, action) => {
      // TODO: 투두의 isDone 속성값(boolean)을 토글링하도록 상태변경 해보세요.
      console.log(state);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
