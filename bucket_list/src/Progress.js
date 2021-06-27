import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Progress = (prop) => {
  const bucket_list = useSelector((state) => state.bucket.list);
  let count = 0;
  bucket_list.map((l, idx) => {
    if (l.completed) count++;
  });

  return (
    <ProgressBar>
      <HighLight width={(count / bucket_list.length) * 100 + "%"}>
        {count !== 0 ? <Round /> : null}
      </HighLight>
    </ProgressBar>
  );
};

const ProgressBar = styled.div`
  width: 100%;
  height: 24px;
  border-radius: 20px;
  background-color: #eee;
`;

const HighLight = styled.div`
  position: relative;
  width: ${(props) => props.width};
  height: 24px;
  border-radius: 20px;
  background-color: #ee5253;
  transition: width 300ms ease-in-out;
`;

const Round = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #ee5253;
  transform: translate(50%, -6px);

  &::after {
    position: absolute;
    content: "";
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: white;
    transform: translate(25%, 25%);
  }
`;
export default Progress;
