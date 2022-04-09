export interface SchedulesAPI {
  gachi: Array<schedules>
  league: Array<schedules>
  regular: Array<schedules>
}

export interface schedules {
  id: string
  game_mode: {
    name: string
    key: string
  }
  start_time: number
  end_time: number
  stage_a: {
    image: string
    name: string
    id: string
  }
  stage_b: {
    image: string
    name: string
    id: string
  }
  rule: {
    multiline_name: string
    key: string
    name: string
  }
}
