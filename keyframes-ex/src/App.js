import React from "react";
import styled, { keyframes } from "styled-components";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Box></Box>
      </div>
    );
  }
}

const move = keyframes`
  0% {
    top: 20px;
    left: 60px;
    opacity: 1;
  }


  50% {
    top: 400px;
    left: 450px;
    opacity: 0;
  }

  

  100% {
    top: 20px;
    left: 800px;
    opacity: 1;
  }
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: green;
  position: absolute;
  top: 20px;
  left: 60px;
  animation: ${move} 2s 1s infinite;
`;

export default App;
