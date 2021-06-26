import React from "react";
import Score from "./Score";
import Quiz from "./Quiz";
import styled from "styled-components";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "백현이",
      quizzes: [
        { question: "백현이의 생일은 5월 6일이다.", answer: "O" },
        { question: "백현이는 딸기를 싫어한다.", answer: "X" },
        { question: "백현이는 데뷔를 총 세 번 했다.", answer: "X" },
        {
          question: '백현이의 mr제거 영상으로 유명한 곡은 "UN VILLAGE"이다.',
          answer: "O",
        },
        { question: "백현이는 뮤지컬을 한 적이 있다.", answer: "O" },
        {
          question: "백현이가 고등학교 때 활동했던 밴드 이름은 혼수상태다.",
          answer: "O",
        },
      ],
    };
  }

  render() {
    return (
      <AppContainer>
        {/* <Score name={this.state.name} /> */}
        <Quiz quizzes={this.state.quizzes} />
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
  max-width: 350px;
  margin: 50px auto;
  box-sizing: border-box;
  padding: 30px;
`;

export default App;
