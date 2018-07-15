import React from 'react';
import ReactDOM from 'react-dom';
import './NamePage.css';
import './NamePage.scss';
import NamePage from '../../../NamePage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NamePage />, document.getElementById('root'));
registerServiceWorker();