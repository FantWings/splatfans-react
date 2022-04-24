import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import AppRouter from './App'
import GlobalStyles from '@/theme/globalStyles'

const container: any = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <AppRouter />
    <GlobalStyles />
  </React.StrictMode>
)
