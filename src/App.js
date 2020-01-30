import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import './App.css';

import LoginPageContainer from './components/LoginPageContainer';

function App() {
  return (
    <Provider store={store}>
        <LoginPageContainer />
    </Provider>
  );
}

export default App;
