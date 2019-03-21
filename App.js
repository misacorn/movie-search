import React, { Component } from "react";
import {
  View,
  FlatList,
  Button,
  TextInput,
  TouchableHighlight,
  StatusBar,
  KeyboardAvoidingView
} from "react-native";

import styles from "./styles";

class App extends Component {
  state = { movieTitle: "", movieList: [] };

  inputChange = text => {
    this.setState({ movieTitle: text });
  };

  findMovie = () => {
    console.log("hehe");
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent={false} barStyle="dark-content" />
      </View>
    );
  }
}

export default App;
