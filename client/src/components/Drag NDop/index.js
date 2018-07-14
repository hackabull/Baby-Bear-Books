import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppDragDropDemo from '../../../AppDragDropDemo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppDragDropDemo />, document.getElementById('root'));
registerServiceWorker();
