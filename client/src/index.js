import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Get the root of the index.html file and render the App component there
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
