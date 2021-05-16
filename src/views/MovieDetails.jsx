import React, { Component } from 'react';
import Api from '../Components/api/Api';
import Cast from '../views/Cast';
import routes from '../routes';
import { Link, Route } from 'react-router-dom';
import Reviews from '../views/Reviews';
import Loader from 'react-loader-spinner';

export default class MovieDetails extends Component {
  state = {
    movie: null,
    status: 'resolved',
  };

  componentDidMount() {
    this.setState({
      status: 'pending',
    });
    Api.fetchShowMoviesDetails(this.props.match.params.movieId).then(movie =>
      this.setState({
        movie,
        status: 'resolved',
      }),
    );
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    history.push(location?.state?.from || routes.home);
  };

  render() {
    const { status, movie } = this.state;
    const { match } = this.props;
    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        {movie && (
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <h1>{movie.title}</h1>
            <p>User Score: {movie.vote_average * 10}%</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>
              {movie.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </p>
          </div>
        )}
        <br />
        <Link to={`${match.url}${routes.cast}`}>Cast</Link>
        <br />
        <Link to={`${match.url}${routes.reviews}`}>Reviews</Link>

        <Route
          exact
          path={`${routes.movieDetails}${routes.cast}`}
          component={Cast}
        />
        <Route
          exact
          path={`${routes.movieDetails}${routes.reviews}`}
          component={Reviews}
        />
        {status === 'pending' && (
          <Loader type="Circles" color="#00BFFF" height={100} width={100} />
        )}
      </>
    );
  }
}
