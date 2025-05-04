import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewComment } from '../../../redux/slices/cardSlice'
import commentCreator from '../../../utils/commentCreator'
import { Dispatch } from '../../../Types/сardSliceTypes'
import { setError } from '../../../redux/slices/errorSlice'

const DetailModalForm = () => {
  const [userName, setUserName] = useState<string>('')
  const [comment, setComment] = useState<string>('')
  const dispatch = useDispatch<Dispatch>()

  const addComment = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    if (userName && comment) {
      const newComment = commentCreator(userName, comment)
      dispatch(addNewComment(newComment))
      setUserName('')
      setComment('')
    } else {
      dispatch(setError('Чтобы оставить комментарий введите Ваше Имя и напишите комментарий'))
    }
  }

  return (
    <form onSubmit={addComment} className=' shadow text-xs flex flex-col gap-2 w-62 max-w-xs'>
      <input
        type='text'
        placeholder='Ваше имя :'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className='p-1 border rounded bg-white/70 placeholder-gray-500'
      />
      <input
        type='text'
        placeholder='Оставьте комментарий...'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className='p-1 border rounded bg-white/70 placeholder-gray-500'
      />
      <button
        type='submit'
        className='bg-gradient-to-r from-blue-400 to-pink-500 text-white py-1 rounded transform transition-transform duration-400 hover:scale-110'
      >
        Отправить
      </button>
    </form>
  )
}

export default DetailModalForm
