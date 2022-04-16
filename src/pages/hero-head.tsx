import styled from 'styled-components'

// 页头组件
export default function HeroHead(props: { setBlur: Function }) {
  return (
    <Body className="masked squid">
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
    </Body>
  )
}

const Body = styled.div`
  background-color: #2e2e2e;
  margin-bottom: 2rem;
`
