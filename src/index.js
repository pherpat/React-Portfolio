//import components from our components folder
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

ReactDOM.render(<App />, document.getElementById('root'));


// The ReactDOM.render method is used to render a react element into the actual DOM
// The first argument is the component we want to render, and the second is the container element on the page
