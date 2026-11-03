
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './layouts/Header'
import ProductList from './products/ProductList'
import ProductProvider from './context/ProductProvider'
import ProductDetail from './products/ProductDetail'

function App() {


  return (
    <>
      <section className='app'>
      {/* ProductProvider 내부의 컴포넌트는 children */}
        <ProductProvider>
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path='/' element={<ProductList />} />
              <Route path='/product/:id' element={<ProductDetail />} />
            </Routes>
          </main>
        </BrowserRouter>
        </ProductProvider>
      </section>
    </>
  )
}

export default App
