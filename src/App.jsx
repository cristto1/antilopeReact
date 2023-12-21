import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer greeting={'Dale a tu outfit un toque elegante.'} />
    </div>
  )
}

export default App
