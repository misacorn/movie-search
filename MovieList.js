import React, { Component } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { SearchBar, Header } from "react-native-elements";

class MovieList extends Component {
  static navigationOptions = {
    title: 'Search movie'.toUpperCase(),
  };
  
  state = { title: "", list: [] };

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

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="Type movie title here..."
          onChangeText={title => this.setState({ title })}
          value={this.state.title}
          lightTheme={true}
          round={true}
          platform="ios"
          cancelButtonTitle="Cancel"
        />
      </View>
    );
  }
}

export default MovieList;

const styles = StyleSheet.create({
  container: {},
  header: {
    alignItems: "center",
    justifyContent: "center"
  }
});
