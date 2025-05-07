import { IComment } from './modalsCommentTypes'

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
