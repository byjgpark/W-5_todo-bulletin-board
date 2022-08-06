import React, { useState } from "react";

function Form() {
  return (
    <div>
      <h1>닉네임</h1>
      <input
        type="text"
        placeholder="닉네임을 입력해주세요. (5자 이내)"
      ></input>
      <h1>제목</h1>
      <input type="text" placeholder="제목을 입력해주세요. (5자 이내)"></input>
      <h1>내용</h1>
      <input type="text" placeholder="내용을 입력해주세요. (10자 이내)"></input>
      <button>추가하기</button>
    </div>
  );
}

export default Form;
