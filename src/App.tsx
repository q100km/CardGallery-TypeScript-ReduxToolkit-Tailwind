import './index.css'
import Header from './Components/Header/Header'
import Main from './Components/Gallery/Gallery'
import Error from './Components/Error/Error'

function App() {
  return (
    <div className='bg-green-600/10 w-3/4 min-h-screen mx-auto'>
      <Header />
      <Main />
      <Error />
    </div>
  )
}

export default App
