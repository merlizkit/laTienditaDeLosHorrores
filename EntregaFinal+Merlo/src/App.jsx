//import './App.css'
import './style.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext';
import { Checkout } from './components/Checkout';
import { Cart } from './components/Cart';

function App() {

  return (
    <CartContextProvider >
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path = '/' element = {<ItemListContainer />} />
        <Route exact path = '/category/:id' element = {<ItemListContainer />} />
        <Route exact path = '/item/:id' element = {<ItemDetailContainer />} />
        <Route exact path = '/checkout' element = {<Checkout />} />
        <Route exact path = '/cart' element={<Cart />} />
        <Route path = '*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
