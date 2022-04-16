import moment from 'moment'
import { useEffect, useRef, useState } from 'react'

export default function CountDown(deadline: number) {
  const [current, setTime] = useState('0 天 0 时 0 分 0 秒')
  const timerID: any = useRef()
  const format = moment(parseInt(deadline + '000')).format('YYYY-MM-DD HH:mm:ss')
  const deadLine = moment(format)
  const deadLineTime = deadLine.diff(moment())

  const durationTime = useRef(moment.duration(deadLineTime))
  const isArrived = deadLineTime < 0

  useEffect(() => {
    timerID.current = setInterval(() => {
      let arriveTime = `${durationTime.current.days()} 天 ${durationTime.current.hours()} 时 ${durationTime.current.minutes()} 分 ${durationTime.current.seconds()} 秒`
      if (!isArrived) {
        durationTime.current = moment.duration(deadLine.diff(moment()))
        setTime(() => arriveTime) // make pretty
      }
    }, 1000)
  }, [deadLine, isArrived])

  useEffect(() => {
    if (isArrived) {
      clearInterval(timerID.current)
    }
  })

  return <div>{current}</div>
}
