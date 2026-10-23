import './App.css'
import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Categorias from './components/Categorias/Categorias'
import ListaProductos from './components/ListaProductos/ListaProductos'
import Ventajas from './components/Ventajas/Ventajas'
import Footer from './components/Footer/Footer'
import Carrito from './components/Carrito/Carrito'
import Delivery from './components/Delivery/Delivery'
import Contacto from './components/Contacto/Contacto'
import { productos } from './data/productos'

const vistasPorRuta = {
  '/': 'inicio',
  '/carrito': 'carrito',
  '/delivery': 'delivery',
  '/contacto': 'contacto',
}

function App() {
  const [carrito, setCarrito] = useState([])
  const [categoriaActiva, setCategoriaActiva] = useState('Todas')
  const [mostrarTodos, setMostrarTodos] = useState(false)
  const desplazamientoPendiente = useRef(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const vista = vistasPorRuta[pathname] ?? 'inicio'

  useEffect(() => {
    if (!vistasPorRuta[pathname]) {
      navigate('/', { replace: true })
    }
  }, [navigate, pathname])

  useEffect(() => {
    if (desplazamientoPendiente.current) {
      document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })
      desplazamientoPendiente.current = false
      return
    }

    window.scrollTo({ top: 0 })
  }, [vista])

  const verCatalogo = () => {
    if (vista === 'inicio') {
      document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })
      return
    }

    desplazamientoPendiente.current = true
    navigate('/')
  }

  const agregarAlCarrito = (producto) => {
    setCarrito((productosEnCarrito) => {
      const productoEnCarrito = productosEnCarrito.find((item) => item.id === producto.id)

      if (productoEnCarrito) {
        if (productoEnCarrito.cantidad >= producto.stock) return productosEnCarrito

        return productosEnCarrito.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item,
        )
      }

      return [...productosEnCarrito, { ...producto, cantidad: 1 }]
    })
  }

  const cambiarCantidad = (id, cantidad) => {
    if (cantidad <= 0) {
      eliminarDelCarrito(id)
      return
    }

    setCarrito((productosEnCarrito) =>
      productosEnCarrito.map((item) =>
        item.id === id
          ? { ...item, cantidad: Math.max(1, Math.min(cantidad, item.stock)) }
          : item,
      ),
    )
  }

  const eliminarDelCarrito = (id) => {
    setCarrito((productosEnCarrito) => productosEnCarrito.filter((item) => item.id !== id))
  }

  const vaciarCarrito = () => setCarrito([])
  const cantidadEnCarrito = carrito.reduce((total, item) => total + item.cantidad, 0)
  const productosFiltrados = categoriaActiva === 'Todas'
    ? productos
    : productos.filter((producto) => producto.categoria === categoriaActiva)
  const productosVisibles = mostrarTodos ? productosFiltrados : productosFiltrados.slice(0, 4)

  const cambiarCategoria = (categoria) => {
    setCategoriaActiva((activa) => activa === categoria ? 'Todas' : categoria)
    setMostrarTodos(false)
  }

  return (
    <div className="app-shell">
      <Navbar
        cantidadEnCarrito={cantidadEnCarrito}
        vista={vista}
        onAbrirCarrito={() => navigate('/carrito')}
        onAbrirDelivery={() => navigate('/delivery')}
        onAbrirContacto={() => navigate('/contacto')}
        onVolverAComprar={() => navigate('/')}
        onVerCatalogo={verCatalogo}
      />
      {vista === 'carrito' ? (
        <Carrito
          productos={carrito}
          onCambiarCantidad={cambiarCantidad}
          onEliminar={eliminarDelCarrito}
          onVaciar={vaciarCarrito}
          onSeguirComprando={() => navigate('/')}
        />
      ) : vista === 'delivery' ? (
        <>
          <Delivery onEmpezarPedido={verCatalogo} />
          <Footer onAbrirCarrito={() => navigate('/carrito')} onAbrirDelivery={() => navigate('/delivery')} onAbrirContacto={() => navigate('/contacto')} onVolverAInicio={() => navigate('/')} onVerCatalogo={verCatalogo} />
        </>
      ) : vista === 'contacto' ? (
        <>
          <Contacto />
          <Footer onAbrirCarrito={() => navigate('/carrito')} onAbrirDelivery={() => navigate('/delivery')} onAbrirContacto={() => navigate('/contacto')} onVolverAInicio={() => navigate('/')} onVerCatalogo={verCatalogo} />
        </>
      ) : (
        <>
          <main>
            <Hero onVerCatalogo={verCatalogo} onAbrirDelivery={() => navigate('/delivery')} />
            <Categorias
              categorias={[...new Set(productos.map((producto) => producto.categoria))]}
              categoriaActiva={categoriaActiva}
              onCambiarCategoria={cambiarCategoria}
            />
            <ListaProductos
              productos={productosVisibles}
              carrito={carrito}
              onAgregar={agregarAlCarrito}
              mostrarTodos={mostrarTodos}
              onAlternarTodos={() => setMostrarTodos((visible) => !visible)}
            />
            <Ventajas />
          </main>
          <Footer onAbrirCarrito={() => navigate('/carrito')} onAbrirDelivery={() => navigate('/delivery')} onAbrirContacto={() => navigate('/contacto')} onVolverAInicio={() => navigate('/')} onVerCatalogo={verCatalogo} />
        </>
      )}
    </div>
  )
}

export default App
