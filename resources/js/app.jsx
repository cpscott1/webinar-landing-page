import '../css/app.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import WebinarSignup from './components/WebinarSignup';

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <WebinarSignup />
    </React.StrictMode>
);