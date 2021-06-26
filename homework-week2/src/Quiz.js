import React, { useState } from "react";
import styled from "styled-components";
import SwipeItem from "./SwipeItem";

const Quiz = (props) => {
  const quizzes = props.quizzes;
  const [index, setIndex] = useState(0);

  const onSwipe = (direction) => {
    console.log("you swiped: " + direction);
    setIndex(index + 1);
  };

  return (
    <Container>
      <Index>{index + 1}번 문제</Index>
      {quizzes.map((quiz, idx) =>
        idx === index ? <Question key={idx}>{quiz.question}</Question> : null
      )}

      <AnswerZone>
        <Answer>{"O "}</Answer>
        <Answer>{" X"}</Answer>
      </AnswerZone>

      {quizzes.map((quiz, idx) => {
        if (idx === index) {
          return <SwipeItem key={idx} onSwipe={onSwipe} />;
        }
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Index = styled.span`
  padding: 4px 10px;
  border-radius: 15px;
  background-color: rgba(246, 185, 59, 0.3);
  font-size: 14px;
`;

const Question = styled.p`
  margin-bottom: 50px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

const AnswerZone = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 40vh;
`;

const Answer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  font-size: 70px;
  font-weight: 800;
`;

export default Quiz;
