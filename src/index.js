import React from 'react';
import ReactDOM from 'react-dom/client';
import { WhatsappButton } from './components/ContactButtons';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <React.Suspense fallback="Loading...">
        <App />
        {WhatsappButton()}
      </React.Suspense>
  </React.StrictMode>
);