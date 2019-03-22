import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import MovieList from "./screens/MovieList/MovieList";
import MovieDetails from "./screens/MovieDetails/MovieDetails";

const AppNavigator = createStackNavigator(
  {
    MovieList: MovieList,
    MovieDetails: MovieDetails
  },
  {
    initialRouteName: "MovieList"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
