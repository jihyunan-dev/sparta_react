import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const BucketList = (props) => {
  const bucket_list = useSelector((state) => state.bucket.list);

  return (
    <Lists>
      {bucket_list.map((list, index) => {
        return (
          <ListItem
            key={index}
            color={list.completed ? "#ee5253" : "aliceblue"}
            onClick={() => {
              props.history.push("/detail/" + index);
            }}
          >
            {list.text}
          </ListItem>
        );
      })}
    </Lists>
  );
};

const Lists = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 40vh;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ListItem = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

export default BucketList;
