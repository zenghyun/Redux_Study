import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './app/store.ts'
import { worker } from "./api/server.js";
import persistStore from 'redux-persist/es/persistStore'
import { PersistGate } from 'redux-persist/integration/react'

if (process.env.NODE_ENV === "development") {
  worker.start();
}

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <App />
      </PersistGate>
    </Provider>
)
