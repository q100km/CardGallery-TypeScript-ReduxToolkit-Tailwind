import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { addNewCard, selectCardsArray } from '../../../redux/slices/cardSlice'
import { Dispatch } from '../../../Types/сardSliceTypes'
import cardCreator from '../../../utils/cardCreator'
import { setError } from '../../../redux/slices/errorSlice'

const CreateNewCardForm = () => {
  const cardsArray = useSelector(selectCardsArray)
  const dispatch = useDispatch<Dispatch>()

  const [image, setImage] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [discription, setDiscription] = useState<string>('')

  const addCard = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    if (title && discription && image) {
      const newCard = cardCreator(title, discription, image)
      dispatch(addNewCard(newCard))
      setTitle('')
      setDiscription('')
      setImage('')
    } else {
      dispatch(setError('Для добавления публикации все поля должны быть заполнены!'))
    }
  }

  console.log(cardsArray, 'cardsArray')
  //
  return (
    <form onSubmit={addCard} className='flex items-center gap-4 p-4 bg-white shadow rounded'>
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        type='text'
        placeholder='URL - Изображениe'
        className='w-1/4 h-10 px-2 border border-gray-300 rounded-lg'
      />

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type='text'
        placeholder='Заголовок'
        className='w-1/4 h-10 px-2 border border-gray-300 rounded-lg'
      />

      <input
        value={discription}
        onChange={(e) => setDiscription(e.target.value)}
        type='text'
        placeholder='Описание'
        className='w-1/4 h-10 px-2 border border-gray-300 rounded-lg'
      />

      <button
        type='submit'
        className='w-1/4 h-10 bg-gradient-to-r from-blue-400 to-pink-500 text-white py-1 rounded transform transition-transform duration-400 hover:scale-110'
      >
        Добавить изображение
      </button>
    </form>
  )
}

export default CreateNewCardForm
