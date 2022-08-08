import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"; // axios import 합니다.

export const __getTodos = createAsyncThunk(
  "todos/getTodos",
  async (payload, thunkAPI) => {
    try {
      const {data} = await axios.get("http://localhost:5001/todos");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  todos: {
    data: [],
    isLoading: false,
    error: null,
  },
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodos.pending]: (state) => {
      state.isLoading = true;
      // console.log("This is pending")
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      // console.log(state.todos)
      // console.log("This is fulfilled")
      // console.log("this is action " + JSON.stringify(action.payload))
      // console.log("checking here ")
      state.todos.data = action.payload;
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      // console.log("what it is")
      state.error = action.payload;
    },
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
