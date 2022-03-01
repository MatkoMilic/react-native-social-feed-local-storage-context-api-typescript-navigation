import React from "react";
import { Header as HeaderRNE } from "react-native-elements";
import { styles } from "./style";

type AllHeaderRNEProps = React.ComponentProps<typeof HeaderRNE>;
type IHeader = AllHeaderRNEProps & {
  onPressLeftIcon?: () => void;
  onPressRightIcon?: () => void;
  headerTitle: string;
  leftIcon?: string | undefined;
  rightIcon?: string | undefined;
};

const Header = ({
  onPressLeftIcon,
  onPressRightIcon,
  headerTitle,
  leftIcon,
  rightIcon,
  ...otherProps
}: IHeader) => {
  return (
    <HeaderRNE
      style={styles.headerContent}
      {...otherProps}
      leftComponent={{
        icon: leftIcon,
        color: "#fff",
        onPress: onPressLeftIcon,
      }}
      centerComponent={{ text: headerTitle, style: styles.heading }}
      rightComponent={{
        icon: rightIcon,
        color: "#fff",
        onPress: onPressRightIcon,
      }}
    />
  );
};

export default Header;
