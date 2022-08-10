import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __getTodosThunk = createAsyncThunk(
  "GET_TODOS",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`http://localhost:5001/form`);
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
      await axios.delete(`http://localhost:5001/form/${arg}`);
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
      await axios.patch(`http://localhost:5001/form/${arg.id}`, arg);
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
      state.todos = action.payload;
    },
    [__getTodosThunk.rejected]: (state, action) => {
      state.isLoading = false;
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
