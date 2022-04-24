import { useState, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Schedules from '@/pages/Schedules'
const Login = lazy(() => import('@/pages/Login'))
const LinkToNintendo = lazy(() => import('@/pages/LinkToNintendo'))

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/linkto" element={<LinkToNintendo />} />
          <Route path="*" element={<App />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

function App() {
  const [blur] = useState(false)
  return (
    <AppBody className={`App ${blur ? 'blur' : ''}`}>
      <NavBar />
      <Schedules />
      <Footer />
    </AppBody>
  )
}

function Footer() {
  return (
    <FooterBody>
      <span>本网站不隶属于任天堂。所有产品名称、徽标和品牌均为任天堂所有。</span>
      <span>站点设计源于splatoon2.ink，使用React编写。</span>
      <span className="link" onClick={() => window.open('https://github.com/FantWings/splatfans-react', '_blank')}>
        GitHub
      </span>
    </FooterBody>
  )
}

// 页头组件
function NavBar() {
  return (
    <NavBarBody className="masked squid">
      <div className="container">
        <div className="groups flex-app">
          <div className="group-left">
            <div className="item">
              <div className="title size-1 font-splatoon1 is-inline">Splatoon 2</div>
            </div>
          </div>
          <div className="group-right">
            <div className="subtitle size-2 font-splatoon2 is-inline">时刻表</div>
          </div>
        </div>
        <div className="groups flex-app">
          <div className="group-left"></div>
          <div className="group-right"></div>
        </div>
      </div>
    </NavBarBody>
  )
}

// App样式
const AppBody = styled.div`
  &.blur {
    filter: blur(4px);
  }
`

// 页头样式
const NavBarBody = styled.div`
  background-color: #2e2e2e;
  margin-bottom: 2rem;
`

// 页脚样式
const FooterBody = styled.div`
  margin-top: 2rem;
  padding: 0 2rem 2rem 2rem;
  color: #7a7a7a;
  text-align: center;
  font-size: 8px;
  span.link {
    color: #ff5600;
    cursor: pointer;
  }
`
