import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    body: "",
  });

  // Redux
  // const todos = useSelector((state) => state.todos);
  const comments = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  // Router
  const { id } = useParams();

  useEffect(() => {

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
    );
    setIDName("");
    setCmtBody("");
  };

  return (
    <div className="wrap-comment">
      <div id="example-collapse-text">
        <div className="SVavv">
          <div className="fBRIGy">댓글 작성하기</div>
        </div>
        <form className="hPRjqN" onSubmit={onSubmitHandler}>
          <div className="cSGhKx">
            <input
              type="text"
              placeholder="닉네임"
              className="iskVDh"
              value={userID}
              onChange={(e) => {
                // Getting User title input
                setIDName(e.target.value);
              }}
              required
            />
          </div>
          <input
            type="text"
            placeholder="댓글을 입력해주세요"
            className="iskVDh"
            value={cmtBody}
            onChange={(e) => {
              // Getting User title input
              setCmtBody(e.target.value);
            }}
            required
          />
          <button type="submit" className="bziMUR">
            추가하기
          </button>
        </form>
        <div className="kJEvVR">
          {editShow === false ? (
            comments.commentsByTodoId.data.length !== 0 &&
            comments.commentsByTodoId.data.map((cmt) => {
              return (
                <div className="jOlBJN">
                  <div className="cPgLdn">
                    <div>{cmt.username}</div>
                    <div className="fBRIGy">{cmt.body}</div>
                  </div>
                  <div className="jPiwpb">
                    <button
                      className="bPVoHM"
                      onClick={() => {
                        setEditCmt({
                          id: cmt.id,
                          username: cmt.username,
                          body: cmt.body,
                        });
            
                        setTextEdit("");
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
            <div className="jOlBJN">
              <div className="cPgLdn">
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
                    dispatch(
                      __updateComment({
                        id: editCmt.id,
                        body: textEdit,
                        username: editCmt.username,
                        todoId: id,
                      })
                    );
                    setEditShow(false);
                  }}
                >
                  저장
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Comment;
