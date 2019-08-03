import React from 'react';
import ReactDOM from 'react-dom';
import  { Provider } from 'mobx-react';
import App from './App';
import birdStore from './BirdStore';

const Root = (
    <Provider birdStore = {birdStore}>
        <App />
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
