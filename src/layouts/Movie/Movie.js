import React, { Component } from "react";
import CardView from "../../components/CardView/CardView";
import axios from "axios";
import donz from "../../assets/images/Don.jpg";
import styles from "./Movie.css";
import keys from "../../config/keys";

class Movie extends Component {
  state = {
    movies: [],
    title: "",
    imageUrl: "",
    releaseDate: ""
  };

  componentDidMount() {
    let myurl =
      "http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2018-01-10&primary_release_date.lte=2018-10-11&api_key=" + keys.movieAPIKey;
    axios
      .get(myurl)
      .then(res => {
        // debugging purposes
        console.log(res.data);
        console.log(res.data.results[0].title);
        console.log(res.status);
        console.log(res.statusText);
        console.log(res.headers);
        console.log(res.config);

        this.setState({
          movies: res.data.results,
          imageUrl:
            "https://image.tmdb.org/t/p/w185" + res.data.results[0].poster_path, // "../../assets/images/don.jpg",
          title: res.data.results[0].title,
          releaseDate: res.data.results[0].release_date
        });

        // API.getRecipes(this.state.recipeSearch)
        //     .then(res => this.setState({ recipes: res.data }))
        //     .catch(err => console.log(err));length

        console.log(this.state.movies[0].release_date);
        console.log(this.state.movies);
      })
      .catch(err => {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
        console.log("Error", err.message);

        console.log(err);
      });
  }

  render() {
    return (
      <div className="container">
        <h1>Welcome to the Movies Page</h1>

        {!this.state.movies.length ? (
          <h1>No movies to display!</h1>
        ) : (
          <div className="row">
            {this.state.movies.map(mmovie => {
              return (
                <CardView
                  key={mmovie.title}
                  title={mmovie.title}
                  imageUrl={
                    "https://image.tmdb.org/t/p/w185" + mmovie.poster_path
                  }
                  releaseDate={mmovie.release_date}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Movie;
