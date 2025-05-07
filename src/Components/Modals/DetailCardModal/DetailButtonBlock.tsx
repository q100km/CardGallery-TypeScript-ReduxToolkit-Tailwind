import { useDispatch } from 'react-redux'
import { Dispatch } from '../../../Types/сardSliceTypes'
import { toggleFaforite, toggleLike } from '../../../redux/slices/cardSlice'
import { FC } from 'react'
import { ICard } from '../../../Types/сardsTypes'

type DetailButtonBlockProps = {
  card: ICard
}

const DetailButtonBlock: FC<DetailButtonBlockProps> = ({ card }) => {
  const dispatch = useDispatch<Dispatch>()

  const setFavorite = (): void => {
    dispatch(toggleFaforite(card.id))
  }

  const setLike = (): void => {
    dispatch(toggleLike(card.id))
  }

  const favoriteBtnStyle = card.favorite
    ? 'bg-green-600 h-6 w-30 rounded text-center cursor-pointer'
    : 'bg-gray-400/30 h-6 w-30 rounded text-center cursor-pointer'

  const LikeBtnStyle = card.like
    ? 'bg-pink-500 h-6 w-30 rounded text-center cursor-pointer'
    : 'bg-gray-400/30 h-6 w-30 rounded text-center cursor-pointer'

  return (
    <div className='mt-4 flex justify-around rounded-xl overflow-hidden shadow-xl p-2 bg-white/60'>
      <button onClick={() => setFavorite()} className={favoriteBtnStyle}>
        FAVORITE
      </button>
      <button onClick={() => setLike()} className={LikeBtnStyle}>
        LIKE
      </button>
      <div className='bg-gray-400/30 h-8 w-50 rounded text-center flex justify-center items-center  overflow-hidden text-xs '>
        Дата публикации: {card.date}
      </div>
    </div>
  )
}

export default DetailButtonBlock
