import { ICard } from '../Types/сardsTypes'

const cardCreator = (title: string, discription: string, image: string): ICard => ({
  id: new Date().getTime(),
  image,
  title,
  discription,
  favorite: false,
  date: new Date().toLocaleString('ru-RU'),
  like: false,
  comments: [],
})

export default cardCreator
