// bucket.js
import { firestore } from "../../firebase";

const bucket_db = firestore.collection("bucket");

// Actions
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const DELETE = "bucket/DELETE";
const COMPLETE = "bucket/COMPLETE";

// initial State;
const initialState = {
  list: [],
};

// Action Creators
export const loadBucket = (bucket) => {
  return { type: LOAD, bucket };
};

export const createBucket = (bucket) => {
  return { type: CREATE, bucket };
};

export const deleteBucket = (bucket) => {
  return { type: DELETE, bucket };
};

export const completeBucket = (bucket) => {
  return { type: COMPLETE, bucket };
};

export const loadBucketFB = () => {
  return function (dispatch) {
    bucket_db.get().then((docs) => {
      let bucket_data = [];
      docs.forEach((doc) => {
        if (doc.exists) {
          bucket_data = [...bucket_data, { id: doc.id, ...doc.data() }];
        }
      });
      dispatch(loadBucket(bucket_data));
    });
  };
};

export const addBucketFB = (bucket) => {
  return function (dispatch) {
    let bucket_item = { text: bucket, completed: false };
    bucket_db
      .add(bucket_item)
      .then((docRef) => {
        bucket_item = { ...bucket_item, id: docRef.id };
      })
      .then((res) => dispatch(createBucket(bucket_item)));
  };
};

export const completeBucketFB = (bucket) => {
  return function (dispatch, getState) {
    const _bucket_data = getState().bucket.list[bucket];
    if (!_bucket_data) return;

    let bucket_data = { ..._bucket_data, completed: true };
    bucket_db
      .doc(bucket_data.id)
      .update(bucket_data)
      .then((res) => {
        dispatch(completeBucket(bucket_data));
      })
      .catch((err) => console.log(err));
  };
};

export const deleteBucketFB = (bucket) => {
  return function (dispatch, getState) {
    const _bucket_data = getState().bucket.list[bucket];
    if (!_bucket_data.id) return;

    bucket_db.doc(_bucket_data.id).delete();
    dispatch(deleteBucket(bucket));
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "bucket/LOAD":
      if (action.bucket.length > 0) {
        return { list: action.bucket };
      }
      return state;
    case "bucket/CREATE":
      const new_bucket_list = [...state.list, action.bucket];
      return { list: new_bucket_list };
    case "bucket/DELETE":
      console.log(action.bucket);
      const bucket_list = state.list.filter(
        (item, idx) => idx !== action.bucket
      );
      return { list: bucket_list };
    case "bucket/COMPLETE":
      const completed_bucket_list = state.list.map((item) =>
        item.id === action.bucket.id
          ? { ...item, completed: !item.completed }
          : item
      );
      return { list: completed_bucket_list };
    default:
      return state;
  }
}
