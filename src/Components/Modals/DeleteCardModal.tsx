import { FC } from 'react'
import {} from '../../Types/modalsCommentTypes'

type DeleteCardModalProps = {
  cardIdToDelete: number
  confirmDelete: (id: number) => void
  cancelDelete: () => void
}

const DeleteCardModal: FC<DeleteCardModalProps> = ({
  cardIdToDelete,
  confirmDelete,
  cancelDelete,
}) => {
  return (
    <div className='fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center'>
      <div className='bg-white/70 p-6 rounded-xl shadow-lg max-w-md w-full'>
        <div className='flex justify-center items-center mb-10'>
          <h1 className='font-bold text-2xl text-center'>
            Вы действительно хотите <span className='text-red-500'>удалить</span> данную карточку?
          </h1>
        </div>
        <div className='flex justify-evenly'>
          <button
            onClick={() => confirmDelete(cardIdToDelete)}
            className='bg-gradient-to-r from-blue-400 to-pink-500 text-white py-3 px-7 rounded-lg transform transition-transform duration-400 hover:scale-120'
          >
            Удалить
          </button>

          <button
            onClick={cancelDelete}
            className='bg-gradient-to-r from-green-400 to-cyan-500 text-white py-3 px-7 rounded-lg transform transition-transform duration-400 hover:scale-120'
          >
            Отмена
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteCardModal
