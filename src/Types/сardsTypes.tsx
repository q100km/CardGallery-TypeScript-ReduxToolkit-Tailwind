import { IComment } from './modalsTypes'

export interface ICard {
  id: number
  image: string
  title: string
  discription: string
  favorite: boolean
  date: string
  like: boolean
  comments: IComment[]
}

export type CardProps = {
  card: ICard
}
