import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import AppRouter from './App'

const container: any = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
)
