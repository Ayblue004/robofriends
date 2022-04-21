import React from 'react';
import ReactDomClient from 'react-dom/client';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; 

const container = document.getElementById('root');
const root = ReactDomClient.createRoot(container);

root.render(<App />)
// registerServiceWorker();
