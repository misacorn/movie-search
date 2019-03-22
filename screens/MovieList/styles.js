import { StyleSheet, Dimensions } from "react-native";

const fullWidth = (Dimensions.get("window").width * 4) / 5;

export default StyleSheet.create({
  container: {
    flex: 1
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
    fontWeight: "600"
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
