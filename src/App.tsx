import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import GlobalStyles from './theme/globalStyles'
import './App.css'

import HeroHead from './pages/hero-head'
import HeroBody from './pages/hero-body'
import HeroFoot from './pages/hero-foot'

function App() {
  return (
    <div className="App">
      <HeroHead />
      <HeroBody />
      <HeroFoot />
      <GlobalStyles />
    </div>
  )
}

export default App
