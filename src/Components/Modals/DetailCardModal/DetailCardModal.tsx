import DetailCommentsList from './DetailCommentsList'
import DetailButtonBlock from './DetailButtonBlock'
import { FC } from 'react'
import { ICard } from '../../../Types/сardsTypes'

export type DetailCardModalProps = {
  card: ICard
  close: () => void
}

const DetailCardModal: FC<DetailCardModalProps> = ({ card, close }) => {
  //
  return (
    <div className='fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center'>
      <div
        onClick={(e) => e.stopPropagation()}
        className='bg-white/50 relative p-6 rounded-xl shadow-lg flex flex-row gap-5 w-225 h-150'
      >
        {/* Левая часть */}
        {/* close btn */}
        <button
          onClick={close}
          className='absolute top-2 left-2 w-7 h-7 rounded-full bg-red-500 text-white text-lg font-bold flex items-center justify-center hover:bg-red-700 transition-all duration-300'
        >
          X
        </button>

        {/* img content */}
        <div className='w-150 flex flex-col justify-between'>
          <div className='w-full h-126 rounded-xl overflow-hidden shadow-xl'>
            <img src={card.image} alt={card.title} className='w-full h-full object-cover' />
          </div>

          {/* btn block */}
          <DetailButtonBlock card={card} />
        </div>

        {/* Правая часть */}
        {/* com list */}
        <DetailCommentsList />
      </div>
    </div>
  )
}

export default DetailCardModal
