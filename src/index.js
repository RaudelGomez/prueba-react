import React  from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import Reloj from './Reloj';
import App from './App';
import store from './store';
//import store from './storeReloj'


ReactDOM.render(
    <Provider store={store}>
      
      <Reloj />
      <App />
    </Provider>,
  document.getElementById('root'),
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

