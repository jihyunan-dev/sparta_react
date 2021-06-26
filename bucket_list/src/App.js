import React from "react";
import BucketList from "./BucketList";
import styled from "styled-components";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import Detail from "./Detail";
import NotFound from "./NotFound";
import { loadBucket, createBucket } from "./redux/modules/bucket";

import { connect } from "react-redux";
// import "./style.css";
// import "./scss_ex.scss";

const mapStateToProps = (state) => {
  return { bucketList: state.bucket.list };
};

const mapDispatchToProps = (dispatch) => ({
  load: () => {
    dispatch(loadBucket()); // { type: LOAD, bucket }
  },
  create: (new_item) => {
    dispatch(createBucket(new_item)); // { type: CREATE, bucket }
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
    console.log(this.props);
  }

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    // this 키워드를 통해 state에 접근할 수 있어요.
    console.log(this.state.list);

    return (
      <>
        <AppBox>
          <Container>
            <Title>내 버킷리스트</Title>
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
            <input type="text" ref={this.text} />
            <button type="button" onClick={this.addBucket}>
              추가하기
            </button>
          </BucketForm>
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
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
