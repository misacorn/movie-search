import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, TouchableOpacity } from "react-native";

class HeartButton extends Component {
  state = { addedToFav: false };
  addToFav = () => {
    console.log(this.state);
  };
  render() {
    return (
      <TouchableOpacity onPress={this.addToFav}>
        <View>
          <Icon name="heart-o" size={18} color={"red"} />
        </View>
      </TouchableOpacity>
    );
  }
}

export default HeartButton;
