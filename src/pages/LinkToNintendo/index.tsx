import { useState } from 'react'
import styled from 'styled-components'
import img_copy_link from '@/assets/img/link_to_intendo/copy-link.png'
import SetupModel from '@/components/SetupModel'

export default function LinkToNintendo() {
  const [stage, setStage] = useState(0)
  const [sessionCode, setSessionCode] = useState('')

  const sendSessionCode = (session_code: string) => {}

  return (
    <SetupModel>
      <Body className="flex">
        <div className="titles">
          <div className="title">授权获取Nintendo信息</div>
          <div className="subtitle">粘贴获取到的登录凭证</div>
        </div>
        <div className="content">
          {stage === 0 && <div>当您准备好以后，点击下一步继续。</div>}
          {stage === 1 && (
            <>
              <div style={{ marginTop: '1rem' }}>完成Nintendo的登录后，在”選擇連動帳號“界面</div>
              <div>右键”选择此人“按钮，并在右键打开的菜单中选取”复制链接“</div>
              <div className="imgBox">
                <img src={img_copy_link} alt="img_copy_link" />
              </div>
            </>
          )}
          {stage === 2 && (
            <>
              <div>请将复制的链接粘贴在下面，并点击“完成”</div>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="npf71b963c1b7b6d119://auth#session_state=XXXXXXXXXXXX（示例）"
                  value={sessionCode}
                  onChange={(e) => setSessionCode(e.target.value)}
                />
              </div>
            </>
          )}
        </div>
        <div className="oprates-group">
          {stage === 1 && (
            <span className="text">
              如果您的页面没有正常打开，请<span className="link">点击这里</span>尝试
            </span>
          )}
          {stage <= 1 && (
            <span className="button is-rounded is-translucent-light" onClick={() => setStage(stage + 1)}>
              下一步
            </span>
          )}
          {stage === 2 && (
            <span
              className={`button is-rounded is-translucent-light ${
                !sessionCode.includes('npf71b963c1b7b6d119://auth#session_state=') && 'disabled'
              }`}
              onClick={() => sendSessionCode(sessionCode)}
            >
              完成
            </span>
          )}
        </div>
      </Body>
    </SetupModel>
  )
}

const Body = styled.div`
  padding: 1.5rem;
  text-align: center;
  min-width: 600px;
  min-height: 450px;
  flex-direction: column;
  justify-content: space-between;
  div.titles {
    div.title {
      font-size: 2rem;
    }
    div.subtitle {
      color: #9f9f9f;
    }
  }
  div.content {
    color: #e5e5e5;
    div.input-box {
      border-bottom: 1px #474747 solid;
      margin: 0.5rem auto;
      padding: 0.5rem;
      width: 80%;
      input {
        border: none;
        background-color: transparent;
        width: 100%;
        color: #fff;
        :focus-visible {
          outline: none;
        }
      }
    }
    div.imgBox {
      max-width: 80%;
      margin: 1.25rem auto;
      img {
        width: 100%;
      }
    }
  }
  div.oprates-group {
    span.text {
      color: #e5e5e5;
      font-size: 0.75rem;
      display: block;
      :not(:last-child) {
        margin-bottom: 1rem;
      }
    }
    span.link {
      color: rgb(230, 0, 18);
      cursor: pointer;
      transition: 0.3s;
      :hover {
        color: rgb(255, 46, 64);
      }
    }
    span.button {
      display: inline-block;
      padding: 8px 32px;
      background-color: rgb(230, 0, 18);
      transition: 0.3s;
      :hover {
        background-color: rgb(255, 46, 64);
        transform: scale(1.02);
      }
      :active {
        background-color: rgb(224, 39, 55);
        transform: scale(0.98);
      }

      &.disabled {
        background-color: #a3a3a3;
        :hover {
          cursor: not-allowed;
        }
      }
    }
  }
`
