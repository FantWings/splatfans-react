import moment from 'moment'
import { useEffect, useRef, useState } from 'react'

export default function CountDown(deadline: number) {
  const [current, setTime] = useState('0 天 0 时 0 分 0 秒')
  const timerID: any = useRef()
  const test = moment(parseInt(deadline + '000')).format('YYYY-MM-DD HH:mm:ss')
  const deadLine = moment(test)
  const deadLineTime = deadLine.diff(moment())

  let durationTime = moment.duration(deadLineTime)
  let isArrived = deadLineTime < 0

  useEffect(() => {
    timerID.current = setInterval(() => {
      let arriveTime = `${durationTime.days()} 天 ${durationTime.hours()} 时 ${durationTime.minutes()} 分 ${durationTime.seconds()} 秒`
      if (!isArrived) {
        durationTime = moment.duration(deadLine.diff(moment()))
        setTime(() => arriveTime) // make pretty
      }
    }, 1000)
  }, [])

  useEffect(() => {
    if (isArrived) {
      clearInterval(timerID.current)
    }
  })

  return <div>{current}</div>
}
