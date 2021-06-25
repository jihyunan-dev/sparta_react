import React from "react";
import Nemo from "./Nemo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 3 };
    this.div = React.createRef();
  }

  addNemo = () => {
    this.setState({ count: this.state.count + 1 });
  };

  removeNemo = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    } else {
      alert("네모가 없어요!!");
    }
  };

  hoverEvent = (e) => {
    if (e.target !== e.currentTarget) return;
    e.target.style.backgroundColor = "#eee";
  };

  componentDidMount() {
    this.div.current.addEventListener("mouseover", this.hoverEvent);
  }

  componentWillUnmount() {
    this.div.current.removeEventListener("mouseover", this.hoverEvent);
  }

  render() {
    return (
      <div className="App" ref={this.div}>
        <Nemo />
      </div>
    );
  }
}

export default App;
