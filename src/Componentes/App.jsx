
import Nav from '../Componentes/Nav'
import Footer from '../Componentes/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    <Nav />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
