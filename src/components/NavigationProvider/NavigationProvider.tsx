import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";

interface NavigationProviderProps {
  children?: React.ReactNode;
}

export const NavigationProvider: FC<NavigationProviderProps> = ({
  children,
}) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};

NavigationProvider.defaultProps = {
  children: undefined,
};
