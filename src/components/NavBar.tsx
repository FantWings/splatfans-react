import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '@/context/authContextProvider'
import { ReactComponent as IconUser } from '@/assets/icons/user.svg'
import { ReactComponent as IconLogOut } from '@/assets/icons/logout.svg'
import { ReactComponent as IconChain } from '@/assets/icons/chain.svg'
import styled from 'styled-components'
import fetchData from '@/utils/fetch'
import { API_SERVER } from '@/const/api'

// 页头组件
export default function NavBar() {
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState(0)
  const {
    loggedIn,
    token,
    userInfo: { avatar, username, iksm },
  } = useContext(AuthContext)

  const doLogout = () => {
    fetchData(`${API_SERVER}/auth/logout`, 'DELETE', { token })
      .then(() => localStorage.clear())
      .then(() => {
        window.location.reload()
      })
  }

  const DropDownBox = () => {
    return (
      <div className="drop-down masked squid">
        <div className="content">
          <div className="userinfo">
            <div className="nickname">{username}</div>
            <div className="connect-state">{iksm ? '已链接至任天堂账号' : '未链接至任天堂账号'}</div>
          </div>
          <div className="oprates">
            <div
              className={`link-item masked ${isHovered === 1 ? 'spots' : ''}`}
              onClick={() => navigate('/connect')}
              onMouseEnter={() => setIsHovered(1)}
              onMouseLeave={() => setIsHovered(0)}
            >
              <span className="icon">
                <IconChain />
              </span>
              <span>{iksm ? '解绑链接的账号' : '链接到Nintendo'}</span>
            </div>
          </div>
          <div className="split-line"></div>
          <div
            className={`link-item masked logout ${isHovered === 99 ? 'spots' : ''}`}
            onClick={() => doLogout()}
            onMouseEnter={() => setIsHovered(99)}
            onMouseLeave={() => setIsHovered(0)}
          >
            <span className="icon">
              <IconLogOut />
            </span>
            <span>退出登录</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <NavBarBody className="masked squid">
      <div className="container">
        <div className="groups flex-app">
          <div className="group-left">
            <div className="item">
              <div className="title size-1 font-splatoon1 is-inline">Splatoon 2</div>
            </div>
          </div>
          <RightGroup>
            <div className="user">
              <div className="avatar">
                {loggedIn ? (
                  <img src={avatar} alt={username} />
                ) : (
                  <span onClick={() => navigate('/login')}>
                    <IconUser id="guestIcon" />
                  </span>
                )}
                {loggedIn && <DropDownBox />}
              </div>
            </div>
          </RightGroup>
        </div>
      </div>
    </NavBarBody>
  )
}

// 页头样式
const NavBarBody = styled.div`
  background-color: #2e2e2e;
  margin-bottom: 2rem;
  div.groups {
    height: 64px;
  }
`

const RightGroup = styled.div`
  position: relative;
  div.user {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #fff;
    padding: 0.5rem;
    border-radius: 5px;
    transition: 300ms;
    :hover {
      div.drop-down {
        display: block;
      }
    }

    div.avatar {
      height: 32px;
      width: 32px;
      border-radius: 10rem;
      overflow: hidden;
      div.img {
        width: 100%;
      }
      svg#guestIcon {
        transition: 300ms;
        fill: #fff;
      }
    }

    div.drop-down {
      z-index: 1;
      background-color: #333;
      padding: 1rem;
      border-radius: 10px;
      position: absolute;
      right: 8px;
      top: 48px;
      width: 200px;
      display: none;
      div.content {
        display: flex;
        flex-direction: column;
        div.userinfo {
          margin-bottom: 0.5rem;
          div.nickname {
            font-size: 18px;
            font-weight: 500;
          }
          div.connect-state {
            font-size: 12px;
          }
        }
        div.split-line {
          margin: 8px 0;
          width: 100%;
          border-top: #4e4e4e solid 1px;
        }

        div.oprates {
          margin: 0.25rem 0;
        }

        div.link-item {
          display: flex;
          align-items: center;
          padding: 5px 8px;
          border-radius: 8px;
          transition: 300ms;
          :hover {
            cursor: pointer;
            background-color: #ff5656;
          }
          span.icon {
            fill: #fff;
            width: 18px;
            height: 18px;
            display: inline-block;
            margin-right: 18px;
          }
        }
      }
    }
  }
`
