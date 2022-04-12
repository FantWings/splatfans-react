export default interface merchandisesAPI {
  merchandises: Array<gears>
}

export interface gears {
  gear: {
    thumbnail: string
    brand: { id: string; image: string; frequent_skill: skill; name: string }
    id: string
    kind: string
    rarity: number
    name: string
    image: string
  }
  skill: skill
  end_time: number
  kind: string
  price: number
  id: string
  original_gear: {
    name: string
    price: number | null
    rarity: number
    skill: skill
  }
}

interface skill {
  name: string
  id: string
  image: string
}
