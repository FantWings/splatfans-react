import styled from 'styled-components'
import { schedules } from '../interfaces/schedules'
import { stageIcon } from '../theme/baseImage'
import moment from 'moment'
import CountDown from './Countdown'
import MapShowCase from './MapShowCase'

export default function BattleStageBox(props: { data: Array<schedules> }) {
  const { game_mode, start_time, end_time, stage_a, stage_b, rule } = props.data[0]
  const next_battle = props.data[1]

  const covertTime = (timestamp: number) => moment(parseInt(timestamp + '000')).format('HH:mm')

  return (
    <Body>
      <div className="column">
        <div className={`font-splatoon2 schedule-box masked ${game_mode.key}`}>
          {/* ------------------标题 ----------------*/}
          <div className="stage-tittle">
            <div className="item image-box">
              <div className="image is-48x48">
                <img src={stageIcon[game_mode.key]} alt="regular-battle-icon" />
              </div>
            </div>
            <div className="item">
              <div className="title font-splatoon1">{game_mode.name}</div>
            </div>
          </div>
          {/* ------------------当前地图 ----------------*/}
          <div className="current-stage">
            <div className="groups top-bar">
              <div className="group-left">
                <div className="group-item title-color is-size-5">{rule.name}</div>
              </div>
              <div className="group-right">
                <div className="group-item">
                  {covertTime(start_time)} – {covertTime(end_time)}
                </div>
              </div>
            </div>
            <div className="map-box">
              <MapShowCase mapUrl={stage_a.image} name={stage_a.name} />
              <MapShowCase mapUrl={stage_b.image} name={stage_b.name} />
            </div>
          </div>
          <div className="next-tag">下一场</div>
          {/* ------------------下一场 ----------------*/}
          <div className="next-stage">
            <div className="mode">{next_battle.rule.name}</div>
            <div className="time">
              <span className="count-down">{CountDown(next_battle.start_time)}</span>
              <span className="next-date">
                {covertTime(next_battle.start_time)} - {covertTime(next_battle.end_time)}
              </span>
            </div>
          </div>
          <div className="next-stage-maps">
            <div className="map-box">
              <MapShowCase mapUrl={next_battle.stage_a.image} name={next_battle.stage_a.name} />
              <MapShowCase mapUrl={next_battle.stage_b.image} name={next_battle.stage_b.name} />
            </div>
          </div>
          <div className="next-stage-options">
            <span className="button is-rounded is-translucent-light">
              <span className="icon squid-icon-tilt">
                <span className="fa squid-squid" />
              </span>
              查询未来全部地图（暂未做完）
            </span>
          </div>
        </div>
      </div>
    </Body>
  )
}

