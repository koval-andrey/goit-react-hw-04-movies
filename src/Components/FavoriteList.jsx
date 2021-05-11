import React, { Component } from "react";
import Api from "./api/Api.jsx";
import { Link } from "react-router-dom";
import routes from "routes";
import Loader from "react-loader-spinner";

export default class FavoriteList extends Component {
  state = {
    movies: [],
    status: "resolved",
  };

  componentDidMount() {
    this.setState({
      status: "pending",
    });
    Api.fetchtFavoriteMovie().then((response) =>
      this.setState({
        movies: response.results,
        status: "resolved",
      })
    );
  }

  render() {
    const { status, movies } = this.state;
    return (
      <>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${routes.movies}/${movie.id}`,
                  state: { from: this.props.location },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
        {status === "pending" && (
          <Loader type="Circles" color="#00BFFF" height={100} width={100} />
        )}
      </>
    );
  }
}
