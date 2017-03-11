import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'

import App from './App'
import todoApp from '../src/reducers/reducers'

let createStoreMiddleware = applyMiddleware(thunk)(createStore);
let store = createStoreMiddleware(todoApp);

render(<Provider store = {store}>
      <App />
   </Provider>,
   document.getElementById('app'));