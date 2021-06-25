import React from "react";
import Img from "./bh.jpg";

const Start = ({ name }) => {
  return (
    <>
      <div className="img-box">
        <img src={Img} alt="백현" />
      </div>
      <p className="question">
        나는 <strong className="name">{name}</strong>에 대해서
        <br /> 얼마나 알고 있을까?
      </p>
      <form className="form">
        <input className="input" type="text" placeholder="내 이름" />
        <button className="submit-btn" type="submit">
          시작하기
        </button>
      </form>
    </>
  );
};

export default Start;
