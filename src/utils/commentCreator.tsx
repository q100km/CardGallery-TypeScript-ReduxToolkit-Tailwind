import { IComment } from '../Types/modalsTypes'

const commentCreator = (userName: string, comment: string): IComment => ({
  id: new Date().getTime(),
  userName,
  comment,
})

export default commentCreator
