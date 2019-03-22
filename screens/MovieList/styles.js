import { StyleSheet, Dimensions } from "react-native";

const fullWidth = (Dimensions.get("window").width * 5) / 7;

export default StyleSheet.create({
  container: {
    flex: 1
  },
  itemList: {
    flexDirection: "row",
    width: fullWidth,
    marginBottom: "2%"
  },
  briefInfo: {
    flexDirection: "column",
    marginLeft: "2%",
    marginRight: "2%"
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: "10%"
  },
  poster: {
    width: 100,
    height: 150
  }
});
