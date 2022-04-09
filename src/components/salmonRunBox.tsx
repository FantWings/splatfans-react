import styled from 'styled-components'
import moment from 'moment'
import CountDown from './Countdown'

import BGSpots from '../assets/img/bg-spots.png'
import SalmonRunPic from '../assets/img/1600px-Splatoon_2_art_book_cover_art.png'
import MrGizz from '../assets/img/mr-grizz.png'
import { salmonRunAPI } from '../interfaces/salmon-run'

export default function SalmonRunBox(props: { data: salmonRunAPI }) {
  const { details, schedules } = props.data
  const covertTime = (timestamp: number) => moment(parseInt(timestamp + '000')).format('MM/DD HH:mm')

  return (
    <Body>
      <div className="hook-box font-splatoon2 schedule-box">
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
        <div className="columns">
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
                        backgroundImage: `url(https://splatoon2.ink/assets/splatnet${details[0].stage.image})`,
                      }}
                    >
                      <figure className="image is-16x9" />
                    </div>
                  </div>
                  <div className="weapons">
                    <div className="title">当前武器</div>
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
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABCCAYAAAChF3N/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpGMEFCNzBBNEIwN0VFNzExQjZCMUNBQzdEMTZCMzJCOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFN0FBREZDRjdFQjExMUU3OTc4REQ2QjU2OTFDMTY0MCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFN0FBREZDRTdFQjExMUU3OTc4REQ2QjU2OTFDMTY0MCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkYwQUI3MEE0QjA3RUU3MTFCNkIxQ0FDN0QxNkIzMkI5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkYwQUI3MEE0QjA3RUU3MTFCNkIxQ0FDN0QxNkIzMkI5Ii8+IDwvcmRmOkRlc2NyaXB0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"
                        alt=""
                      />
                    </div>
                    <div>
                      {covertTime(details[1].start_time)} - {covertTime(details[1].end_time)}
                    </div>
                  </div>
                  <div className="next-map">
                    <div
                      className="stage-image"
                      style={{
                        backgroundImage: `url(https://splatoon2.ink/assets/splatnet${details[1].stage.image})`,
                      }}
                    >
                      <figure className="image is-16x9" />
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
    </Body>
  )
}

const WeaponBox = (props: {
  weaponList: Array<{ id: string; weapon: { id: string; name: string; thumbnail: string; image: string } }>
}) => {
  const { weaponList } = props
  return (
    <>
      {weaponList.map((weapon) => {
        return (
          <div className="colunm" key={weapon.id}>
            <div className="image">
              <img src={`https://splatoon2.ink/assets/splatnet${weapon.weapon.image}`} alt="weapon" />
            </div>
          </div>
        )
      })}
    </>
  )
}

