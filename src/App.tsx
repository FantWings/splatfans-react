import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/authContextProvider'
import NavBar from './components/NavBar'
import styled from 'styled-components'

import Schedules from '@/pages/Schedules'
const PageLogin = lazy(() => import('@/pages/PageLogin'))
const Register = lazy(() => import('@/pages/PageRegister'))
const LinkToNintendo = lazy(() => import('@/pages/PageLinkTo'))

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <Routes>
          <Route path="/login" element={<PageLogin />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="*"
            element={
              <AuthProvider>
                <Routes>
                  <Route
                    path="*"
                    element={
                      <>
                        <NavBar />
                        <Schedules />
                        <Footer />
                      </>
                    }
                  />
                  <Route path="/connect" element={<LinkToNintendo />} />
                </Routes>
              </AuthProvider>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
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
