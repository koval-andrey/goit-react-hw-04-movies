import Api from "../Components/api/Api.jsx";
import React, { Component } from "react";
import Loader from "react-loader-spinner";

export default class Cast extends Component {
  state = {
    cast: [],
    status: "resolved",
  };

  componentDidMount() {
    this.setState({
      status: "pending",
    });
    Api.fetchCastMovie(this.props.match.params.movieId)
      .then((response) =>
      this.setState({
        cast: response.cast,
        status: "resolved",
      })
    );
  }
  render() {
    const { status, cast } = this.state;
    const imgUrl = "https://image.tmdb.org/t/p/w200";
    return (
      <>
        {cast.length > 0 && (
          <ul>
            {cast.map((actor) => (
              <li key={actor.id}>
                <img src={`${imgUrl}${actor.profile_path}`} alt={actor.name} />
                <p>{actor.name}</p>
                <p>Character:{actor.character}</p>
              </li>
            ))}
          </ul>
        )}
        {status === "pending" && (
          <Loader type="Circles" color="#00BFFF" height={100} width={100} />
        )}
      </>
    );
  }
}
