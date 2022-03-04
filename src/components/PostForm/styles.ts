import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  postFormContainer: {
    flex: 1,
    margin: 20,
  },
  inputErrorMessage: {
    color: "red",
  },
  postButton: {
    alignSelf: "flex-end",
    paddingHorizontal: 30,
    borderRadius: 50,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    marginBottom: 2,
    marginTop: 5,
  },
  imagePlaceholder: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    marginBottom: 2,
    marginTop: 5,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
});
