import React, { Component } from "react";
import { View, StyleSheet, Alert, FlatList, Text, Image } from "react-native";
import { SearchBar } from "react-native-elements";

class MovieList extends Component {
  static navigationOptions = {
    title: "Search movie".toUpperCase()
  };

  state = { title: "", list: [] };

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
          style={{ marginLeft: "1%" }}
          data={this.state.list}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View>
              <Text>{item.title}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

export default MovieList;

const styles = StyleSheet.create({
  container: {}
});
