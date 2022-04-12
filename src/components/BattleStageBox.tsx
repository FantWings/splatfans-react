import styled from 'styled-components'
import { schedules } from '../interfaces/schedules'
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
              <MapShowCase mapUrl={stage_a.image} />
              <MapShowCase mapUrl={stage_b.image} />
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
              <MapShowCase mapUrl={next_battle.stage_a.image} />
              <MapShowCase mapUrl={next_battle.stage_b.image} />
            </div>
          </div>
          <div className="next-stage-options">
            <span className="button is-rounded is-translucent-light">
              <span className="icon squid-icon-tilt">
                <span className="fa squid-squid" />
              </span>
              查看所有即将到来的地图
            </span>
          </div>
        </div>
      </div>
    </Body>
  )
}

const stageIcon: any = {
  gachi:
    'data:image/png;base64,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',
  regular:
    'data:image/png;base64,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',
  league:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB7CAMAAACFMMQJAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFQUExURUdwTAYGJwYGJgUFJQUFJwYGJgcHJwYGJwUFJwAAHwcHJwUFJwUFJgUFJgYGJgYGJv///wYGJ/AtfUEQPXsaUuIreBUILLYjaF4VR4KCkzINN8UmbfvL3yMLMm0XTf3l70REXBUVNNQoc6ghYpkeXfRhne/v8fNUlfE5hf7y9/JHjfRinqGhroocWPeWvvvK3vZ8rvE6hTQ0T9DQ1vzX5/ijxviWvv7z9/VupfmwzsHByeDg5PZ7rWNjd08SQvq91vNVlfmxzyQkQXJyhfeItrGxu/zY51NTavq+1/ikxveJtpKSoPVvpjENN7UjZ0AQPCILMdMocmwXTOEreBQILJgeXe/X4sgpcF0VR56FnKchYokcV+iGsFEzVtQzebCothQSMpo/cemZvO1OkBQMLtNYj5hPeUATPnsZUj4lSXJnfkEcRFAqUe84g7peizElRY+k4boAAAAQdFJOUwDQoDBgwEDwgBAgsJDgUHDLfNxfAAAK+ElEQVRo3sWb52PiOhLAQw2EZGPZdEIvoYUEWAIhvWf3bXnv7t273nv//7+dbUnWqBmSwEVf1ssQ/azRaDQzEhsbz2tRX2loa2OtLbQZ95HGA+/Wiw+jiI90G8XWi99GaFcrfId8X24FLYAQCulUv2kL14u3ASigmf4I8nm3lbSoQ0DbStmuKwuvE48RSGXfIeTzaitqCcxQrL54AIsC68TvYIbCwLeJZJ22F6cMafW98yTR9eEZBG3Ja079YitsMYaPqFWPUGJ9+AijcEreAp/vrG+/cfvPX7j/BKX1aFnrXPnxGJ7gUg0vPjxuzxUjlGng8QfXsOtuBal2a2bW037YHSvWfd5MpdGaXiDmmXbJNOvuQ8yhu7rGrvjANA88C9iOr3LoAa/ffMo0UwQfJnONF0TGNIleXAtc3d4TYqv6wqabJtZwmKqa4c2S983N8MrpeRdB8EwjmwxvZizv4/Bq6RaBmxmkanUirXkzsIrAj/rTNO0eWhhsWU9eyBOtrGD+E8zkaMszJnhMs2+ksqvafd/J9AwccYP9J8m+QpfAqwPfHYmeKnL6Zvx0DfAvdHHJM+N6qWO2tkvu/xucTxBe8pXDD1CHpqA3yCdqfgbsDC92d24fRV+6belpjw++ab1+8YVFmyp4E10ApEJeXPyeUl6lfRzFAFKNDhNagz3T1NdlwGeaoPTZ4Y0pqTSbMoWWxDqBH+VfHfxExAl1LQo4QCAoCjZK3vQlOo/ZLWo3F28Jw7xgQ+/uXTFll4DfZfiQ3c2u09/LQkoRb4LpvZoa0x6wQFOBR9rMZJmAWsaz1psadjvSiVeER5ruPxq4fVgKn3gxPqXqfHht0LY3VOLTXCexZ29zCl/Cpv3BYA0agOyhno3HoauVJK0g931s8O2DrIAU/fPsy/BJU2tzD4bYyj3ttzPPzXzjvvjutaFqe13N9w+Wxkdj2xG7BcF2viTcadfqF8D+OOF2HItqA5BocHPhev/0ZPi1vSMtnq1A5R4cjYihq4gffrqeGova9Ppo6I+3t6GovjajwA97vU/H1w/Gsq38dHzU63XlCIVpIK6sS6nwZdzn3aEAuR2Th05TkJyekweV91OkgEo6xe/hrrrdDse4RznydGlOePwILcTDFITRs3XsYDMHeQFfNs0ZN8IqqpDHM9N8D0U5hOYCvljKuB2n6iXqilkMTisHJejcGzz+xH4Cg2yN7O+T533TbAPN9G1JjscnOWeY5lMg4uHTYCPPZNPC6AfO44nHOHf+Yswg+x5/XLUlFWH06YuMHJjGYCIDQtfUhTz3TRPyXTq6d58PTch36ehGnnuLBaepPFB/WKLnkQ5P+JhOVIzxhI/pdF6wpCSF5qQIFGOJTFIOEzh8mwjt+W9VEMSfEMm+bX99Qufw1O0UmWnVvRRISmQyyoXniZu/pQiCH1BJ+w+P3rpS4WEc7KVAu6IkK9QLHkBP7ebgstW/rSjw+2eT8jj3eOODB168Tov/CVKsk0M0Mh8GUH4bL/BvFMo/wwvSDw9zRRp+RrRJJIdvAgPrI4XpuVbpugOGH4KRCnsYzUEkQUaDv6MGhumVEeoTfHfmiu4oPYeq+I96fIcNQCnp8F5trg7xZzMDb2G/+TUZ+ml1Ttzxe6L/3/8Oi1q5igpvybtwdEMRVyVhttpzdGrvKx3DGf4vfkaHMjbuT42OIzoxOrbku19+SySPttu330rEcy6dx1/wAUKtZHl5tYM/RTeVSu4fXz+zHeufg7tmsz2zPVClcp7719fvmeg/g1lz37xkCZDtZPKlgioGiW7451EYT90caF9c4aGz8wntK7YR58+O9d3SuZcsX2hHeBt75DE/cle6swxPb0ec5PvvHN806SzAU8sPiutenVD0KxXA+Ox4oCaJgyqVGyD6if1ezQGW+ODpupe8nhrPKfnzj5mjccMLju55J2NP26vn9eTilTqdas1z549U8/uzuwmLcMZ96my//dKezQaXZWMRnpW9Av7D/0AhczK+v35htkUamZc//c3Vimv0/nhQ9AvLhTLY9jzI/LxiL7+xcWkvueYABp6tb2zJeb9VnsyazRkLiXV4ruQpl21VeDHONsbekySa++O5aEdVtFbgZwOBMbqnWUWbD8GN+5EvPsXHerRkD2NNGd/mo2njFt2SpwkfgjuL5NQHTyPNgBTnl1Ja/Hs7t+1wWQaiY5yZfJ5hu6G+Hk93/0121rdFU9t0MqVZeBPHl4GJd9xAi0UilwYXg9/q8I0iUhy0hHa8UnG2oMSfQUdjtFwnhC2sAx0NiYQqSnzNS3HEYx6Y5RVLdbl81gQRFQ0r+iDaoXwci1Rlp1sogXOfQMi3mJbO1rkdz82kPP74RhFsYf4tF2x95LIm1oKKEkeIry8UiRl0DS7Q3i8b91Uu1puYXgrQeuQD7Z4w4drqAnYAfJ5NQrMpH+d3f440cb75q5EQ5w8Vp447Poeb0SD4IiktPcE4/9JR8TynwM8O7XV5ej8C+Af51DGy4GQV2KAF440uzPEq+hwPjv6DWFxZeKwZZwaQJgHgEMb5Lt8NvapinO/wcYZZJXhS60+yqQ/Elxy7xRbfE8YTzIBkmI+3XoI9oykAyTDn1REpiHiGvxw/IpyUM+3fTeja+6lFFv2IbGzdDlUALlxUjXlFXPU1awl+THEa69S2TvvzH1gmbdYOrKLtcVs/HJ4Y/fm47FmGHURlLcfjnh6evDf4+t5BelFdP6TZ+Y6wj03LG9IZyTaz8tZSvhZ3uvSCU/2ILu4p40mVILa1EUuQ/uZkOtTEODv+g8+oUo1WP3c+4s4VmncDvM2Nc7lKFR62dWeDSZk5XGn8mqXvU8e+xkrmFdMmAe2NrJkzdaRx4Df7Oz4HNw94M/kvUY1jal1a5nJ3oBtysPlvZ/efdabq4x2s/rj+tPpCHR0Op7arzY3oomifTWDol8udV1Eeq2Z/MDg0pld+mV1Uf4LS0MTGV1Oyyf/9z22TCz1YueMvfyRbr45Odp+YftFndJlB98EZf98JIg8njm1x0WU/l3OcUPlyMLjsaOnefSd/fMqOiqSwb/i0ZDn/YSgeadlTnq1xmaUfniwQyf18nC5DF9PaAra3dGNJPLsLIRpCd7EC9q40zg7XiqSbhsJFiTpX/pfOL3t7/scoR6aW7mTRBf3cR4n3hrGRwgEflZ8Bh5d8HGUe+Lg9nGuQG1+b8lWUBS9QVh2iXcA7bRZ5mS0fp5sv4uwziPRHmYopUMLplZ5AHHvUC7+bXFH+tD2BfKo+wguo4bRub4cY8Jwu7H85jdw1Jm+sq7mBKZge+VbPnGQSDC2w6GoeueUfRf5+8HiqPTznLvns0t8VLIp2vYuJm8AYiimtH3Zm4OFqQf0owt9GCS9xMTIB8+6s6VP2uh5qhUl4mzq21AXOMHfNPIYW8fVDp1af4Ox60fXRMAI/8CDW58fXtgPhsHLJGxRheMsupIr7bZuSV2NK+IYl3laN6Jy9/POPhDgZtsfw3H+tYUlVIOdkNH/gvVTBy2q24Y4WXOrmRhDOUBicaJeSyaRFnHgalkHr5MOi85WSxXaZIHRqy9Ft/taGki+cr9f4M1dF434l88Jbs9FNTefk3lyhqJGv6JZ2fFs3OiccaaQ1wsTKLulvCXdaNtmxaEP6jMz6an8g826buM2dxG5oI+xdG6fw2MbWboL+MikYjm+stcX5MlggtPF/btsL6nTrbmHV6n4D/tvQKf+t6Jj/dnSH/5Z0+qOol7f/ASo4+qACslE7AAAAAElFTkSuQmCC',
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
    mask-image: url(data:image/png;base64,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1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr6NXR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29OnodvTp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19Oro1dHr6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+OXkevjl4dvTp6dfTq6NXRq6PX0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvY5eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06uh19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR5+gjl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dPezTAQkAAACAoP+vPaITguro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXRq6PX0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl4dvY5eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX06uh19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRJ6ijV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvY5eHb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06uh19Oro1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr6NXR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29OnodvTp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19Oro1dHr6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+OXkevjl4dvTp6dfTq6NXRq6PX0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6HX2COnp19Oro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr6NXR6+OXh29Onp19Oro1dHr6NXRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29OnodvTp6dfTq6NXRq6NXR6+OXkevjl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb2OXh29Onp19OrolfbpQAAAAABAkL/1BBuUQ6IDogOiA6KD6IDogOiA6IDogOiA6IDoIDogOiA6IDogOiA6IDogOogOiA6IDogOiA6IDogOiA6IDqIDogOiA6IDogOiA6IDooPogOiA6IDogOiA6IDowAg+YFmyhQ+ZRAAAAABJRU5ErkJggg==);
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
