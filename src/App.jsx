import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categorias from './components/Categorias'
import ListaProductos from './components/ListaProductos'
import Footer from './components/Footer'
import Carrito from './components/Carrito'
import { productos } from './data/productos'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <Categorias categorias={[...new Set(productos.map((producto) => producto.categoria))]} />
        <ListaProductos productos={productos} />
      </main>
      <Footer />
      <Carrito />
    </div>
  )
}

export default App
