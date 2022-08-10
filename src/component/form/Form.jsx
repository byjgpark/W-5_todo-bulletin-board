// import React, { useEffect, useState } from "react";
// import axios from "axios"; // axios import 합니다.

// function Form() {
//   const [nickname, setNickname] = useState({
//     nickname: "",
//   });
//   const [title, setTitle] = useState({
//     title: "",
//   });
//   const [content, setContent] = useState({
//     content: "",
//   });

//   const onSubmitHandler = (Todo) => {
//     axios.post("http://localhost:3001/form", Todo);
//   };
//   console.log(Todo);

//   const addTodo = () => {
//     const newTodo = {
//       id: lists.length + 1,
//       nickname: nickname,
//       title: title,
//       content: content,
//     };

//     const newTodos = [...lists, newTodo];
//     setNickname("");
//     setTitle("");
//     setContent("");
//   };

//   return (
//     <div>
//       <form
//         onSubmit={(e) => {
//           // 👇 submit했을 때 브라우저의 새로고침을 방지합니다.
//           e.preventDefault();
//           onSubmitHandler(todo);
//         }}
//       >
//         <h1>닉네임</h1>
//         <input
//           type="text"
//           onChange={(ev) => {
//             const { value } = ev.target;
//             setTodo({
//               ...todo,
//               nickname: value,
//               title: value,
//               content: value,
//             });
//           }}
//           placeholder="닉네임을 입력해주세요. (5자 이내)"
//         ></input>
//         <h1>제목</h1>
//         <input
//           type="text"
//           onChange={(ev) => {
//             const { value } = ev.target;
//             setTodo({
//               ...todo,
//               title: value,
//             });
//           }}
//           value={title}
//           placeholder="제목을 입력해주세요. (5자 이내)"
//         ></input>
//         <h1>내용</h1>
//         <input
//           type="text"
//           onChange={(ev) => {
//             const { value } = ev.target;
//             setTodo({
//               ...todo,
//               content: value,
//             });
//           }}
//           value={content}
//           placeholder="내용을 입력해주세요. (10자 이내)"
//         ></input>
//         <button onClick={() => addTodo()}>추가하기</button>
//       </form>
//       <div>
//         {todos?.map((todo) => (
//           <div key={todo.id}>{todo.title}</div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Form;

import axios from "axios";
import React, { useState } from "react";
import "./style.css";

function Form() {
  const [post, setPost] = useState({
    nickname: "",
    title: "",
    content: "",
  });

  const onSubmitHandler = (post) => {
    axios.post("http://localhost:3001/form", post);
  };

  console.log(post);

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
