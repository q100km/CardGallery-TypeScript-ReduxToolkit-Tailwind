import { IComment } from '../Types/modalsCommentTypes'

const commentCreator = (userName: string, comment: string): IComment => ({
  id: new Date().getTime(),
  userName,
  comment,
})

export default commentCreator
