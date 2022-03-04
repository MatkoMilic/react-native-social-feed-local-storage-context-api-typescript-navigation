import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  postListItem: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    color: "coral",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 15,
    marginBottom: 2,
    marginTop: 5,
  },
  imageInLightbox: {
    alignSelf: "stretch",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  textStyle: {
    fontStyle: "italic",
  },
  titleText: {
    textAlign: "center",
    margin: 15,
  },
  button: {
    textAlign: "center",
    margin: 15,
  },
});
