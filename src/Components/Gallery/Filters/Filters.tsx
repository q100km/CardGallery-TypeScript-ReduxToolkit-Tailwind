import { useSelector } from 'react-redux'
import {
  selectFilterDiscriptionValue,
  selectFilterInputValue,
  setFilterTitleValue,
  setFilterDiscriptionValue,
  selectOnlyFavorite,
  setOnlyFavorite,
  cancelFilters,
} from '../../../redux/slices/filterSlice'
import { useDispatch } from 'react-redux'
import { Dispatch } from '../../../Types/сardSliceTypes'

const Filters = () => {
  const filterInputValue = useSelector(selectFilterInputValue)
  const filterDiscriptionValue = useSelector(selectFilterDiscriptionValue)
  const dispatch = useDispatch<Dispatch>()
  const onlyFavorite = useSelector(selectOnlyFavorite)

  return (
    <div className='flex items-center gap-4 p-4 bg-white shadow rounded mt-1 py-7 justify-between'>
      <input
        value={filterInputValue}
        onChange={(e) => dispatch(setFilterTitleValue(e.target.value))}
        type='text'
        placeholder='Поиск по заголовку'
        className='w-1/4 h-10 px-2 border border-gray-300 rounded-lg'
      />

      <input
        value={filterDiscriptionValue}
        onChange={(e) => dispatch(setFilterDiscriptionValue(e.target.value))}
        type='text'
        placeholder='Поиск по описанию'
        className='w-1/4 h-10 px-2 border border-gray-300 rounded-lg'
      />

      <label className='w-1/4 flex items-center gap-2 text-gray-700 cursor-pointer'>
        <input
          onClick={() => dispatch(setOnlyFavorite(!onlyFavorite))}
          checked={onlyFavorite}
          type='checkbox'
          className='w-10 h-10 text-blue-60 border-gray-300 rounded'
        />
        Только избранные
      </label>
      <button
        onClick={() => dispatch(cancelFilters())}
        className='bg-gradient-to-r from-green-600 to-blue-400 text-white py-3 px-7 rounded-lg transform transition-transform duration-400 hover:scale-110'
      >
        Сбросить фильтры
      </button>
    </div>
  )
}

export default Filters
