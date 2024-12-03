
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store.js'
import { Provider } from 'react-redux'
import { ContextApi } from './components/ContextApi.jsx'
import firebaseConfig from './firebase.config.js'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ContextApi>
      <App />
    </ContextApi>,
  </Provider>
)
