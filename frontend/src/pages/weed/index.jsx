import React, { Component } from "react";
import api from "../../services/api";
import "./index.css";

export default class Weed extends Component {
  state = {
    weeds: []
  };

  async componentDidMount() {
    const response = await api.get("weeds");
    this.setState({ weeds: response.data });
    console.log(this.weeds);
  }

  render() {
    return this.state.weeds.map(weed => (
      <section id={weed._id} className="weed-list">
        <div className="weed-info">
          <p>{weed.name}</p>
        </div>
        <p>{weed.batata}</p>
      </section>
    ));
  }
}
