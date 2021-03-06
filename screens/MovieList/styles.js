import { StyleSheet, Dimensions } from "react-native";

const fullWidth = (Dimensions.get("window").width * 3) / 4;

export default StyleSheet.create({
  container: {
    flex: 1
    // marginLeft: "2%",
    // marginRight: "2%"
  },
  itemList: {
    flexDirection: "row",
    width: fullWidth,
    marginBottom: "2%",
    marginTop: "2%"
  },
  briefInfo: {
    flexDirection: "column",
    marginLeft: "2%",
    marginRight: "2%"
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: "5%"
  },
  favButton: {
    position: "absolute",
    right: 12,
    top: 7,
    zIndex: 2
  },
  poster: {
    width: 67,
    height: 100
  },
  separator: {
    height: 1,
    backgroundColor: "#dddddd",
    width: "100%",
    marginRight: "2%"
  }
});
