import moment from 'moment'
import styled from 'styled-components'
import { schedules } from '@/interfaces/schedules'
import { stageIcon, cardHeaderMask, squidMask, tagMask } from '@/theme/baseImage'
import CountDown from '@/components/Countdown'
import MapShowCase from '@/components/MapShowCase'

export default function BattleStageBox({ data }: { data: Array<schedules> }) {
  const { game_mode, start_time, end_time, stage_a, stage_b, rule } = data[0]
  const next_battle = data[1]

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

    mask-image: url(${cardHeaderMask});
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
        background-image: linear-gradient(180deg, transparent, rgba(36, 36, 36, 0.1)), url(${squidMask});
        background-position: top;
        background-size: 100% 100%, 80px 80px;
      }

      // 下一场旗标样式
      div.next-tag {
        background-color: #460fc8;
        display: inline-block;
        padding: 2px 48px 2px 20px;
        margin: 0 0 10px -20px;
        mask-image: url(${tagMask});
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
