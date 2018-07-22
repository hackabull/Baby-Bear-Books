import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DragDrop from '../../../DragDrop';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<DragDrop />, document.getElementById('root'));
registerServiceWorker();
