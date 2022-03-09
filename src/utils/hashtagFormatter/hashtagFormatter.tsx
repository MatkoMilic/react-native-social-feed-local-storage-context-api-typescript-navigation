import { Text } from "react-native";
import { styles } from "./styles";

export const hashtagFormatter = (addString: string) => {
  return addString
    .split(/((?:^|\s)(?:#[a-z\d-]+))/gi)
    .filter(Boolean)
    .map((v) => {
      if (v.charAt(0) === "#") {
        return <Text style={styles.textFormatterColor}>{v}</Text>;
      } else {
        return <Text>{v}</Text>;
      }
    });
};
