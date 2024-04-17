import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { useParams } from 'react-router-dom'
import ShopVideo from './components/ShopVideo'
import ShopVideoHomepage from './components/ShopVideoHomepage'
import { useLocation } from 'react-router-dom'
const App = () => {
  const {category} = useParams()
  const location = useLocation()
  const isHomepage = location.pathname === '/';
  return (
    <>
      <Header />
      {category ? <ShopVideo /> : isHomepage ? <ShopVideoHomepage /> : ''}
      <main className='py-3'>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
      <ToastContainer />
    
    </>
  )
}

export default App