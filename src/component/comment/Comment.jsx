import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
// import { __getTodos } from "../../redux/modules/todoSlice";
import {
  __addComment,
  __getCommnetsByTodoId,
  __deleteComment,
  __updateComment,
} from "../../redux/modules/commentsSlice";
import { useParams } from "react-router-dom";

import "./comment.css";

function Comment() {
  // Hook
  const [editShow, setEditShow] = useState(false);
  
  // Form Hook
  const [userID, setIDName] = useState("");
  const [cmtBody, setCmtBody] = useState("");

  // Edit Hook
  const [textEdit, setTextEdit] = useState("");
  const [editCmt, setEditCmt] = useState({
    id: "",
    username: "",
    body: ""
  });

  // console.log("This is " + editShow);

  // console.log("checking " + userID, cmtBody)

  // Redux
  // const todos = useSelector((state) => state.todos);
  const comments = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  if(comments.commentsByTodoId.data.length !== 0){
  console.log("checking useSelector " + JSON.stringify(comments.commentsByTodoId.data.map((e) => e)))
  }

  // Router
  const { id } = useParams();

  // console.log("hello todos " + JSON.stringify(todos.todos))
  // if(comments.comments.data[id] !== undefined){
  //   if(comments.comments.data[id].comment !== undefined){
  // console.log("hello comments " + JSON.stringify(comments.comments.data[id].comment.map((e) => e)))
  // console.log("hello comments " + JSON.stringify(comments.comments.data[id].comment))
  // }
  // }
  useEffect(() => {
    // dispatch(__getTodos());
    // dispatch(__getCommentsThunk());
    dispatch(__getCommnetsByTodoId(id));
  }, [dispatch]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      __addComment({
        todoId: id,
        username: userID,
        body: cmtBody,
      })
    )
    setIDName("")
    setCmtBody("")
  }

  // const onUpdateBtnHandler = (cmt) => {
  //   console.log("checking" + JSON.stringify(cmt))

  //   // setEditShow(true);
  // };

  return (
     <div  id="example-collapse-text">
      <div className="SVavv">
        <div className="fBRIGy">댓글남기기🤖</div>
      </div>
      <form className="hPRjqN" onSubmit={onSubmitHandler}>
        <div className="cSGhKx">
          <input
            type="text"
            placeholder="이름 (5자 이내)"
            className="iskVDh"
            value={userID}
            maxLength={5}
            onChange={(e) => {
              // Getting User title input
              setIDName(e.target.value);
            }}
            required
          />
        </div>
        <input
          type="text"
          placeholder="댓글을 추가하세요. (100자 이내)"
          className="iskVDh"
          value={cmtBody}
          maxLength={100}
          onChange={(e) => {
            // Getting User title input
            setCmtBody(e.target.value);
          }}
          required
        />
        <button type="submit" className="bziMUR">추가하기</button>
      </form>
      <div className="kJEvVR">
        {/* {comments.comments.isLoading === false &&
          comments.comments.data.map((comment) => {
            if (comment.comment !== undefined) {
              return ( */}
        {/* { comments.comments.data[id] !== undefined &&
              comments.comments.data[id].comment.map((el) => el */}
        {
          editShow === false ? (
            comments.commentsByTodoId.data.length !== 0 &&
            comments.commentsByTodoId.data.map((cmt) => {
              // console.log("checking here " + e)
              return (
                <div className="jOlBJN">
                  <div className="cPgLdn">
                    <div>{cmt.username}</div>
                    <div className="fBRIGy">{cmt.body}</div>
                  </div>
                  {console.log("hello this is cmt " + JSON.stringify(cmt))}
                  <div className="jPiwpb">
                    <button
                      className="bPVoHM"
                      onClick={() => {
                        setEditCmt(  
                          { 
                            id: cmt.id,
                            username: cmt.username,
                            body: cmt.body
                          }
                          )
                        // console.log("hello check state " + editCmt.id, editCmt.username)
                        setTextEdit(cmt.body)
                        setEditShow(true);
                      }}
                    >
                      수정
                    </button>
                    <button
                      className="bPVoHM"
                      onClick={() => {
                        dispatch(__deleteComment(cmt.id));
                      }}
                    >
                      삭제
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            // console.log('hello')
            // comments.commentsByTodoId.data.map((cmt) => {
            // return (
            <div className="jOlBJN">
              <div className="cPgLdn">
                {/* <div>{e.username}</div> */}
                <input
                  type="text"
                  className="iskVDh"
                  placeholder={editCmt.body}
                  value={textEdit}
                  onChange={(e) => {
                    // Getting User title input
                    setTextEdit(e.target.value);
                  }}
                ></input>
              </div>
              <div className="jPiwpb">
                <button
                  className="bPVoHM"
                  onClick={() => {
                    setEditShow(false);
                  }}
                >
                  취소
                </button>
                <button
                  className="bPVoHM"
                  onClick={() => {
                    console.log(
                      "checking onCick " +
                        JSON.stringify(comments.commentsByTodoId.data)
                    );
                    // if(editShow === false){
                      dispatch(
                      __updateComment({
                        id: editCmt.id,
                        body: textEdit,
                        username: editCmt.username,
                        todoId: id,
                      })
                    )
                    // }
                    setEditShow(false);
                    // console.log("check here" + editShow)
                  }}
                >
                  저장
                </button>
              </div>
            </div>
          )
        }
      </div>
      </div>
  );
}

export default Comment;
