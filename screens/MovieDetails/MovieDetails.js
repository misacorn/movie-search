import React, { Component } from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";

class MovieDetails extends Component {
  static navigationOptions = {
    title: "Movie Details"
  };

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
    console.log(data.spoken_languages);
    console.log(data.overview);
    return (
      <View style={styles.container}>
        <View style={styles.itemList}>
          <Image
            style={styles.poster}
            source={{
              uri: "https://image.tmdb.org/t/p/original" + data.poster_path
            }}
          />

          <View style={styles.briefInfo}>
            <Text style={styles.title}>{data.title}</Text>
            {data.tagline ? (
              <Text style={styles.tagline}>{data.tagline}</Text>
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
          </View>
        </View>

        <View style={styles.infoColumn}>
          <View style={styles.column}>
            <Text>Release</Text>
            {data.release_date ? (
              <Text>{data.release_date.slice(0, 4)}</Text>
            ) : null}
          </View>
          <View style={styles.column}>
            <Text>Duration</Text>
            <Text>
              {Math.floor(data.runtime / 60)}h {data.runtime % 60}
            </Text>
          </View>
          <View style={styles.column}>
            <Text>Language</Text>
            {/* {data.spoken_languages.name ? (
              <Text>{data.spoken_languages.name}</Text>
            ) : null} */}
          </View>
          <View style={styles.overview}>
            <Text>Overview</Text>
            <Text>{data.overview}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default MovieDetails;
