import { StyleSheet, Dimensions } from "react-native";

const fullWidth = Dimensions.get("window").width;
const listWidth = (fullWidth * 1.25) / 2;

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  itemList: {
    flexDirection: "row",
    width: listWidth,
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
    marginBottom: "20%"
  },
  poster: {
    width: 150,
    height: 225
  },
  tagline: {
    marginBottom: "20%",
    fontStyle: "italic"
  },
  infoColumn: {
    flexDirection: "row",
    marginRight: "2%",
    marginTop: "2%",
    marginLeft: "2%"
  },
  column: {
    width: fullWidth / 3,
    flexDirection: "column",
    justifyContent: "center"
  },
  overview: {
    marginRight: "2%",
    marginTop: "2%",
    marginLeft: "2%"
  }
});
