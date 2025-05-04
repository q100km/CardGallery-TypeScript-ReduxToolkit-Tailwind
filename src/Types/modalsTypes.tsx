import { ICard } from './сardsTypes'

export type DeleteCardModalProps = {
  cardIdToDelete: number
  confirmDelete: (id: number) => void
  cancelDelete: () => void
}

export interface IComment {
  id: number
  userName: string
  comment: string
}

export type DetailButtonBlockProps = {
  card: ICard
}

export type DetailCardModalProps = {
  card: ICard
  close: () => void
}
