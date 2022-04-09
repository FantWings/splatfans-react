import { useEffect, useState } from 'react'
import styled from 'styled-components'
import BattleStageBox from '../components/BattleStageBox'
import SalmonRunBox from '../components/salmonRunBox'
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
              <BattleStageBox data={schedules.regular} icon={RegluarBattleImg} />
              <BattleStageBox data={schedules.gachi} icon={RegluarBattleImg} />
              <BattleStageBox data={schedules.league} icon={RegluarBattleImg} />
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
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    margin-top: -0.75rem;
    :not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`

const RegluarBattleImg =
  'data:image/png;base64,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'
