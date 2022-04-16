import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Model from '../components/Model'
import GearShowCase from '../components/GearShowCase'

import merchandisesAPI from '../interfaces/merchandises'

// 页头组件
export default function HeroHead(props: { setBlur: Function }) {
  const [isActive, setIsActive] = useState(false)
  const [splatNetData, setSplatNetData] = useState<merchandisesAPI>()

  useEffect(() => {
    fetch('https://splatoon2.ink/data/merchandises.json')
      .then((response) => response.json())
      .then((data) => setSplatNetData(data))
  }, [])

  return (
    <Body>
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
          <div className="group-right">
            <span
              className="font-splatoon2 button is-rounded is-translucent-dark"
              onClick={() => setIsActive(!isActive)}
            >
              SplatNet Gear
            </span>
          </div>
        </div>
      </div>
      <Model active={isActive} onClose={() => setIsActive(false)}>
        <div className="splatnet-gear">
          <div className="title font-splatoon1">Current SplatNet Gear</div>
          <div className="columns">
            {splatNetData &&
              splatNetData.merchandises.map((gear) => {
                return <GearShowCase gear={gear} />
              })}
          </div>
        </div>
      </Model>
    </Body>
  )
}

const Body = styled.div`
  margin-bottom: 2rem;
  .splatnet-gear {
    background: hsla(0, 0%, 71%, 0.25);
    border-radius: 20px;
    padding: 15px;
    div.title {
      font-size: 1.2rem;
      text-align: center;
    }
    div.columns {
      display: flex;
      flex-wrap: wrap;
    }
  }
`
