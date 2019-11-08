import React from 'react';
import './App.css';
import BoxItem from './components/BoxItem';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <BoxItem />
    </Provider>
  );
}

export default App;
