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
  // const [isShow, setisShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [userID, setIDName] = useState("");
  const [cmtBody, setCmtBody] = useState("");
  const [textEdit, setTextEdit] = useState("");
  const [editCmt, setEditCmt] = useState({
    id: "",
    username: "",
  });

  // console.log("This is " + editShow);

  // console.log("checking " + userID, cmtBody)

  // Redux
  // const todos = useSelector((state) => state.todos);
  const comments = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  // if(comments.commentsByTodoId.data.length !== 0){
  // console.log(comments.commentsByTodoId.data.map((e) => e))
  // }

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
    );
  };

  // const onUpdateBtnHandler = (cmt) => {
  //   console.log("checking" + JSON.stringify(cmt))

  //   // setEditShow(true);
  // };

  return (
    <div className="isKcvs">
      <div className="SVavv">
        <div className="fBRIGy">눌러서 댓글내리기</div>
      </div>
      <form className="hPRjqN" onSubmit={onSubmitHandler}>
        <div className="cSGhKx">
          <input
            type="text"
            placeholder="이름 (5자 이내)"
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
          placeholder="댓글을 추가하세요. (100자 이내)"
          className="iskVDh"
          value={cmtBody}
          onChange={(e) => {
            // Getting User title input
            setCmtBody(e.target.value);
          }}
          required
        />
        <button type="submit">추가하기</button>
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

                  <div className="jPiwpb">
                    <button
                      className="bPVoHM"
                      onClick={() => {
                        setEditShow(true);
                      }}
                    >
                      수정하기
                    </button>
                    <button
                      className="bPVoHM"
                      onClick={() => {
                        dispatch(__deleteComment(cmt.id));
                      }}
                    >
                      삭제하기
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
                  취소하기
                </button>
                <button
                  className="bPVoHM"
                  onClick={() => {
                    console.log(
                      "checking onCick " +
                        JSON.stringify(comments.commentsByTodoId.data)
                    );
                    // if(editShow === false){
                    //   dispatch(
                    //   __updateComment({
                    //     id: comments.id,
                    //     body: textEdit,
                    //     username: comments.username,
                    //     todoId: id,
                    //   })
                    // )
                    // }
                    setEditShow(false);
                    // console.log("check here" + editShow)
                  }}
                >
                  저장하기
                </button>
              </div>
            </div>
          )
          // );
          // })
        }
        {/* )} */}
        {/* );
            }
          })} */}
      </div>
      <button type="submit"></button>
    </div>
  );
}

export default Comment;

// const [isUp, setIsUp] = useState(false);
// return (
//   <StDrawer isUp={isUp}>
//     <StHeader>
//       <div
//         onClick={() => {
//           setIsUp((pre) => !pre);
//         }}
//       >
//         {isUp ? <MdFileDownload size="24" /> : <MdFileUpload size="24" />}
//       </div>
//     </StHeader>
//     {/* {children} */}
//   </StDrawer>
// );
//       }

// export default Comment;

// const StDrawer = styled.div`
// border: 1px solid red;
// width: 100%;
// min-height: 80%;
// height: 80%;
// background-color: #eee;
// position: absolute;
// bottom: 0;
// border-radius: 24px 24px 0 0;
// transform: ${({ isUp }) => `translateY(${isUp ? 0 : 600}px)`};
// transition: transform 300ms ease-in-out;
// `;

// const StHeader = styled.div`
// display: flex;
// justify-content: center;
// padding: 17px;
// `;
