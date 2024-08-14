import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { Contacto } from './pages/Contacto.jsx'
import { Nosotros } from './pages/Nosotros.jsx'
import { Productos } from './pages/Productos.jsx'
import { ProductoAlcantarillado } from './pages/ProductoAlcantarillado.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/productos/alcantarillado' element={<ProductoAlcantarillado />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/contacto' element={<Contacto />} />
        {/* <Route path='/blog' element={<Blog />} /> */}
      </Routes>
    </>
  )
}

export default App
