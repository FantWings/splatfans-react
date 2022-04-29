import { useState } from 'react'
import SalmonRunPic from '@/assets/img/1600px-Splatoon_2_art_book_cover_art.png'
import styled from 'styled-components'
import SetupModel from '@/components/SetupModel'
import fetchData from '@/utils/fetch'
import { API_SERVER } from '@/const/api'
import { useNavigate } from 'react-router-dom'

export default function PageLogin() {
  const navigate = useNavigate()
  const [message, setMessage] = useState({
    text: '',
    state: 'success',
  })
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const doLogin = () => {
    fetchData(`${API_SERVER}/auth/login`, 'POST', undefined, { username, password })
      .then(({ token, expTime }) => {
        // 登录成功，将token写入localStorge
        localStorage.setItem('token', token)
        // 将过期时间写入localstorge
        localStorage.setItem('expTime', expTime)
      })
      .then(() => navigate('/'))
      .catch(({ msg }) =>
        setMessage({
          text: msg,
          state: 'error',
        })
      )
  }

  return (
    <SetupModel>
      <Body>
        <div className="picture" />
        <div className="login-body masked squid">
          <div className="titles">
            <div className="Login-title title text-center">登录账号</div>
            <div className="subtitle">登录获取更多高级功能</div>
          </div>
          <div className={`message-bar masked squid ${message.state}`} style={{ height: message.text ? '40px' : '0' }}>
            <span>{message.text}</span>
          </div>
          <div className="forms">
            <div className="flex multi-line grow">
              <div className="input-box">
                <input
                  type="text"
                  className="font-splatoon2"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-box">
                <input
                  type="password"
                  className="font-splatoon2"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="register">
            <div>
              没有账号？
              <span onClick={() => navigate('/register')}>注册一个</span>
            </div>
          </div>
          <div className="oprates-group">
            <span className="button is-rounded is-translucent-light" onClick={() => doLogin()}>
              登录
            </span>
          </div>
        </div>
      </Body>
    </SetupModel>
  )
}

const Body = styled.div`
  display: inherit;
  div.picture {
    background-image: url(${SalmonRunPic});
    flex: 1 100%;
    min-width: 160px;
    background-size: cover;
  }
  div.login-body {
    padding: 2rem;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 100%;
    div.titles {
      padding: 0.25rem 0;
      div.subtitle {
        color: #9f9f9f;
      }
    }

    div.message-bar {
      text-align: center;
      color: #fff;
      border-radius: 8px;
      transition: 300ms;
      overflow: hidden;
      margin: 10px 0;
      &.error {
        background-color: #ff5a5a;
      }
      &.success {
        background-color: #19d719;
      }
      span {
        display: inline-block;
        margin: 0.5rem;
      }
    }

    div.forms {
      max-width: 450px;
    }
    div.register {
      color: #fff;
      font-size: 12px;
      padding: 0.5rem 0;
      span {
        color: #ff5a5a;
        :hover {
          cursor: pointer;
          color: #ff8787;
        }
      }
    }
  }

  div.oprates-group {
    display: flex;
    justify-content: center;
    padding: 1rem 0 0 0;
    box-sizing: border-box;
    span.button {
      padding: 0.5rem 2rem;
      :active {
        transform: scale(0.9);
      }
    }
  }
`
