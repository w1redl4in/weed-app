import React, { Component } from "react";
import api from "../../services/api";
import "./index.css";

export default class Weed extends Component {
  state = {
    weeds: []
  };

  async componentDidMount() {
    const response = await api.get("getAll");
    this.setState({ weeds: response.data });
  }

  render() {
    return this.state.weeds.map(weed => (
      <section id={weed._id} className="weed-list">
        <div className="weed-info">
          <h1>{weed.name}</h1>
        </div>
        <img
          src="https://en.seedfinder.eu/pics/01seeds/SubCools_The_Dank/SubCools_The_Dank_-_Astroboy_thumb.jpg"
          alt="weed"
        />
        <footer>
          <p>{weed.batata}</p>
        </footer>
      </section>
    ));
  }
}
