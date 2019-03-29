import { StyleSheet, Dimensions } from "react-native";

const fullWidth = (Dimensions.get("window").width * 1.25) / 2;

export default StyleSheet.create({
  container: {
    flex: 1
  },
  itemList: {
    flexDirection: "row",
    width: fullWidth,
    marginBottom: "2%",
    marginTop: "2%",
    marginLeft: "2%"
  },
  briefInfo: {
    flexDirection: "column",
    marginLeft: "2%",
    marginRight: "2%"
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: "10%"
  },
  poster: {
    width: 150,
    height: 225
  },
  release_date: {
    marginBottom: "10%"
  },
  tagline: {
    marginTop: "10%",
    fontStyle: "italic",
    fontSize: 15
  }
});
