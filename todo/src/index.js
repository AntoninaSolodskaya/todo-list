import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import TodoApp from './TodoApp';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TodoApp />, document.getElementById('root'));

serviceWorker.unregister();
