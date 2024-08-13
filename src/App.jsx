import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { Contacto } from './pages/Contacto.jsx'
import { Nosotros } from './pages/Nosotros.jsx'
import { Blog } from './pages/Blog.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </>
  )
}

export default App
