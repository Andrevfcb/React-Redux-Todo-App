import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //here we will write our reducer
    //Adding todos
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //remove todos
    removeTodos: (state, action) => {
      return state.map((todo) => {
        if(todo.id === action.payload.id) {
          return {
            ...todo,
            deleted: true
          };
        }
        return todo;
      });
    },
    //update todos
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    //completed
    completeTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
    //set todos
    setTodos: (state, action) => {
      return state = action.payload
    },
  },
});

export const {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
  setTodos
} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
