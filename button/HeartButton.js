import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Icon from "react-native-vector-icons";
import { View, TouchableOpacity } from "react-native";

class HeartButton extends Component {
  state = { addToFavourite: false };
  addToFav = () => {
    console.log(this.state);
  };
  render() {
    return (
      <TouchableOpacity onPress={this.addToFav} style={styles.heartButton}>
        <View>
          <Icon name="heart" size={18} color={"#ffffff"} />
        </View>
      </TouchableOpacity>
    );
  }
}

export default HeartButton;
