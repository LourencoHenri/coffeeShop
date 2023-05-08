import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import { GlobalStyle } from './styles/global'
import { CoffeesContextProvider } from './contexts/coffeesContexts'

export function App() {
  return (
    <div>
      <BrowserRouter>

        <CoffeesContextProvider>
          <Router/>  
        </CoffeesContextProvider>

          <GlobalStyle />

      </BrowserRouter>
    </div>
  )
}