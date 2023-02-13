import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//Segundo paso importar provider de react-redux 
import { Provider } from 'react-redux';
//Segundo paso importar store
import store from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/*Sgundo paso encerrar <App/> en un provider con el 
    prop store*/}

    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>
);