const Events = (props: { startTime: number; endTime: number }) => {
  const covertTime = (timestamp: number) => moment(parseInt(timestamp + '000')).format('MM/DD HH:mm')
  const { startTime, endTime } = props
  return (
    <div className="event">
      <div className="time-line">
        <div className="image is-4x3">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABCCAYAAAChF3N/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpGMEFCNzBBNEIwN0VFNzExQjZCMUNBQzdEMTZCMzJCOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFN0FBREZDRjdFQjExMUU3OTc4REQ2QjU2OTFDMTY0MCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFN0FBREZDRTdFQjExMUU3OTc4REQ2QjU2OTFDMTY0MCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkYwQUI3MEE0QjA3RUU3MTFCNkIxQ0FDN0QxNkIzMkI5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkYwQUI3MEE0QjA3RUU3MTFCNkIxQ0FDN0QxNkIzMkI5Ii8+IDwvcmRmOkRlc2NyaXB0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"
            alt=""
          />
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
  div.hook-box {
    // 背景样式
    background-color: #ff5600;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
    background-image: url(${BGSpots}),
      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURUdwTP///////////////////////////x1LVb4AAAAIdFJOUwAmJRkOEhcNpVTHdwAAAG1JREFUSMdjEGEAA0VCNEMAhMFMiGYYIoBRgTiaQVCYOJpwGEJpwmEYMFQCkcgwZGQgMgwFGUbT42h6HE2Po+lxND2OjPQoRKQ8o2AC3jCEyzMJFuANQ7g8gwmBdGmC7pahmw5H0+No+Tgi0iMAOIoo57MsGxkAAAAASUVORK5CYII=);
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
      mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAABmCAMAAAA6eNVMAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANtBLioAAAAQdFJOUwAQQCDwwKCAYOBwMLBQ0JD7FFHwAAACSUlEQVRo3sWa2Y7DIAxFE/Ytgf//2ulUmpGqkgBeYr9XpyIXLxdv21fkUG1s62Fd2DdkKAch/0cJGHhAsd8RgyD8N84MgWvbqCKt0w/T6MItH3wjDSdKX+QfjTwWvr829Pg2r/+Tgd7OWXpqLDF5/LvhwZu5CuAbU/gpfOTCG6FL9xcz1cfx4csE3vDhmx7SMyN94u4lTnyU/PSvUCO8ZcU7SeVNZL7GG0EWf8riR2WfG+9k8QPxceMH4mPHW1n8fd3hx1dZvJHF34rvAXyRxd+J7wm8l8VHWXw7ZPFFFt92Cnysr9YxJ8BUlgjwHj6URjw+YKwghcV/XN5K1fTAjm+PROID1g1PJD7gv1+eTE8UvqDzRcbgPRrvMDOeQuP7HffkhEuQrAN8vv/69Ipo3POwawPAd5seBfslxIGvUO2dJFZot+MuINWAnNgAe8jo3BmQJWRhnq6ncqQ0RPu9hAHzoXsd97B4erIWMQI87bjTdajdjrsulyqoE1yWndVuqlZA/MW45xanY/AbxMW4l/rJzxzE7z9XHbfuHUDR5M9Plx63rp830LjMYMPf2Yz68M6+wyfFZMOj9ztw+ESA5/EansC3jKbvjB73zHYPo8fNjW8Bi8c9/p1YPPLNPcviq1zWGXrc/His+LALD1Yu6Y0fWPjxVS7roMWHx9943I/stxW5rIMVHwXey2UdZNNDsu8BFx/JvoeTyzqojnunwSe5rIMRHxF+vNLEu97oZPHAjrsQ4YFND9mWGazjptstzXJZByo+TYc3PxSpCH6XThP6AAAAAElFTkSuQmCC);
      mask-size: 36px 29px;
      mask-repeat: no-repeat;
    }

    // 打孔样式
    /* -webkit-mask-image: url(data:image/png;base64,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1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr6NXR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29OnodvTp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19Oro1dHr6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+OXkevjl4dvTp6dfTq6NXRq6PX0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvY5eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06uh19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR5+gjl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dPezTAQkAAACAoP+vPaITguro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXRq6PX0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl4dvY5eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX06uh19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRJ6ijV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvY5eHb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06uh19Oro1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr6NXR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29OnodvTp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19Oro1dHr6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+OXkevjl4dvTp6dfTq6NXRq6PX0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6HX2COnp19Oro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr6NXR6+OXh29Onp19Oro1dHr6NXRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29OnodvTp6dfTq6NXRq6NXR6+OXkevjl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb2OXh29Onp19OrolfbpQAAAAABAkL/1BBuUQ6IDogOiA6KD6IDogOiA6IDogOiA6IDoIDogOiA6IDogOiA6IDogOogOiA6IDogOiA6IDogOiA6IDqIDogOiA6IDogOiA6IDooPogOiA6IDogOiA6IDowAg+YFmyhQ+ZRAAAAABJRU5ErkJggg==);
    mask-image: url(data:image/png;base64,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1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr6NXR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29OnodvTp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19Oro1dHr6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+OXkevjl4dvTp6dfTq6NXRq6PX0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvY5eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06uh19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR5+gjl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dPezTAQkAAACAoP+vPaITguro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXRq6PX0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl4dvY5eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX06uh19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRJ6ijV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvY5eHb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06uh19Oro1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr6NXR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29OnodvTp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19Oro1dHr6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+OXkevjl4dvTp6dfTq6NXRq6PX0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6HX2COnp19Oro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr6NXR6+OXh29Onp19Oro1dHr6NXRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29OnodvTp6dfTq6NXRq6NXR6+OXkevjl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb2OXh29Onp19OrolfbpQAAAAABAkL/1BBuUQ6IDogOiA6KD6IDogOiA6IDogOiA6IDoIDogOiA6IDogOiA6IDogOogOiA6IDogOiA6IDogOiA6IDqIDogOiA6IDogOiA6IDooPogOiA6IDogOiA6IDowAg+YFmyhQ+ZRAAAAABJRU5ErkJggg==);
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: 600px 1100px;
    mask-size: 600px 1100px;
    -webkit-mask-position: center top;
    mask-position: center top; */

    max-width: 580px;
    padding: 35px 10px 0px 10px;
    margin: auto;
    border-radius: 32px;
    overflow: hidden;

    // 标题样式
    .stage-tittle {
      display: flex;
      margin-top: 1rem;
      margin-bottom: 1rem;
      @media screen and (max-width: 720px) {
        flex-direction: column;
        align-items: center;
      }
      div.item {
        &.image-box {
          margin-left: 1rem;
          margin-right: 1rem;
        }
        div.title {
          font-size: 32px;
          line-height: 1.3;
        }
      }
    }

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
          flex: 1 120%;
          @media screen and (min-width: 960px) {
            border-radius: 8px;
          }
        }
        // 场次信息样式
        div.salmonRunInfo {
          padding: 5px 8px;
          div.open-info {
            margin-bottom: 0.5rem;
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
                div.tltle {
                  margin-bottom: 0.5rem;
                  justify-content: center;
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
            border-radius: 8px 8px 27px 8px;
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
              div.next-map {
                display: flex;
                align-items: center;
                div.stage-image {
                  flex-grow: 1;
                  flex-shrink: 0;
                  flex-basis: 0;
                }
                div.next-name {
                  flex: 1;
                }
                div.next-weapons {
                  flex: 1;
                  margin-right: 1rem;
                  align-items: center;
                  line-height: 0;
                  div.columns {
                    margin-top: 0.5rem;
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
      mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABc4AAABCCAMAAABZ5LUXAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANtBLioAAAAQdFJOUwAgoOAQwNBAgPCQYDCwcFCYYNRKAAACXUlEQVR42u3dzZKiMBSAUUB+EsSW93/aGQWkUTe946bOWU16mcVXKecmVDMAgeTuWu3SZb6k5Z+2BiCY5lXz/rnu5BwgpPt2Nl/XSc4BIhrXnOd13cs5QETLryvV9PqDnAMEPp3Xh7zbFoBottmWy++1bQEIptsGW4Zl3ZtsAYgnj+1rUHHqHnVv5RzgxG4pXYcPU3XQDnXlGhHAeXV19Te2DOCE+qqSc4D47nIOUIJKzgHkHICTqOUcoASjnAMU4SrnAEXorrWcA5TY959Xusc856aVc4CY+rXgt+cqT3IOENPyldDrdlyXc4CY8q/D+fw2nG53AOJ4hruTc4ASTufdYSXnAOEsv52nw0rOAaJZJ1vafjmc13IOEFBO26R528yf37ewQQCn1aX9q3LHeg+tW6EAUY7jg0v+AAUYvNkCUIDei4oAJRjlHKAESc4BSuDHFoAy+K9QgCK8PWgu5wBRNffhi7cbRPXyB7sFEC/z+xXR9vH6+ePCv10BiCe/Tujrc1yTnANEtA2l7x+asycAAW1TjPuXiewJQERrzi9yDlDS6TzLOUBE2wsA+4fm7AlAwMP522TL/7VNAYjmkvabRG3Kc25ac+cA5432lxuhtUv+ALE0rRcVAQo4m1eVnAPE9yPnACUY5BxAzgE4iaucA5Sgk3OAIhhUBChDblL6fnvo62UiGwYQwGUfXEz5sJRzgFC2NxTHZTnKOUBMy2/p07as5RwgpOHwwPnHtVEbBBAy50nOAUrI+SDnABGtTyxOx6WcA8SSh+NkyyDnAAFj3uyDLPfbPPcfNf8H6jx4r62DsMUAAAAASUVORK5CYII=);
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
      margin-left: 0.25rem;
      margin-right: 0.25rem;
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
