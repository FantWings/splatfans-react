import { useEffect, useState } from 'react'
import styled from 'styled-components'
import BattleStageBox from './BattleStageBox'
import SalmonRunBox from './SalmonRunBox'
import { SchedulesAPI } from '../../interfaces/schedules'
import { salmonRunAPI } from '../../interfaces/salmon-run'
import merchandisesAPI from '../../interfaces/merchandises'
import { API_SPLATINK } from '@/const/api'

import Model from '../../components/Model'
import GearShowCase from '../../components/GearShowCase'

export default function Schedules() {
  const [schedules, setSchedules] = useState<SchedulesAPI>()
  const [salmonRun, setSalmonRun] = useState<salmonRunAPI>()
  const [isActive, setIsActive] = useState(false)
  const [splatNetData, setSplatNetData] = useState<merchandisesAPI>()
  useEffect(() => {
    fetch(`${API_SPLATINK}/schedules.json`)
      .then((response) => response.json())
      .then((data) => setSchedules(data))
  }, [])

  useEffect(() => {
    fetch(`${API_SPLATINK}/coop-schedules.json`)
      .then((response) => response.json())
      .then((data) => setSalmonRun(data))
  }, [])

  useEffect(() => {
    fetch(`${API_SPLATINK}/merchandises.json`)
      .then((response) => response.json())
      .then((data) => setSplatNetData(data))
  }, [])

  return (
    <Body>
      <SubHeader>
        <span className="font-splatoon2 button is-rounded is-translucent-dark" onClick={() => setIsActive(!isActive)}>
          SplatNet 商店
        </span>
      </SubHeader>
      <div className="container">
        <div className="columns">
          {schedules && (
            <>
              <BattleStageBox data={schedules.regular} />
              <BattleStageBox data={schedules.gachi} />
              <BattleStageBox data={schedules.league} />
            </>
          )}
        </div>
        <div className="columns" style={{ alignItems: 'center' }}>
          {salmonRun && <SalmonRunBox data={salmonRun} />}
        </div>
      </div>
      <Model active={isActive} onClose={() => setIsActive(false)}>
        <div className="splatnet-gear">
          <div className="title font-splatoon1">当前正在供应</div>
          <div className="columns">
            {splatNetData &&
              splatNetData.merchandises.map((gear) => {
                return <GearShowCase gear={gear} key={gear.id} />
              })}
          </div>
        </div>
      </Model>
    </Body>
  )
}

const Body = styled.div`
  div.columns {
    display: flex;
    @media screen and (max-width: 960px) {
      flex-direction: column;
    }
    justify-content: center;
    /* margin-left: -0.75rem;
    margin-right: -0.75rem;
    margin-top: -0.75rem; */
    :not(:last-child) {
      margin-bottom: 2rem;
    }
  }
  .splatnet-gear {
    background: hsla(0, 0%, 71%, 0.25);
    border-radius: 20px;
    padding: 15px;
    div.title {
      font-size: 1.5rem;
      text-align: center;
      font-weight: 500;
    }
    div.columns {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`
const SubHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`
