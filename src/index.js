// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App/App'


// ReactDOM.render(<App  />, document.getElementById('root'))

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './components/App/App'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
); 