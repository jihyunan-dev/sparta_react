import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { completeBucketFB, deleteBucketFB } from "./redux/modules/bucket";

const Detail = (props) => {
  const bucket_list = useSelector((state) => state.bucket.list);
  const bucket_index = parseInt(props.match.params.index);
  console.log(bucket_list);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>
        {bucket_list[bucket_index] ? bucket_list[bucket_index].text : null}
      </h1>
      <button
        type="button"
        onClick={(e) => {
          dispatch(deleteBucketFB(bucket_index));
          props.history.goBack();
        }}
      >
        삭제하기
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(completeBucketFB(bucket_index));
          props.history.goBack();
        }}
      >
        완료하기
      </button>
    </div>
  );
};

export default Detail;
