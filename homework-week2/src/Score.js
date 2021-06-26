import React from "react";
import styled from "styled-components";

const Score = ({ name }) => {
  return (
    <Container>
      <Question>
        <Highlight>{name}</Highlight> 퀴즈에 대한 내 점수는?
      </Question>
      <Result>
        <Highlight>100</Highlight>점
      </Result>
      <Description>이 정도면 아주 잘 알고 있네요🥰</Description>
      <BtnBox>
        <ScoreBtn type="button">점수보기</ScoreBtn>
        <RankBtn type="button">랭킹보기</RankBtn>
      </BtnBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const Question = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  line-height: 30px;
`;

const Result = styled.span`
  margin-bottom: 20px;
  font-size: 24px;
`;

const Highlight = styled.strong`
  padding: 2px 10px;
  border-radius: 15px;
  background-color: rgba(246, 185, 59, 0.3);
`;

const Description = styled.p`
  margin-bottom: 50px;
  font-size: 14px;
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Btn = styled.button`
  width: 100%;
  height: 30px;
  border: 1px solid rgb(255, 195, 18);
  border-radius: 15px;
  font-size: 14px;
  cursor: pointer;
`;

const ScoreBtn = styled(Btn)`
  background-color: rgb(255, 195, 18);
  margin-bottom: 10px;
`;

const RankBtn = styled(Btn)`
  background-color: transparent;
`;

export default Score;
