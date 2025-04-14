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
    console.log(eventSource)

    eventSource.onmessage = (event) => {
      console.log("harsh",event.data);
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
      <h1>{this.state.number === null  ? "Waiting for number...": this.state.number > 30 ?  "will start soon" : this.state.number  }</h1>
    );
  }
}

export { ActualGame };
