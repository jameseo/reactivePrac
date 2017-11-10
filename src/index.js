import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');
ReactDOM.render(<App headerTitle="this is Header Title"
                contentsTitle="this is Contents Title"
                contentsBody="this is Contents Body"/>, rootElement);
