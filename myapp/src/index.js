import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import CommentBox from './comment/CommentBox'
// import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <CommentBox url="comment.json" />, 
    document.getElementById('root')
);
// registerServiceWorker();
