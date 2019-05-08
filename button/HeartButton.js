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
          <Icon name="heart" size={18} color={"black"} />
        </View>
      </TouchableOpacity>
    );
  }
}

export default HeartButton;
