// import { lazy, Suspense } from 'react'
// import { Route, Routes } from 'react-router-dom'
import GlobalStyles from './theme/globalStyles'
import './App.css'

import HeroHead from './pages/hero-head'
import HeroBody from './pages/hero-body'
import HeroFoot from './pages/hero-foot'
import { useState } from 'react'
import styled from 'styled-components'

function App() {
  const [blur, setBlur] = useState(false)
  return (
    <Body className={`App ${blur ? 'blur' : ''}`}>
      <HeroHead />
      <HeroBody />
      <HeroFoot />
      <GlobalStyles />
    </Body>
  )
}

const Body = styled.div`
  &.blur {
    filter: blur(4px);
  }
`

export default App
