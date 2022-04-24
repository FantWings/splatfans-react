import { useState } from 'react'
import SalmonRunPic from '@/assets/img/1600px-Splatoon_2_art_book_cover_art.png'
import styled from 'styled-components'
import SetupModel from '@/components/SetupModel'

export default function LoginAccount() {
  const [register, setRegister] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [subtitle, setSubtitle] = useState('登录即可获取更多功能')
  const doLogin = () => {}
  const doRegister = () => {}
  return (
    <SetupModel>
      <Body>
        <div className="picture" />
        <div className="login-body masked squid">
          <div className="titles">
            <div className="Login-title title text-center">{register ? '注册' : '登录'}</div>
            <div className="subtitle">{subtitle}</div>
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
            {register ? (
              <span className="register">
                已经拥有账号了？
                <span
                  onClick={() => {
                    setRegister(false)
                    setSubtitle('登录即可获取更多功能')
                  }}
                >
                  返回登录
                </span>
              </span>
            ) : (
              <span className="register">
                没有账号？
                <span
                  onClick={() => {
                    setRegister(true)
                    setSubtitle('创建账号，让我们开始吧')
                  }}
                >
                  注册一个
                </span>
              </span>
            )}
          </div>

          <div className="oprates-group">
            {register ? (
              <span className="button is-rounded is-translucent-light" onClick={() => doRegister()}>
                注册
              </span>
            ) : (
              <span className="button is-rounded is-translucent-light" onClick={() => doLogin()}>
                登录
              </span>
            )}
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
      div.subtitle {
        color: #9f9f9f;
      }
    }
    div.forms {
      margin: 1rem 0;
      span.register {
        color: #fff;
        font-size: 12px;
        span {
          color: #ff5a5a;
          :hover {
            cursor: pointer;
            color: #ff8787;
          }
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
