import React from "react";
import { RootNavigator } from "./navigators";
import { NavigationProvider } from "./components";
import { PostsProvider } from "./stores";

const App: React.FC = () => {
  return (
    <PostsProvider>
      <NavigationProvider>
        <RootNavigator />
      </NavigationProvider>
    </PostsProvider>
  );
};

export default App;
