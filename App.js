import React from 'react';
import { Provider } from 'react-redux';

import store from './src/redux/store';

import AppWithNavigationState from './src/navigators/AppNavigator';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState/>
      </Provider>
    );
  }
}

export default App;
