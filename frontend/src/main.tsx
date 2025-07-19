import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { DarkModeProvider } from './Hooks/DarkModeContext.ts'
// import { store } from './store/index.ts'
// import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkModeProvider>
      {/* <Provider store={store}> */}
      <BrowserRouter>
       <App />
      </BrowserRouter>
      {/* </Provider> */}
    </DarkModeProvider>
  </StrictMode>,
)