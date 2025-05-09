import CreateNewCardForm from './CreateNewCardForm.tsx/CreateNewCardForm'
import Filters from './Filters/Filters'
import CardList from './CardsList/CardList'

const Gallery = () => {
  return (
    <div className='bg-white w-11/12 min-h-screen mx-auto rounded'>
      <CreateNewCardForm />
      <Filters />
      <CardList />
    </div>
  )
}

export default Gallery
