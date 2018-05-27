import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    burgerFlag1: false,
    burgerFlag2: false,
    burgerFlag3: false,
    burgerFlag4: false
  };
  render() {
    return (
      <div className="parent">
        <div
          onClick={() => this.setState({ burgerFlag: !this.state.burgerFlag })}
          className="burger"
        >
          <div className={this.state.burgerFlag ? "top1 topBun1" : "top1"} />
          <div
            className={this.state.burgerFlag ? "middle1 middleBun1" : "middle1"}
          />
          <div
            className={this.state.burgerFlag ? "bottom1 bottomBun1" : "bottom1"}
          />
        </div>
        <div
          className="burger"
          onClick={() =>
            this.setState({ burgerFlag2: !this.state.burgerFlag2 })
          }
        >
          <div className={this.state.burgerFlag2 ? "top2" : "top2 topBun2"} />
          <div className={this.state.burgerFlag2 ? "middle2" : null} />
          <div
            className={
              this.state.burgerFlag2 ? "bottom2" : "bottom2 bottomBun2"
            }
          />
        </div>
        <div
          onMouseEnter={() => {
            this.setState({ burgerFlag3: true });
          }}
          onMouseLeave={() => {
            this.setState({ burgerFlag3: false });
          }}
          className="burger"
        >
          <div className={!this.state.burgerFlag3 ? "top3" : "top3 topBun3"} />
          <div
            className={
              !this.state.burgerFlag3 ? "middle3" : "middle3 middleBun3"
            }
          />
          <div
            className={
              !this.state.burgerFlag3 ? "bottom3" : "bottom3 bottomBun3"
            }
          />
        </div>
      </div>
    );
  }
}

export default App;
