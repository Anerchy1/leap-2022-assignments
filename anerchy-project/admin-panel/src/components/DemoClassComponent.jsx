import React from "react";
import { Button } from "react-bootstrap";

export class DemoClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increaseCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    if (this.state.count >= 11) {
      return <></>;
    } else {
      return (
        <Button
          onClick={() => {
            this.increaseCount();
          }}
        >
          Count to 10 = {this.state.count}
        </Button>
      );
    }
  }
}
