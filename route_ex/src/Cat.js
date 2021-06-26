import React from "react";

const Cat = (props) => {
  const {
    params: { cat_name: name },
  } = props.match;
  return <div>우리 고양이 이름은 {name}입니다!</div>;
};

export default Cat;
