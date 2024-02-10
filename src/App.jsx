import { useState, createContext } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartView from './components/CartView/CartView'
import Checkout from './components/Checkout/Checkout'
import './App.css'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Dale a tu outfit un toque elegante.'} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos por categoría: '} />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartView />} />
            <Route path='/chekout' element={<Checkout />} />
            <Route path='*' element={<h1>ERROR 404</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
