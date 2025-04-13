import { Component } from "react";

class ActualGame extends Component {
  constructor() {
    super();
    this.state = {
      number: null
    };
  }

  componentDidMount=()=> {
    const eventSource = new EventSource("https://mytukka.onrender.com/api/game/");

    eventSource.onmessage = (event) => {
      console.log(event);
      console.log("Received:", event.data);
      this.setState({ number: event.data });
    };

    eventSource.onerror = (err) => {
      console.error("EventSource failed:", err);
      eventSource.close();
    };
  }

  render() {
    return (
      <h1>{this.state.number !== null ? this.state.number : "Waiting for number..."}</h1>
    );
  }
}

export { ActualGame };
