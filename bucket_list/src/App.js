import React from "react";
import BucketList from "./BucketList";
import styled from "styled-components";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import Detail from "./Detail";
import NotFound from "./NotFound";
import Progress from "./Progress";
import { addBucketFB, loadBucketFB } from "./redux/modules/bucket";

import { connect } from "react-redux";

// import "./style.css";
// import "./scss_ex.scss";

const mapStateToProps = (state) => {
  return { bucketList: state.bucket.list };
};

const mapDispatchToProps = (dispatch) => ({
  load: () => {
    dispatch(loadBucketFB());
  },
  create: (new_item) => {
    dispatch(addBucketFB(new_item));
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {};

    this.text = React.createRef();
  }

  addBucket = () => {
    const value = this.text.current.value;
    this.props.create(value);
    this.text.current.value = "";
  };

  componentDidMount() {
    this.props.load(); // connect 함수로 연결해줬기 때문에 props로 들어간 것..
  }

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    // this 키워드를 통해 state에 접근할 수 있어요.

    return (
      <>
        <AppBox>
          <Container>
            <Title>내 버킷리스트</Title>
            <Progress />
            <Line />
            {/* 컴포넌트를 넣어줍니다. */}
            {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <BucketList
                    list={this.props.bucketList}
                    history={this.props.history}
                  />
                )}
              />
              <Route path="/detail/:index" component={Detail} />
              <Route component={NotFound} />
            </Switch>
          </Container>
          <BucketForm>
            <Input type="text" ref={this.text} />
            <AddBtn type="button" onClick={this.addBucket}>
              추가하기
            </AddBtn>
          </BucketForm>
          <button
            type="button"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            위로가기
          </button>
        </AppBox>
      </>
    );
  }
}

const AppBox = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #eee;
  padding: 32px;
  box-sizing: border-box;
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  overflow-y: hidden;
`;

const Title = styled.h1`
  color: #ee5253;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

const BucketForm = styled.form`
  width: 350px;
  height: 15vh;
  padding: 16px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: white;
`;

const Input = styled.input`
  height: 24px;
  margin-right: 10px;
  padding: 3px 5px;
  border: 2px solid lightgray;
  outline: none;
  transition: border-color 300ms ease-in-out;

  &:focus {
    border-color: #ee5253;
  }
`;

const AddBtn = styled.button`
  height: 34px;
  padding: 0 20px;
  border: none;
  outline: none;
  background-color: #ee5253;
  cursor: pointer;
`;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
