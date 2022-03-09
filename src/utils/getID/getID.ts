import uuid from "react-native-uuid";

export const getID = () => {
  return uuid.v4().toString();
};
