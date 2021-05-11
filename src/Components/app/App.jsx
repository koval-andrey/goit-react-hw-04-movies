import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import routes from "routes";
import NotFound from "../../views/NotFound";
import Layout from "../Layout";

const Home = lazy(() =>
  import("../../views/Home.jsx" /*webpack ChunkName: "home-page"*/)
);
const Movies = lazy(() =>
  import("../../views/Movies.jsx" /*webpack ChunkName: "movies-page"*/)
);
const MovieDetails = lazy(() =>
  import(
    "../../views/MovieDetails" /*webpack ChunkName: "movies-details-page"*/
  )
);
const App = () => (
  <>
    <Layout>
      <Suspense
        fallback={
          <Loader type="Circles" color="#00BFFF" height={100} width={100} />
        }
      >
        {" "}
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.movies} component={Movies} />
          <Route path={routes.movieDetails} component={MovieDetails} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  </>
);
export default App;
