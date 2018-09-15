import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store.js';
import "bulma/css/bulma.css";



import registerServiceWorker from './registerServiceWorker';

console.log(store)

ReactDOM.render(
 <Provider store={store} >
<App />
</Provider >,
document.getElementById('root'));
registerServiceWorker();
