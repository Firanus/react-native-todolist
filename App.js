import React from 'react';
import AppMainView from './AppMainView';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Import the reducer and create a store
import { reducer } from './reduxClasses/reducer'
const store = createStore(reducer);

export default AppWithStore = () => {
  return (
    <Provider store={store}>
      <AppMainView/>
    </Provider>
  )
};