import styled from 'styled-components'
import moment from 'moment'
import CountDown from '@/components/Countdown'

import BGSpots from '@/assets/img/bg-spots.png'
import SalmonRunPic from '@/assets/img/1600px-Splatoon_2_art_book_cover_art.png'
import MrGizz from '@/assets/img/mr-grizz.png'
import { salmonRunAPI, weaponsList } from '@/interfaces/salmon-run'
import { salmonIcon, dotMask, cardHeaderMask, hookMask, tagMask } from '@/theme/baseImage'

export default function SalmonRunBox({ data }: { data: salmonRunAPI }) {
  const { details, schedules } = data
  const covertTime = (timestamp: number) => moment(parseInt(timestamp + '000')).format('MM/DD HH:mm')

  return (
    <Body>
      {/* <div id="hook"></div> */}
      <div className="hook-box font-splatoon2 schedule-box">
        <div className="content">
          {/* ------------------标题 ----------------*/}
          <div className="stage-tittle">
            <div className="item image-box">
              <div className="image is-48x48">
                <img src={MrGizz} alt="regular-battle-icon" />
              </div>
            </div>
            <div className="item">
              <div className="title font-splatoon1">Salmon Run</div>
            </div>
          </div>
          <div className="columns" style={{ marginTop: '1rem' }}>
            <div className="column salmonRunGear">
              <div className="image is-16x9"></div>
            </div>
            <div className="column">
              <div className="salmonRunInfo">
                <div className="open-info">
                  <div className="next-tag outside">正在开放</div>
                  <div className="time">
                    <span className="next-date">
                      {covertTime(details[0].start_time)} - {covertTime(details[0].end_time)}
                    </span>
                    <span className="count-down">{CountDown(details[0].end_time)}</span>
                  </div>
                  <div className="open-details">
                    <div className="map">
                      <div
                        className="stage-image"
                        style={{
                          backgroundImage: `url(https://app.splatoon2.nintendo.net${details[0].stage.image})`,
                        }}
                      >
                        <figure className="image is-16x9" />
                      </div>
                    </div>
                    <div className="weapons">
                      <div className="title" style={{ marginBottom: '0.5rem' }}>
                        当前武器
                      </div>
                      <div className="columns">
                        <WeaponBox weaponList={details[0].weapons} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="next-info">
                  <div className="next-tag inside">即将到来</div>
                  <div className="event">
                    <div className="time-line">
                      <div className="image is-4x3">
                        <img src={salmonIcon} alt="" />
                      </div>
                      <div>
                        {covertTime(details[1].start_time)} - {covertTime(details[1].end_time)}
                      </div>
                    </div>
                    <div className="next-map-info">
                      <div className="next-map">
                        <div
                          className="stage-image"
                          style={{
                            backgroundImage: `url(https://app.splatoon2.nintendo.net${details[1].stage.image})`,
                          }}
                        >
                          <figure className="image is-16x9" />
                        </div>
                      </div>
                      <div className="next-name">{details[1].stage.name}</div>
                      <div className="next-weapons">
                        <div className="columns">
                          <WeaponBox weaponList={details[1].weapons} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Events startTime={schedules[2].start_time} endTime={schedules[2].end_time} />
                  <Events startTime={schedules[3].start_time} endTime={schedules[3].end_time} />
                  <Events startTime={schedules[4].start_time} endTime={schedules[4].end_time} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Body>
  )
}

const WeaponBox = ({ weaponList }: { weaponList: Array<weaponsList> }) => {
  return (
    <>
      {weaponList.map((weapon, index) => {
        return (
          <div className="colunm" key={Number(weapon.id) <= 0 ? index : weapon.id}>
            <div className="image" style={{ padding: '0.25rem' }}>
              {Number(weapon.id) <= 0 ? (
                <img src={`https://app.splatoon2.nintendo.net${weapon.coop_special_weapon.image}`} alt="weapon" />
              ) : (
                <img src={`https://app.splatoon2.nintendo.net${weapon.weapon.image}`} alt="weapon" />
              )}
            </div>
          </div>
        )
      })}
    </>
  )
}

const Events = ({ startTime, endTime }: { startTime: number; endTime: number }) => {
  const covertTime = (timestamp: number) => moment(parseInt(timestamp + '000')).format('MM/DD HH:mm')
  return (
    <div className="event">
      <div className="time-line">
        <div className="image is-4x3">
          <img src={salmonIcon} alt="" />
        </div>
        <div>
          {covertTime(startTime)} - {covertTime(endTime)}
        </div>
      </div>
    </div>
  )
}

