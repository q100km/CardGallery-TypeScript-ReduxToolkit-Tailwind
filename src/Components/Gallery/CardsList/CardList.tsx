import Card from '../Card/Card'
import { useSelector } from 'react-redux'
import { selectCardsArray } from '../../../redux/slices/cardSlice'
import { ICard } from '../../../Types/сardsTypes'
import { selectFilterDiscriptionValue, selectFilterInputValue, selectOnlyFavorite } from '../../../redux/slices/filterSlice'

const CardList = () => {
  const cardsArray = useSelector(selectCardsArray)
  const filterInputValue = useSelector(selectFilterInputValue)
  const filterDiscriptionValue = useSelector(selectFilterDiscriptionValue)
  const onlyFavorite = useSelector(selectOnlyFavorite)

  const filteredCards = cardsArray.filter((card: ICard): boolean => {
    const filterByTitle = card.title.toLowerCase().includes(filterInputValue.toLowerCase())
    const filterByDiscription = card.discription.toLowerCase().includes(filterDiscriptionValue.toLowerCase())
    const filterOnlyFavorite = onlyFavorite ? card.favorite : true
    return filterByTitle && filterByDiscription && filterOnlyFavorite
  })

  return (
    <div className='bg-cyan-300/10 w-full min-h-screen grid grid-cols-3 gap-5 p-5 items-start'>
      {filteredCards.length === 0 ? (
        <div className='col-span-3 flex justify-center'>
          <h1 className='text-2xl font-semibold'>Добавьте в галерею вашу первую публикацию!</h1>
        </div>
      ) : (
        filteredCards.map((card: ICard) => <Card key={card.id} card={card} />)
      )}
    </div>
  )
}

export default CardList
