import React from "react";
import { RootNavigator } from "./navigators";
import { NavigationProvider, PostsProvider } from "./components";

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
