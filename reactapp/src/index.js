import React from 'react';
import ReactDOM from 'react-dom';
import './comment/index.css';
import App from './App';
// import CommentApp  from './comment/CommentApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
