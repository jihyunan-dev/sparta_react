import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { deleteBucket } from "./redux/modules/bucket";

const BucketList = (props) => {
  const bucket_list = useSelector((state) => state.bucket.list);

  const dispatch = useDispatch();

  return (
    <Lists>
      {bucket_list.map((list, index) => {
        return (
          <ListItem
            key={index}
            onClick={() => {
              props.history.push("/detail/" + index);
            }}
          >
            {list}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(deleteBucket(list));
              }}
            >
              삭제
            </button>
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
  overflow-x: hidden;
  overflow-y: auto;
`;

const ListItem = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: aliceblue;
  cursor: pointer;
`;

export default BucketList;
