import moment from 'moment'
import { useEffect, useRef, useState } from 'react'

export default function CountDown(deadline: number) {
  const [current, setTime] = useState('计算剩余时间...')
  const timerID: any = useRef()
  const format = moment(parseInt(deadline + '000')).format('YYYY-MM-DD HH:mm:ss')
  const deadLine = moment(format)
  const deadLineTime = deadLine.diff(moment())

  const durationTime = useRef(moment.duration(deadLineTime))
  const isArrived = deadLineTime < 0

  useEffect(() => {
    timerID.current = setInterval(() => {
      const days = durationTime.current.days()
      const hours = durationTime.current.hours()
      const minutes = durationTime.current.minutes()
      const seconds = durationTime.current.seconds()

      const arriveTime = () => {
        if (days) return `${days} 天 ${hours} 时 ${minutes} 分`
        return `${hours} 时 ${minutes} 分 ${seconds} 秒`
      }

      if (!isArrived) {
        durationTime.current = moment.duration(deadLine.diff(moment()))
        setTime(() => arriveTime()) // make pretty
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
