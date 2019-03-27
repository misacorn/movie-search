import React, { Component } from "react";
import { View, Text } from "react-native";

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
    console.log(data.release_date);
    return (
      <View style={styles.itemList}>
        {/* <Image
          style={styles.poster}
          source={{
            uri: "https://image.tmdb.org/t/p/original" + data.poster_path
          }}
        /> */}
        <View style={styles.briefInfo}>
          <Text style={styles.title}>{data.title}</Text>
          <Text>{data.release_date}</Text>
          {/* <Text style={{ color: data.vote_average >= 7 ? "green" : "red" }}>
            Rating: {data.vote_average}
          </Text> */}
        </View>
      </View>
    );
  }
}

export default MovieDetails;
