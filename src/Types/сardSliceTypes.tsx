import { ICard } from './сardsTypes'
import store from '../redux/store'
import { IComment } from './modalsCommentTypes'

export interface IInitialState {
  cardsArray: ICard[]
  commentsArray: IComment[]
}

export type RootState = ReturnType<typeof store.getState>

export type Dispatch = typeof store.dispatch
