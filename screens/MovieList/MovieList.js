import React, { Component } from "react";
import {
  View,
  Alert,
  FlatList,
  Text,
  Image,
  TouchableHighlight
} from "react-native";
import { SearchBar } from "react-native-elements";

import styles from "./styles";
import HeartButton from "../../button/HeartButton";

class MovieList extends Component {
  static navigationOptions = {
    title: "Home"
  };

  state = { title: "", list: [], showAddToFav: true };

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

  keyExtractor = (item, index) => item.id;

  renderItem = ({ item }) => (
    <TouchableHighlight
      onPress={() =>
        this.props.navigation.navigate("MovieDetails", {
          id: item.id,
          title: item.title
        })
      }
    >
      <View>
        <View style={styles.itemList}>
          <Image
            style={styles.poster}
            source={{
              uri: "https://image.tmdb.org/t/p/original" + item.poster_path
            }}
          />
          <View style={styles.briefInfo}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.release_date.slice(0, 4)}</Text>
            <Text style={{ color: item.vote_average >= 7 ? "green" : "red" }}>
              Rating: {item.vote_average}
            </Text>
            {this.state.showAddToFav && <HeartButton />}
          </View>
        </View>
        <View style={styles.separator} />
      </View>
    </TouchableHighlight>
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
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          // ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

export default MovieList;
