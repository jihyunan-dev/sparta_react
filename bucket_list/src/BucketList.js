import React from "react";
import styled from "styled-components";

const Lists = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ListItem = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: aliceblue;
`;

const BucketList = (props) => {
  const my_lists = props.list;

  return (
    <Lists>
      {my_lists.map((list, index) => {
        return <ListItem key={index}>{list}</ListItem>;
      })}
    </Lists>
  );
};

export default BucketList;
