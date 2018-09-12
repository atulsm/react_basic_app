import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import Assign1 from './Assign1/App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

//ReactDOM.render(<Assign1 />, document.getElementById('root'));

registerServiceWorker();
