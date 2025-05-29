import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './router.tsx'
import { FilterProvider } from './utils/FilterContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FilterProvider>
      <AppRouter />
    </FilterProvider>
  </StrictMode>,
)
