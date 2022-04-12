import { useEffect, useState } from 'react'
import styled from 'styled-components'
import BattleStageBox from '../components/BattleStageBox'
import SalmonRunBox from '../components/SalmonRunBox'
import { SchedulesAPI } from '../interfaces/schedules'
import { salmonRunAPI } from '../interfaces/salmon-run'

export default function HeroBody() {
  const [schedules, setSchedules] = useState<SchedulesAPI>()
  const [salmonRun, setSalmonRun] = useState<salmonRunAPI>()
  useEffect(() => {
    fetch('https://splatoon2.ink/data/schedules.json')
      .then((response) => response.json())
      .then((data) => setSchedules(data))
  }, [])

  useEffect(() => {
    fetch('https://splatoon2.ink/data/coop-schedules.json')
      .then((response) => response.json())
      .then((data) => setSalmonRun(data))
  }, [])

  return (
    <Body>
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
`
