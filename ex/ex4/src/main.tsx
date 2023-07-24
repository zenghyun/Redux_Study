import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './app/store.ts'
import { worker } from "./api/server.js";
import { fetchUsers } from './features/users/usersSlice.ts'

if (process.env.NODE_ENV === "development") {
  worker.start();
  store.dispatch(fetchUsers());
}


ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
    <App />
    </Provider>
)
