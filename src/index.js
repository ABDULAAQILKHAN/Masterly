import React from 'react';
import  { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
const container = document.getElementById('root')
const root = createRoot(container)
let persistor = persistStore(store)
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
  </React.StrictMode>
);
