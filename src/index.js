import React from 'react';
import  { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { ErrorBoundary } from "react-error-boundary";
const container = document.getElementById('root')
const root = createRoot(container)
let persistor = persistStore(store)

function Fallback({ error, resetErrorBoundary }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.
  alert(error)
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}
root.render(
/*  <React.StrictMode>
    </React.StrictMode>
  */  <ErrorBoundary
  FallbackComponent={Fallback}
  onReset={(details) => {
    // Reset the state of your app so the error doesn't ;happen again
    alert("reset function callled")
  }}
>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
</ErrorBoundary>
);
