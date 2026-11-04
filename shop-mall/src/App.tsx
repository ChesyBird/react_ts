
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './layouts/Header'
import ProductList from './products/ProductList'
import ProductProvider from './context/ProductProvider'
import ProductDetail from './products/ProductDetail'
import AddProduct from './products/AddProduct'
import CartProvider from './context/CartProvider'
import Cart from './products/Cart'

function App() {


  return (
    <>
      <section className='app'>
      {/* ProductProvider 내부의 컴포넌트는 children */}
        <ProductProvider>
          <CartProvider>
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path='/' element={<ProductList />} />
              <Route path='/product/:id' element={<ProductDetail />} />
              <Route path='/product/new' element={<AddProduct />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </main>
        </BrowserRouter>
          </CartProvider>
        </ProductProvider>
      </section>
    </>
  )
}

export default App
