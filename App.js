import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import MovieSearch from "./MovieSearch";

const AppNavigator = createStackNavigator(
  {
    MovieSearch: MovieSearch,
    MovieList: MovieList,
    MovieDetails: MovieDetails
  },
  {
    initialRouteName: "MovieSearch"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
