import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { router } from './routes';
import { persistor, store } from './store';
import reportWebVitals from '../reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
