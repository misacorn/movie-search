import React, { Component } from "react";
import { View, TextInput, FlatList, Button } from "react-native";

class Home extends Component {
  render() {
    return (
      <View>
        <View>
          <TextInput />
          <Button />
        </View>
        <FlatList />
      </View>
    );
  }
}

export default Home;
