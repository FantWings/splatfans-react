import styled from 'styled-components'
import CountDown from './Countdown'
import { gears } from '../interfaces/merchandises'
import { gearShowCaseBgMask, squidMask, ramdomIcon, cashIcon, tagMask } from '../assets/baseImage'

import merchandiseBackGroundImg from '../assets/img/bg-circles.png'

export default function GearShowCase(props: { gear: gears }) {
  const { gear } = props
  return (
    <Body className="column">
      <div className="merchandise-box font-splatoon2">
        <div className="band">
          <div className="img">
            <img src={`https://splatoon2.ink/assets/splatnet${gear.gear.brand.image}`} alt="BrandIcon" />
          </div>
        </div>
        <div className="skills flex-column">
          <div className="main-skill main-skill-bg">
            <img src={`https://splatoon2.ink/assets/splatnet${gear.skill.image}`} alt="Main-Skill-icon" />
          </div>
          <div className="sub top-gap">
            <img src={ramdomIcon} alt="locked-skill" />
          </div>
          <div className="sub top-gap">
            <img src={ramdomIcon} alt="locked-skill" />
          </div>
        </div>
        <div className="remaining-time squid">{CountDown(gear.end_time)}</div>
        <div className="gear-image">
          <div className="image">
            <img src={`https://splatoon2.ink/assets/splatnet${gear.gear.image}`} alt="cloths" />
          </div>
        </div>
        <div className="gear-name">
          <div className="overlay">
            <div className="info-overlay original-gear">
              <span className="title">Original Gear</span>
              <div className="skill-container">
                <div className="skills flex-row">
                  <div className="main-skill main-skill-bg">
                    <img
                      src={`https://splatoon2.ink/assets/splatnet${gear.original_gear.skill.image}`}
                      alt="Main-Skill-icon"
                    />
                  </div>
                  <div className="sub">
                    <img src={ramdomIcon} alt="locked-skill" />
                  </div>
                  <div className="sub">
                    <img src={ramdomIcon} alt="locked-skill" />
                  </div>
                </div>
              </div>
            </div>
            <div className="info-overlay common-ability">
              <span className="title">Common gear ability</span>
              <div className="skill-container">
                <div className="skills flex-row">
                  <div className="main-skill main-skill-bg">
                    <img
                      src={`https://splatoon2.ink/assets/splatnet${gear.gear.brand.frequent_skill.image}`}
                      alt="Main-Skill-icon"
                    />
                  </div>
                  <div style={{ marginLeft: '0.25rem' }}>{gear.gear.brand.frequent_skill.name}</div>
                </div>
              </div>
            </div>
          </div>
          <span>{gear.gear.name}</span>
        </div>
        <div className="bottom-bar squid">
          <img src={cashIcon} alt="cash" className="cash" />
          <div className="cost">{gear.price}</div>
        </div>
      </div>
    </Body>
  )
}

const Body = styled.div`
  flex: none;
  width: 50%;
  @media screen and (min-width: 768px) {
    width: 33.333%;
  }
  padding: 8px;
  box-sizing: border-box;
  div.merchandise-box {
    display: inline-block;
    background-image: url(${merchandiseBackGroundImg});
    background-position: 50% top;
    background-size: 240px 120px;

    position: relative;
    -webkit-mask-size: 500px 800px;
    mask-size: 500px 800px;
    background-color: #f5f5f5;
    color: #0a0a0a;
    border-radius: 15px;
    padding: 38px 10px 0 10px;
    transition: transform 0.2s ease;

    :hover {
      transform: rotate(-1.4deg) scale(1.05);
      div.overlay {
        opacity: 1;
      }
    }
    mask-image: url(${gearShowCaseBgMask});
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: 600px 960px;
    mask-size: 600px 960px;
    -webkit-mask-position: center top;
    mask-position: center top;
  }

  img {
    width: 100%;
    height: auto;
  }

  .squid {
    background-image: url(${squidMask});
    background-position: top;
    background-size: 80px 80px;
  }

  div.band {
    position: absolute;
    top: 6px;
    left: 6px;
    div.img {
      height: 32px;
      width: 32px;
    }
  }
  div.skills {
    display: flex;
    &.flex-column {
      position: absolute;
      top: 6px;
      right: 6px;
      flex-direction: column;
      align-items: center;
    }
    &.flex-row {
      align-items: center;
      flex-direction: row;
    }
    div.main-skill {
      height: 32px;
      width: 32px;
      &.main-skill-bg {
        display: inline-block;
        line-height: 0;
        vertical-align: middle;
        padding: 3px;
        background: #000;
        border-radius: 50%;
      }
    }
    div.sub {
      height: 25px;
      width: 25px;
      &.top-gap {
        margin-top: 0.2rem;
      }
    }
  }
  div.remaining-time {
    color: #fff;
    background-color: #460fc8;
    display: inline-block;
    padding: 2px 48px 2px 20px;
    margin: 0 0 0 -23px;
    line-height: 1.5;
    padding-right: 1.7rem;
    mask-image: url(${tagMask});
    -webkit-mask-size: cover;
    mask-size: cover;
    -webkit-mask-position: right center;
    mask-position: right center;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
  }
  div.gear-image {
    margin: 0 25px;
  }
  div.gear-name {
    text-align: center;
    div.overlay {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 45px;
      margin: 0 6px;
      opacity: 0;
      transition: 0.3s ease;

      div.info-overlay {
        margin-top: 2px;
        background: hsla(0, 0%, 96.1%, 0.9);
        border-radius: 10px;
        padding: 2px;
        span.title {
          display: block;
          text-align: left;
          font-size: 0.75rem;
        }
        div.main-skill {
          height: 24px;
          width: 24px;
        }
        div.sub {
          margin-left: 7px;
          width: 18px;
        }
      }
    }
  }
  div.bottom-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1dd6ad;
    margin-top: 5px;
    margin-left: -10px;
    margin-right: -10px;
    padding: 4px 10px;
    color: #f5f5f5;
    img.cash {
      width: 24px;
      height: 24px;
      vertical-align: bottom;
    }
    div.cost {
      display: inline-block;
      margin: 0 0.25rem;
      line-height: 0;
    }
  }
`
