import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __getCommentsThunk = createAsyncThunk(
  "GET_COMMENTS",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("http://localhost:5001/todos");
      // console.log("getCommentsThunk" + JSON.stringify(data))
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __getCommnetsByTodoId = createAsyncThunk(
  "GET_COMMENT_BY_TODO_ID",
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios.get(`http://localhost:5001/comments?todoId=${arg}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "DELETE_COMMENT",
  async (arg, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:5001/comments/${arg}`);
      return thunkAPI.fulfillWithValue(arg);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __updateComment = createAsyncThunk(
  "UPDATE_COMMENT",
  async (arg, thunkAPI) => {
    console.log(JSON.stringify(arg))
    try {
      axios.patch(`http://localhost:5001/comments/${arg.id}`, arg);
      return thunkAPI.fulfillWithValue(arg);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __addComment = createAsyncThunk(
  "ADD_COMMENT",
  async (arg, thunkAPI) => {
    try {
      console.log("what is arg" + JSON.stringify(arg))
      console.log("what is thinkAPI" + JSON.stringify(thunkAPI))
      const { data } = await axios.post("http://localhost:5001/comments", arg);
      console.log("checking data" + JSON.stringify(data))
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const initialState = {
  comments: {
    data: [],
    isLoading: false,
    error: null,
  },
  commentsByTodoId: {
    data: [],
    isLoading: false,
    error: null,
  },
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    clearTodo: (state) => {
      state.comments = null;
    },
  },
  extraReducers: {
    // 전체 댓글 조회
    [__getCommentsThunk.pending]: (state) => {
      state.comments.isLoading = true;
    },
    [__getCommentsThunk.fulfilled]: (state, action) => {
      state.comments.isLoading = false;
      // console.log("this is comment thunk" + JSON.stringify(state.comments.data))
      state.comments.data = action.payload;
    },
    [__getCommentsThunk.rejected]: (state, action) => {
      state.comments.isLoading = false;
      state.comments.error = action.payload;
    },

    // 댓글 조회 (todoId)
    [__getCommnetsByTodoId.pending]: (state) => {
      state.commentsByTodoId.isLoading = true;
    },
    [__getCommnetsByTodoId.fulfilled]: (state, action) => {
      state.commentsByTodoId.isLoading = false;
      state.commentsByTodoId.data = action.payload;
    },
    [__getCommnetsByTodoId.rejected]: (state, action) => {
      state.commentsByTodoId.isLoading = false;
      state.commentsByTodoId.error = action.payload;
    },

    // 댓글 삭제
    [__deleteComment.pending]: (state) => {
      state.commentsByTodoId.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.commentsByTodoId.isLoading = false;
      const target = state.commentsByTodoId.data.findIndex(
        (comment) => comment.id === action.payload
      );
      state.commentsByTodoId.data.splice(target, 1);
    },
    [__deleteComment.rejected]: (state, action) => {
      state.commentsByTodoId.isLoading = false;
      state.commentsByTodoId.error = action.payload;
    },

    // 댓글 수정
    [__updateComment.pending]: (state) => {},
    [__updateComment.fulfilled]: (state, action) => {
      const target = state.commentsByTodoId.data.findIndex(
        (comment) => comment.id === action.payload.id
      );
      state.commentsByTodoId.data.splice(target, 1, action.payload);
    },
    [__updateComment.rejected]: () => {},
    // 댓글 추가
    [__addComment.fulfilled]: (state, action) => {
      state.commentsByTodoId.isLoading = false;
      console.log("checking fulfilled addcomment" + JSON.stringify(action.payload))
      state.commentsByTodoId.data.push(action.payload);
    },
    [__addComment.rejected]: (state, action) => {
      state.commentsByTodoId.isLoading = false;
      console.log("checking rejected addcomment" + action.payload)
      state.commentsByTodoId.error = action.payload;
    },
    [__addComment.pending]: (state) => {
      state.commentsByTodoId.isLoading = true;
    },
  },
});

export default commentsSlice.reducer;
