import React, { Component } from "react";
import { View, Text } from "react-native";

class MovieDetails extends Component {
  // componentDidMount() {
  //   const movieId = this.props.list;
  //   const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=bf2e9e1f41e52b73e962e7a4c7d1e37b`;

  //   fetch(url)
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       this.setState({ list: responseJson.results });
  //     })
  //     .catch(err => {
  //       Alert.alert(err);
  //     });
  // }
  render() {
    return (
      <View>
        <Text>Done</Text>
      </View>
    );
  }
}

export default MovieDetails;
