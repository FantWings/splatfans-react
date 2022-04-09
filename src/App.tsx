import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
// import styled from 'styled-components'
import GlobalStyles from './theme/globalStyles'
import './App.css'

import HeroHead from './pages/hero-head'
import HeroBody from './pages/hero-body'

function App() {
  return (
    <div className="App">
      <HeroHead />
      <HeroBody />
      <GlobalStyles />
    </div>
  )
}

export default App