const Body = styled.div`
  justify-content: center;
  max-width: 600px;
  #hook {
    position: relative;
    background-position-y: bottom !important;
    width: 100%;
    height: 29px;
    /* top: -28px; */
    left: 0;
    mask-image: url(${hookMask});
    mask-size: 36px 29px;
    mask-repeat: no-repeat;
  }
  div.hook-box {
    // 背景样式
    background-color: #ff5600;
    padding-top: 1.5rem;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
    background-image: url(${BGSpots}), url(${dotMask});
    background-position: 50% top;
    background-size: 189px 189px, 40px 40px;

    &:before {
      content: '';
      position: absolute;
      background-position-y: bottom !important;
      width: 100%;
      height: 29px;
      top: -28px;
      left: 0;
      mask-image: url(${hookMask});
      mask-size: 36px 29px;
      mask-repeat: no-repeat;
    }

    mask-image: url(${cardHeaderMask});
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: 600px 1100px;
    mask-size: 600px 1100px;
    -webkit-mask-position: center top;
    mask-position: center top;

    max-width: 600px;
    margin: auto;
    border-radius: 32px;
    overflow: hidden;

    div.columns {
      div.column {
        // 当前装备样式
        &.salmonRunGear {
          background-image: url(${SalmonRunPic});
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: 50% 50%;
          z-index: 1;
          position: relative;
          flex: 1 100%;
          @media screen and (min-width: 960px) {
            border-radius: 0px 8px 0px 0px;
          }
        }
        // 场次信息样式
        div.salmonRunInfo {
          padding: 5px;
          div.time {
            line-height: 1.4;
          }
          div.open-info {
            margin-bottom: 0.25rem;
            color: #fff;
            div.open-details {
              display: flex;
              margin-top: 1rem;
              div.map {
                flex-grow: 1;
                flex-shrink: 0;
                flex-basis: 0;
              }
              div.weapons {
                flex-grow: 1;
                flex-shrink: 0;
                flex-basis: 0;
                text-align: center;
                margin-left: 1rem;
                margin-right: 1rem;
                font-size: 18px;
                div.tltle {
                  justify-content: center;
                  line-height: 2.5;
                }
                div.columns {
                  flex-direction: row;
                  div.column {
                    flex: 1 1;
                  }
                }
              }
            }
          }
          div.next-info {
            //当前地图样式
            overflow: hidden;
            color: #fff;
            justify-content: space-between;
            flex-direction: row;
            background: rgba(0, 0, 0, 0.7);
            padding: 5px 10px 10px;
            border-radius: 8px 8px 27px 27px;
            @media screen and (min-width: 960px) {
              border-radius: 8px 8px 27px 8px;
            }
            div.top-bar {
              justify-content: space-between;
              margin-bottom: 0rem;
              font-size: 20px;
            }
            div.event {
              :not(:last-child) {
                border-bottom: 0.1rem dashed #7a7a7a;
                padding-bottom: 0.1rem;
                margin-bottom: 0.1rem;
              }
              div.time-line {
                display: flex;
                div.image {
                  margin-right: 0.25rem;
                  width: 23px;
                }
              }
              div.next-map-info {
                display: flex;
                align-items: center;
                padding: 0.4rem 0 0.4rem 0;
                div.next-map {
                  width: 25%;
                  div.stage-image {
                    flex-grow: 1;
                    flex-shrink: 0;
                    flex-basis: 0;
                  }
                }
                div.next-name {
                  display: flex;
                  justify-content: center;
                  flex: 1;
                  margin: 0 0.5rem;
                  line-height: 1.25;
                }
                div.next-weapons {
                  flex: 1;
                  align-items: center;
                  line-height: 0;
                  div.columns {
                    margin-left: -0.2rem;
                    margin-right: -0.2rem;
                    flex-direction: row;
                  }
                }
              }
            }
          }
        }
      }
    }

    // 下一场旗标样式
    div.next-tag {
      background-color: #460fc8;
      display: inline-block;
      mask-image: url(${tagMask});
      mask-size: cover;
      mask-position: right center;
      mask-repeat: no-repeat;
      color: #fff;
      font-family: splatoon1;
      &.outside {
        padding: 2px 48px 2px 20px;
        margin: 0 0 10px -20px;
      }
      &.inside {
        padding: 0px 48px 0px 20px;
        margin: 4px 0 10px -12px;
        font-size: 14px;
      }
    }

    div.stage-image {
      /* margin-left: 0.25rem;
      margin-right: 0.25rem; */
      background-size: contain;
      background-repeat: no-repeat;
      border-radius: 10px;
      position: relative;
      box-sizing: border-box;
      :hover {
        cursor: pointer;
      }
    }
    figure {
      margin: 0;
      padding: 0;
    }
    .is-16x9 {
      padding-top: 56.5%;
    }
  }
`
