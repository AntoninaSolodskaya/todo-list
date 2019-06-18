import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import TodoApp from './TodoApp';
import AppList from './AppList'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppList />, document.getElementById('root'));

serviceWorker.unregister();
