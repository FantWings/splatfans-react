export interface salmonRunAPI {
  details: Array<details>
  schedules: Array<{ start_time: number; end_time: number }>
}

export interface details {
  start_time: number
  end_time: number
  stage: { image: string; name: string }
  weapons: Array<{ id: string; weapon: { id: string; name: string; thumbnail: string; image: string } }>
}

export interface weapons {}
