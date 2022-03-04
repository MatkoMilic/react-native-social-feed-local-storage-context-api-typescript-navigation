import { Text } from "react-native";
import { styles } from "./styles";

export const HASHTAG_FORMATTER = (addString: string) => {
  return addString
    .split(/((?:^|\s)(?:#[a-z\d-]+))/gi)
    .filter(Boolean)
    .map((v) => {
      if (v.includes("#")) {
        return <Text style={styles.textFormatterColor}>{v}</Text>;
      } else {
        return <Text>{v}</Text>;
      }
    });
};
