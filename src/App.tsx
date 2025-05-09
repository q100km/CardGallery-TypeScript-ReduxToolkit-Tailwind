import './index.css'
import Header from './Components/Header/Header'
import Gallery from './Components/Gallery/Gallery'
import Error from './Components/Error/Error'

function App() {
  return (
    <div className='bg-green-600/10 w-3/4 min-h-screen mx-auto'>
      <Header />
      <Gallery />
      <Error />
    </div>
  )
}

export default App
