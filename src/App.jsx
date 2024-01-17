import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Dale a tu outfit un toque elegante.'} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos por categoría: '} />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>ERROR 404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
