import Loader from "react-loader-spinner";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Api from "../Components/api/Api.jsx";
import Searchbox from "../Components/SearchBox";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default class Movies extends Component {
  state = {
    movies: [],
    searchMovie: "",
    status: "idle",
    error: "not found",
  };
  getQueryParams(string) {
    return queryString.parse(string);
  }

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      this.fetchMovies(query);
      return;
    }
    this.fetchMovies("batman");
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);
    if (prevQuery !== nextQuery) {
      this.fetchMovies(nextQuery);
    }
  }

  fetchMovies = (query) => {
    this.setState({
      status: "pending",
    });
    Api
      .fetchMovieWithQuery(query)
      .then((response) => {
        if (response.total_pages === 0) {
          this.setState({
            movies: [],
            status: "reject",
          });
          return Promise.reject(new Error(`This ${query} not found`));
        }

        this.setState({
          movies: response.results,
          status: "resolved",
        });
      })
      .catch((error) => this.setState({ error, status: "rejected" }));
  };

  handleChangeQuery = (query) => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies, status, error } = this.state;
    const { match } = this.props;

    return (
      <>
        <Searchbox onSubmit={this.handleChangeQuery} />
        <ToastContainer autoClose={3000} position="top-center" />
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${match.url}/${movie.id}`,
                  state: { from: this.props.location },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
        {status === "rejected" && <p>{error.message}</p>}
        {status === "pending" && (
          <Loader type="Circles" color="#00BFFF" height={100} width={100} />
        )}
      </>
    );
  }
}
