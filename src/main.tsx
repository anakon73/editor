import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { store } from './store/index.ts'
import App from './App.tsx'
import './assets/index.css'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
)
