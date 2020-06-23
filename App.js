import * as React from 'react';

import { Provider } from 'react-redux';

import store from '~/store';

import Navigation from '~/config/navigation';

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
