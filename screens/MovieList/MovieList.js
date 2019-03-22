import React, { Component } from "react";
import { View, Alert, FlatList, Text, Image } from "react-native";
import { SearchBar } from "react-native-elements";

import styles from "./styles";

class MovieList extends Component {
  static navigationOptions = {
    title: "Search movie".toUpperCase()
  };

  state = { title: "", list: [] };

  componentDidMount() {
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=bf2e9e1f41e52b73e962e7a4c7d1e37b";
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ list: responseJson.results });
      })
      .catch(err => {
        Alert.alert(err);
      });
  }

  inputChange = title => {
    this.setState({ title });
    this.findMovie();
  };

  findMovie = () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=bf2e9e1f41e52b73e962e7a4c7d1e37b&query=${
      this.state.title
    }`;

    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ list: responseJson.results });
      })
      .catch(error => {
        Alert.alert(error);
      });
  };

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item }) => (
    <View style={styles.itemList}>
      <Image
        style={styles.poster}
        source={{
          uri: "https://image.tmdb.org/t/p/original" + item.poster_path
        }}
      />
      <View style={styles.briefInfo}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>Released: {item.release_date.slice(0, 4)}</Text>
        <Text style={{ color: item.vote_average >= 7 ? "green" : "red" }}>
          Rating: {item.vote_average}
        </Text>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="Type movie title here..."
          onChangeText={this.inputChange}
          value={this.state.title}
          lightTheme={true}
          round={true}
          platform="ios"
          cancelButtonTitle="Cancel"
        />
        <FlatList
          style={{ margin: "2%" }}
          data={this.state.list}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

export default MovieList;
