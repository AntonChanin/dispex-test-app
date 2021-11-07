import React from 'react';
import { Provider } from 'react-redux';

import { LoginForm, Profile } from './components';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Profile />
        <LoginForm />
      </div>
    </Provider>
  );
}

export default App;
