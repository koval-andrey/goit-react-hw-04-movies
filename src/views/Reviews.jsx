import Api from "../Components/api/Api.jsx";
import React, { Component } from "react";
import Loader from "react-loader-spinner";

export default class Reviews extends Component {
  state = {
    reviews: [],
    status: "resolved",
  };

  componentDidMount() {
    this.setState({
      status: "pending",
    });
    Api.fetchtReviewsMovie(this.props.match.params.movieId).then((response) =>
      this.setState({
        reviews: response.results,
        status: "resolved",
      })
    );
  }
  render() {
    const { status, reviews } = this.state;
    return (
      <>
        {reviews.length > 0 && (
          <ul>
            {reviews.map((item) => (
              <li key={item.id}>{item.content}</li>
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
