import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import * as actions from './actionTypes';
import {login} from './actions';

const unsubscribe = store.subscribe(() => {
  console.log("STORE CHANGED!", store.getState())
})

store.dispatch(login('itME', 'THESENUTS'))

store.dispatch({
  type: actions.REMOVE_USER
})

unsubscribe()

store.dispatch(login('PLAYME', 'GAAAAAAY'))


console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

