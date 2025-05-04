import { useSelector } from 'react-redux'
import DetailModalForm from './DetailModalForm'
import { selectCommentsArray } from '../../../redux/slices/cardSlice'
import { IComment } from '../../../Types/modalsTypes'

const DetailCommentsList = () => {
  const commentsArray = useSelector(selectCommentsArray)
  return (
    <div className='flex flex-col gap-4 w-82 max-h-140 overflow-auto bg-white/10 rounded-xl shadow-xl p-4'>
      {/* add com form  */}
      <DetailModalForm />

      {commentsArray.map((comment: IComment) => {
        return (
          <div key={comment.id} className='w-61 h-25 p-1'>
            <div className='w-61 h-25 shadow text-xs p-1 rounded overflow-hidden '>
              <h1 className='font-bold'>Ваше Имя :{comment.userName}</h1>
              <div className='font-bold'> Комментарий : </div>
              <div className='text-ellipsis h-20'>
                <p className='line-clamp-4'>{comment.comment}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default DetailCommentsList
