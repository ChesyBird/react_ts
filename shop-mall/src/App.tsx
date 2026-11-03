
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './layouts/Header'
import ProductList from './products/ProductList'

function App() {


  return (
    <>
      <section className='app'>
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path='/' element={<ProductList />} />
            </Routes>
          </main>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
