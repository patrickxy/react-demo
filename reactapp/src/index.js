// import React from 'react';
// import ReactDOM from 'react-dom';
// import './comment/index.css';
// // import App from './App';
// import CommentApp  from './comment/CommentApp';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<CommentApp/>, document.getElementById('root'));
// registerServiceWorker();

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CommentApp from './commentRedux/containers/CommentApp'
import commentsReducer from './commentRedux/reducers/comments'
import './commentRedux/index.css'

const store = createStore(commentsReducer)

ReactDOM.render(
  <Provider store={store}>
    <CommentApp />
  </Provider>,
  document.getElementById('root')
)
