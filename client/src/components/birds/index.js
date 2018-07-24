import React from 'react';
import ReactDOM from 'react-dom';
import './birds.css';
import './birds.scss';
import Birds from '../../../birds';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Birds />, document.getElementById('root'));
registerServiceWorker();