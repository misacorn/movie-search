import React, { Component } from "react";
import { View, Text } from "react-native";



class MovieDetails extends Component {

  state = {
    data: []
  }

  componentDidMount() {
    const movieId = this.props.navigation.state.params.id
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=bf2e9e1f41e52b73e962e7a4c7d1e37b`;

    fetch(url)
      .then(response => {
        console.log(response)
        return response.json()})
      .then(responseJson => {
        this.setState({ data: responseJson});
      })
      .catch(err => {
        Alert.alert(err);
      });


  }

  render() {
    return (
      <View>
        <Text>{this.state.data.id}</Text>
      </View>
    );
  }
}

export default MovieDetails;
