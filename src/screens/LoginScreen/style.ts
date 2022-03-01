import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  loginContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  titleStyle: {
    fontWeight: "500",
  },
  buttonStyle: {
    backgroundColor: "rgba(199, 43, 98, 1)",
    borderColor: "transparent",
    borderWidth: 0,
  },
  buttonContainerStyle: {
    width: 200,
    height: 45,
    marginHorizontal: 50,
    marginVertical: 10,
  },
});
