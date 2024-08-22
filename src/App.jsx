import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { Contacto } from './pages/Contacto.jsx'
import { Nosotros } from './pages/Nosotros.jsx'
// import { Productos } from './pages/Productos.jsx'
import { ProductoAlcantarillado } from './pages/ProductoAlcantarillado.jsx'
import { ProductoHidraulico } from './pages/ProductoHidraulico.jsx'
import { ProductoC900 } from './pages/ProductoC900.jsx'
import { ProductoC80 } from './pages/ProductoC80.jsx'
import { Blog } from './pages/Blog.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/productos' element={<Productos />} /> */}
        <Route path='/productos/alcantarillado' element={<ProductoAlcantarillado />} />
        <Route path='/productos/hidraulico' element={<ProductoHidraulico />} />
        <Route path='/productos/c900' element={<ProductoC900 />} />
        <Route path='/productos/c80' element={<ProductoC80 />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </>
  )
}

export default App
