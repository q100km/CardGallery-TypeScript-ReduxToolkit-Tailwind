import { FC, useState } from 'react'
import { CardProps } from '../../../Types/сardsTypes'
import DetailCardModal from '../../Modals/DetailCardModal/DetailCardModal'
import DeleteCardModal from '../../Modals/DeleteCardModal'
import { useDispatch } from 'react-redux'
import { deleteCard } from '../../../redux/slices/cardSlice'
import { Dispatch } from '../../../Types/сardSliceTypes'

const Card: FC<CardProps> = ({ card }) => {
  const [showDetail, setShowDetail] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const dispatch = useDispatch<Dispatch>()

  const handleDelete = () => {
    dispatch(deleteCard(card.id))
    setShowDeleteModal(false)
  }

  const favoriteIconStyles = card.favorite
    ? 'absolute top-22 left-1 w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-4xl'
    : 'absolute top-22 left-1 w-6 h-6 bg-yellow-500/10 text-white rounded-full flex items-center justify-center text-4xl'

  const likeIconStyles = card.like
    ? 'absolute top-14 left-1 w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-xs'
    : 'absolute top-14 left-1 w-6 h-6 bg-pink-500/10 text-white rounded-full flex items-center justify-center text-xs'

  return (
    <div className='relative bg-white shadow rounded-xl h-90 flex flex-col text-xl font-semibold overflow-hidden'>
      <div onClick={() => setShowDetail(true)} className='bg-cyan-400 w-full h-[70%] text-center cursor-pointer'>
        <img src={card.image} alt={card.title} className='object-cover w-full h-full rounded-t-xl' />
      </div>

      <div className='bg-green-600/10 w-full h-[30%]'>
        <div className='w-full h-full overflow-hidden flex flex-col justify-between'>
          <h1 className='shadow p-1 text-center overflow-hidden'>{card.title}</h1>
          <p className='flex-1 p-1 overflow-hidden'>{card.discription}</p>
        </div>
      </div>

      {/* delete btn */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          setShowDeleteModal(true)
        }}
        className='absolute top-2 left-1 bg-transparent text-gray-400 hover:bg-red-500 hover:text-white transition p-2 rounded'
      >
        x
      </button>

      {/* favorite / like icon styles */}
      <div className={likeIconStyles}>{'<3'}</div>
      <div className={favoriteIconStyles}> * </div>

      {/* delete modal */}
      {showDeleteModal && <DeleteCardModal cardIdToDelete={card.id} confirmDelete={handleDelete} cancelDelete={() => setShowDeleteModal(false)} />}

      {/* detail modal */}
      {showDetail && <DetailCardModal card={card} close={() => setShowDetail(false)} />}
    </div>
  )
}

export default Card