const Body = styled.div`
  flex: 1;
  div.column {
    flex-grow: 1;
    margin: 0rem 0.75rem;
    @media screen and (max-width: 960px) {
      margin: 0.75rem 0rem;
    }

    // 打孔样式
    -webkit-mask-image: url(data:image/png;base64,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1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr6NXR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29OnodvTp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19Oro1dHr6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+OXkevjl4dvTp6dfTq6NXRq6PX0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvY5eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06uh19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR5+gjl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dPezTAQkAAACAoP+vPaITguro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXRq6PX0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl4dvY5eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX06uh19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRJ6ijV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvY5eHb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06uh19Oro1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr6NXR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29OnodvTp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19Oro1dHr6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+OXkevjl4dvTp6dfTq6NXRq6PX0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6HX2COnp19Oro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr6NXR6+OXh29Onp19Oro1dHr6NXRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29OnodvTp6dfTq6NXRq6NXR6+OXkevjl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb2OXh29Onp19OrolfbpQAAAAABAkL/1BBuUQ6IDogOiA6KD6IDogOiA6IDogOiA6IDoIDogOiA6IDogOiA6IDogOogOiA6IDogOiA6IDogOiA6IDqIDogOiA6IDogOiA6IDooPogOiA6IDogOiA6IDowAg+YFmyhQ+ZRAAAAABJRU5ErkJggg==);
    mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAZACAMAAADdCpjyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANtBLioAAAAQdFJOUwAgYJCAoMBA8BBwUDDgsNCpkMtMAAAOMklEQVR42uzcOXLCQBRF0ZbUGlpM2v9qTeDAWGT84Lt9Tkz0qFsaoRxA94oJQOiA0AGhA0IHhA4IHRA6IHQQOiB0QOiA0AGhA0IHhA4InePYlmWzgtDpuvI6lKehal3odGtu5VubrSF0+lTLD9UeQqfL43l54ZgudHq8Pm+voTfX6UKn8xN3J+9Cp0/D79AHmwid3tzKyc0qQqczyzn0xSpC54/a5sv6zvUc+vXtB8fZXTqhk1xt5WNtsqPQyXw4X0uI1UFd6OQV1PmzdFsKnbTn7SWMh+xCJ+uJe4sL3XtzQiepqQRyQ07odH6F7ipd6OTVIkNv9hQ6Ob/NUPYUOikNkZ37yYvQyekSGfrFnkInpTkydH9AI3Ry8hwdof8H97jQ79YUOlmNUZ2PthQ6ee0xne+WFDqZLQGvx63+ekboZPeY9vUDY33YUOiA0AGhA0IHhA4IHRA6CB0QOiB0QOiA0AGhA0IHhA4IHYQOCB0QOiB0QOiA0AGhA0IHoQNCB4QOCB0QOiB0QOiA0EHogNABoQNCB4QOCB0QOiB0QOggdEDogNABoQNCB4QOCB0QOggdEDogdEDogNABoQNCB4QOQgeEDggdEDogdEDogNABoQNCB6EDQgeEDggdEDogdEDogNBB6IDQAaEDQgeEDggdEDogdBA6IHRA6IDQAaEDQgeEDggdhG4CEDogdEDogNABoQNCB4QOCB2EDggdEDogdEDogNABoQNCB6EDQgeEDggdEDogdEDogNBB6IDQAaEDQgeEDggdEDogdEDoIHRA6IDQAaEDQgeEDggdEDoIHRA6IHRA6IDQAaEDQgeEDkIHhA4IHRA6IHRA6IDQAaEDQgehA0IHhA4IHRA6IHRA6IDQQeiA0AGhA0IHhA4IHRA6IHQQOiB0QOiA0AGhA0IHhA4IHRA6CB0QOiB0QOiA0AGhA0IHhA5CB4QOCB0QOiB0QOiA0AGhg9ABoQNCB4QOCB0QOiB0QOiA0EHogNABoQNCB4QOCB0QOiB0EDogdEDogNABoQNCB4QOCB2EDggdEDogdEDogNABoQNCB4QOQgeEDggdEDogdEDogNABoYPQAaEDQgeEDggdEDogdEDoIHRA6IDQAaEDQgeEDggdEDogdBA6IHRA6IDQAaEDQgeEDggdhA4IHRA6IHRA6IDQAaEDQgehA0IHhA4IHRA6IHRA6IDQAaGD0AGhA0IHhA4IHRA6IHRA6CB0QOiA0AGhA0IHhA4IHRA6CB0QOiB0QOiA0AGhA0IHhA4IHYQOCB0QOiB0QOiA0AGhA0IHoQNCB4QOCB0QOiB0QOiA0EHogNABoQNCB4QOCB0QOiB0QOggdEDogNABoQNCB4QOCB0QOggdEDogdEDogNABoQNCB4QOQgeEDggdEDogdEDogNABoYPQTQBCB4QOCB0QOiB0QOiA0AGhg9ABoQNCB4QOCB0QOiB0QOggdEDogNABoQNCB4QOCB0QOggdEDogdEDogNABoQNCB4QOCB2EDggdEDogdEDogNABoQNCB6EDQgeEDggdEDogdEDogNBB6IDQAaEDQgeEDggdEDogdEDoIHRA6IDQAaEDQgeEDggdEDoIHRA6IHRA6IDQAaEDQgeEDkIHhA4IHRA6IHRA6IDQAaEDQgehA0IHhA4IHRA6IHRA6IDQQeiA0AGhA0IHhA4IHRA6IHQQOiB0QOiA0AGhA0IHhA5f7NMBCQAAAICg/689ohOCOnp19Dp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXRq6PX0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl4dvY5eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX06uh19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro1dHr6NXR6+OXh29Onp19Oro1dHr6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29OnodvTp6dfTq6NXRq6NXR6+OXkevjl4dvTp6dfTq6NXRq6PX0aujV0evjl4dvTp6dfTq6HX0Cero1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr6NXR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29OnodvTp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19Oro1dHr6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+OXkevjl4dvTp6dfTq6NXRq6PX0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvY5eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06uh19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR5+gjl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dPezTAQkAAACAoP+vPaITguro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXRq6PX0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl4dvY5eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX06uh19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRJ6ijV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvY5eHb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06uh19Oro1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr6NXR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29OnodvTp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19Oro1dHr6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+OXkevjl4dvTp6dfTq6NXRq6PX0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6HX2COnp19Oro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr6NXR6+OXh29Onp19Oro1dHr6NXRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29OnodvTp6dfTq6NXRq6NXR6+OXkevjl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb2OXh29Onp19OrolfbpQAAAAABAkL/1BBuUQ6IDogOiA6KD6IDogOiA6IDogOiA6IDoIDogOiA6IDogOiA6IDogOogOiA6IDogOiA6IDogOiA6IDqIDogOiA6IDogOiA6IDooPogOiA6IDogOiA6IDowAg+YFmyhQ+ZRAAAAABJRU5ErkJggg==);
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: 600px 960px;
    mask-size: 600px 960px;
    -webkit-mask-position: center top;
    mask-position: center top;

    // 盒子边距
    div.schedule-box {
      max-width: 580px;
      padding: 35px 10px 10px 10px;
      margin: auto;
      border-radius: 32px;
      overflow: hidden;

      // 盒子颜色
      &.regular {
        background-color: #19d719;
      }
      &.gachi {
        background-color: #f54910;
      }
      &.league {
        background-color: #f02d7d;
      }

      // 背景斜纹样式
      &.masked {
        background-image: linear-gradient(180deg, transparent, rgba(36, 36, 36, 0.1)),
          url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAADiBAMAAAChPgbkAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAqUExURRcXF0dwTBUVFRYWFgAAABoaGhkZGRUVFRgYGAAAAAAAAB4eHiQkJBISEkRDNy8AAAAOdFJOUxYAGBcDEwoMFQUBEQcOBwHpdgAAAjdJREFUeNrt271NBDEUReGnjUlGIoGICCKkbYIKqIASqIEm6IGMDiiBjtj5XXvGz9k9Cde5dfTFvo6Xc6TnacjP/Xd+7/TbuRi3r52b752bXw/5xedecaCRMdDIGGjkpQgjL0UYORZZ5FhkkVMRRU5FFDkXSeRcJJFLEUQuRRC5FjnkWuSQWxFDbkUMeS1SyGuRQhZFCFkUIWRZZJBlkUFWRQRZFRFkXSSQdZFA7ooAclcEkPuiHrkv6pGHohx5KMqRx6IaeSyqkY2iGNkoipGtohbZKmqRzaIU2SxKke2iEtkuKpFJUYhMikJkVtQhs6IOmRZlyLQoQ+ZFFTIvqpCdogjZKYqQvaIGGW80Mh5pZJxoZBhppJFGGmmkkUYaaaSRRhpppJFGGmmkkUYaaeR/Rp5pZHzQyPikkXFHI2OgkTHQyBho5KUII8f3RxY5Flnk9MaKIqciipzfkUnkXCSRy1s5iFyKIHLdA3DItcght80DhtyKGPK666CQ1yKFLLYrELIoQshyn8MgyyKDrDZICLIqIsh6Z0Ug6yKB3G3JAOSuCCD3ezk9cl/UIw+bQDnyUJQjj7tHNfJYVCMb204xslEUI1v7VS2yVdQimxtdKbJZlCLbO2Qlsl1UIpOttRCZFIXIbE+uQ2ZFHTLdzMuQaVGGzP8FqJB5UYXs/H0QITtFEbL3v0OD7BU1yPihkXFDIwNHhpFGGmmkkUYaaaSRRhpppJFGGmmkkUYaaaSRRhoJIgNH/gHUGcb6oO4YfwAAAABJRU5ErkJggg==);
        background-position: top;
        background-size: 100% 100%, 80px 80px;
      }

      // 下一场旗标样式
      div.next-tag {
        background-color: #460fc8;
        display: inline-block;
        padding: 2px 48px 2px 20px;
        margin: 0 0 10px -20px;
        mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABc4AAABCCAMAAABZ5LUXAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANtBLioAAAAQdFJOUwAgoOAQwNBAgPCQYDCwcFCYYNRKAAACXUlEQVR42u3dzZKiMBSAUUB+EsSW93/aGQWkUTe946bOWU16mcVXKecmVDMAgeTuWu3SZb6k5Z+2BiCY5lXz/rnu5BwgpPt2Nl/XSc4BIhrXnOd13cs5QETLryvV9PqDnAMEPp3Xh7zbFoBottmWy++1bQEIptsGW4Zl3ZtsAYgnj+1rUHHqHnVv5RzgxG4pXYcPU3XQDnXlGhHAeXV19Te2DOCE+qqSc4D47nIOUIJKzgHkHICTqOUcoASjnAMU4SrnAEXorrWcA5TY959Xusc856aVc4CY+rXgt+cqT3IOENPyldDrdlyXc4CY8q/D+fw2nG53AOJ4hruTc4ASTufdYSXnAOEsv52nw0rOAaJZJ1vafjmc13IOEFBO26R528yf37ewQQCn1aX9q3LHeg+tW6EAUY7jg0v+AAUYvNkCUIDei4oAJRjlHKAESc4BSuDHFoAy+K9QgCK8PWgu5wBRNffhi7cbRPXyB7sFEC/z+xXR9vH6+ePCv10BiCe/Tujrc1yTnANEtA2l7x+asycAAW1TjPuXiewJQERrzi9yDlDS6TzLOUBE2wsA+4fm7AlAwMP522TL/7VNAYjmkvabRG3Kc25ac+cA5432lxuhtUv+ALE0rRcVAQo4m1eVnAPE9yPnACUY5BxAzgE4iaucA5Sgk3OAIhhUBChDblL6fnvo62UiGwYQwGUfXEz5sJRzgFC2NxTHZTnKOUBMy2/p07as5RwgpOHwwPnHtVEbBBAy50nOAUrI+SDnABGtTyxOx6WcA8SSh+NkyyDnAAFj3uyDLPfbPPcfNf8H6jx4r62DsMUAAAAASUVORK5CYII=);
        mask-size: cover;
        mask-position: right center;
        mask-repeat: no-repeat;
        color: #fff;
        font-family: splatoon1;
      }

      //当前地图样式
      .current-stage {
        color: #fff;
        justify-content: space-between;
        flex-direction: row;
        background: rgba(0, 0, 0, 0.7);
        padding: 5px 10px 10px;
        margin: 0 -5px 15px;
        border-radius: 12px;
        div.top-bar {
          justify-content: space-between;
          margin-bottom: 0rem;
          font-size: 16px;
        }
      }

      div.next-stage {
        display: flex;
        justify-content: space-between;
        color: #fff;
        margin-bottom: 0.25rem;
        font-size: 12px;
        align-items: center;
        div.mode {
          font-size: 20px;
        }
        span.count-down,
        span.next-date {
          line-height: 1.2;
          display: block;
          text-align: right;
        }
        div.next-stage-maps {
          padding-top: 0.35rem;
          display: block;
        }
      }

      div.next-stage-options {
        display: flex;
        justify-content: center;
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
      }
      span.icon {
        &.squid-icon-tilt {
        }
      }

      div.map-box {
        display: flex;
        margin-left: -0.25rem;
        margin-right: -0.25rem;
      }
    }
  }
`
