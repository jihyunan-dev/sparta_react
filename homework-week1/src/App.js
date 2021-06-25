import React from "react";
import logo from "./logo.svg";
import Start from "./Start";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "백현이" };
  }

  render() {
    const { name } = this.state;
    return (
      <div className="App">
        <Start name={name} />
      </div>
    );
  }
}

export default App;
