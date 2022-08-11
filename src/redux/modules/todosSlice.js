import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {serverURL} from "./index.js"

export const __getTodosThunk = createAsyncThunk(
  "GET_TODOS",
  async (_, thunkAPI) => {
    try {
      // console.log("server URL" + serverURL);
      // console.log("hello world")
      const { data } = await axios.get(serverURL+ 'todos')
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __deleteTodoThunk = createAsyncThunk(
  "DELETE_TODO",
  async (arg, thunkAPI) => {
    try {
      await axios.delete(process.env.REACT_APP_API_KEY+`todos/${arg}`);
      return thunkAPI.fulfillWithValue(arg);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __updateTodoThunk = createAsyncThunk(
  "UPDATE_TODO",
  async (arg, thunkAPI) => {
    try {
      await axios.patch(process.env.REACT_APP_API_KEY + `todos/${arg.id}`, arg);
      return thunkAPI.fulfillWithValue(arg);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};
export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodosThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("checking todoThunk fulfilled " + JSON.stringify(action.payload))
      state.todos = action.payload;
    },
    [__getTodosThunk.rejected]: (state, action) => {
      state.isLoading = false;
      console.log("checking todoThunk reject " + JSON.stringify(action.payload))
      state.error = action.payload;
    },
    [__getTodosThunk.pending]: (state) => {
      state.isLoading = true;
    },

    [__deleteTodoThunk.fulfilled]: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    [__deleteTodoThunk.rejected]: () => {},
    [__deleteTodoThunk.pending]: () => {},

    [__updateTodoThunk.fulfilled]: (state, action) => {
      state.todos = state.todos.map(function (todo) {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            content: action.payload.content,
          };
        } else {
          return todo;
        }
      });
    },
    [__updateTodoThunk.rejected]: () => {},
    [__updateTodoThunk.pending]: () => {},
  },
});

// export const {} = todosSlice.actions;
export default todosSlice.reducer;
