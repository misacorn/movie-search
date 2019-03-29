import React, { Component } from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";

class MovieDetails extends Component {
  state = { data: [] };

  componentDidMount() {
    const { navigation } = this.props;
    const movieId = navigation.state.params.id;
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=bf2e9e1f41e52b73e962e7a4c7d1e37b`;

    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ data: responseJson });
      })
      .catch(err => {
        Alert.alert(err);
      });
  }

  render() {
    const { data } = this.state;
    console.log(data.id);
    return (
      <View style={styles.itemList}>
        <Image
          style={styles.poster}
          source={{
            uri: "https://image.tmdb.org/t/p/original" + data.poster_path
          }}
        />
        <View style={styles.briefInfo}>
          <Text style={styles.title}>{data.title}</Text>
          {data.release_date ? (
            <Text style={styles.release_date}>
              Released: {data.release_date.slice(0, 4)}
            </Text>
          ) : null}
          <Text>Rating:</Text>
          <Text
            style={{
              color: data.vote_average >= 7 ? "green" : "red",
              fontSize: 35
            }}
          >
            {data.vote_average} / 10
          </Text>
          {data.tagline ? (
            <Text style={styles.tagline}>"{data.tagline}"</Text>
          ) : null}
        </View>
      </View>
    );
  }
}

export default MovieDetails;
