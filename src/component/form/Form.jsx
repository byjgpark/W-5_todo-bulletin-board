import axios from "axios";
import React, { useState } from "react";
import "./style.css";
import {serverURL} from "../../redux/modules/index.js"
import {useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

  const [post, setPost] = useState({
    nickname: "",
    title: "",
    content: "",
  })

  const onSubmitHandler = (post) => {
    axios.post(serverURL + 'todos', post);
    alert("새로운 게시글이 추가 되었어요!")
    navigate("/")
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          // 👇 submit했을 때 브라우저의 새로고침을 방지합니다.
          e.preventDefault();
          onSubmitHandler(post);
        }}
      >
        <div className="input-group">
          <div className="ntc">
            <div className="h2ninput">
              <h2 className="h2">닉네임</h2>
              <input
                type="text"
                className="input-nicktitle"
                onChange={(ev) => {
                  const { value } = ev.target;
                  setPost({
                    ...post,
                    nickname: value,
                  });
                }}
                placeholder="닉네임을 입력해 주세요."
              ></input>
            </div>
            <div className="h2ninput">
              <h2 className="h2">제목</h2>
              <input
                type="text"
                className="input-nicktitle"
                onChange={(ev) => {
                  const { value } = ev.target;
                  setPost({
                    ...post,
                    title: value,
                  });
                }}
                placeholder="제목을 입력해 주세요."
              ></input>
            </div>
            <div className="h2ninput">
              <h2 className="h2">내용</h2>
              <input
                type="text"
                className="input-content"
                onChange={(ev) => {
                  const { value } = ev.target;
                  setPost({
                    ...post,
                    content: value,
                  });
                }}
                placeholder="내용을 입력해 주세요."
              ></input>
            </div>
          </div>
          <button className="add-button">추가하기</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
