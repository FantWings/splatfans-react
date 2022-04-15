export interface salmonRunAPI {
  details: Array<details>
  schedules: Array<{ start_time: number; end_time: number }>
}

export interface details {
  start_time: number
  end_time: number
  stage: { image: string; name: string }
  weapons: Array<weaponsList>
}

export interface weaponsList {
  id: string
  weapon: {
    id: string
    name: string
    thumbnail: string
    image: string
  }
  coop_special_weapon: { name: string; image: string }
}
