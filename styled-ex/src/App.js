import logo from "./logo.svg";
import "./App.css";

import styled from "styled-components";

const MyStyled = styled.div`
  width: 50vw;
  min-height: 150px;
  padding: 10px;
  border-radius: 15px;
  color: #fff;
  background-color: ${(props) => (props.bgColor === "red" ? "red" : "green")};

  &:hover {
    background-color: blue;
  }
`;

function App() {
  return (
    <div className="App">
      <MyStyled bgColor={"haha"}>haha</MyStyled>
    </div>
  );
}

export default App;
