import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import AppContext from './context.jsx'
import { FormspreeProvider } from '@formspree/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext>
      <FormspreeProvider project='2767343151327739745'>
        <App />
      </FormspreeProvider>
    </AppContext>
  </React.StrictMode>
)
