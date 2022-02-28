import React from 'react';
import { RootNavigator } from './navigators';
import { NavigationProvider } from './components';

const App: React.FC = () => {
  return (
    <NavigationProvider>
      <RootNavigator />
    </NavigationProvider>
  );
};

export default App;
