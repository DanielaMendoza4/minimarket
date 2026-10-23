import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Search } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import ProductoCard from '../ProductoCard/ProductoCard'
import { categorias, productos, subcategoriasPorCategoria } from '../../data/productos'
import './Catalogo.css'

const TODAS = 'Todo'
const TODAS_SUBCATEGORIAS = 'Todas'

const ORDENES = [
  ['destacados', 'Destacados'],
  ['precio-asc', 'Menor precio'],
  ['precio-desc', 'Mayor precio'],
]

const normalizar = (texto) =>
  texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()

function Catalogo({ carrito, onAgregar }) {
  const [params, setParams] = useSearchParams()
  const [orden, setOrden] = useState('destacados')

  const categoriaParam = params.get('cat') ?? TODAS
  const categoria = categorias.includes(categoriaParam) ? categoriaParam : TODAS
  const subcategoriasDisponibles = categoria === TODAS ? [] : subcategoriasPorCategoria[categoria] ?? []
  const subcategoriaParam = params.get('sub') ?? TODAS_SUBCATEGORIAS
  const subcategoria = subcategoriasDisponibles.includes(subcategoriaParam)
    ? subcategoriaParam
    : TODAS_SUBCATEGORIAS
  const busqueda = params.get('q') ?? ''

  const termino = normalizar(busqueda.trim())
  const productosFiltrados = productos
    .filter((producto) => {
      const coincideCategoria = categoria === TODAS || producto.categoria === categoria
      const coincideSubcategoria =
        subcategoria === TODAS_SUBCATEGORIAS || producto.subcategoria === subcategoria
      const coincideBusqueda = !termino || normalizar(producto.nombre).includes(termino)
      return coincideCategoria && coincideSubcategoria && coincideBusqueda
    })
    .sort((a, b) => {
      if (orden === 'precio-asc') return a.precio - b.precio
      if (orden === 'precio-desc') return b.precio - a.precio

      // Array.prototype.sort es estable: conserva el orden original entre los empates.
      return Number(b.destacado) - Number(a.destacado)
    })

  const actualizarParametro = (clave, valor) => {
    setParams((previos) => {
      const siguientes = new URLSearchParams(previos)
      if (valor) siguientes.set(clave, valor)
      else siguientes.delete(clave)
      return siguientes
    }, { replace: true })
  }

  const seleccionarCategoria = (nuevaCategoria) => {
    setParams((previos) => {
      const siguientes = new URLSearchParams(previos)

      if (nuevaCategoria === TODAS) siguientes.delete('cat')
      else siguientes.set('cat', nuevaCategoria)

      siguientes.delete('sub')
      return siguientes
    }, { replace: true })
  }

  const limpiarFiltros = () => {
    setParams({}, { replace: true })
  }

  return (
    <main id="catalogo" className="catalogo-page">
      <Container>
        <p className="catalogo-eyebrow">Catálogo</p>
        <h1 className="catalogo-titulo">Todo para tu mesa</h1>

        <div className="catalogo-barra">
          <div className="catalogo-categorias" role="group" aria-label="Filtrar por categoría">
            {[TODAS, ...categorias].map((nombreCategoria) => (
              <button
                key={nombreCategoria}
                type="button"
                className={`catalogo-categoria${categoria === nombreCategoria ? ' activa' : ''}`}
                aria-pressed={categoria === nombreCategoria}
                onClick={() => seleccionarCategoria(nombreCategoria)}
              >
                {nombreCategoria}
              </button>
            ))}
          </div>

          <div className="catalogo-controles">
            <label className="catalogo-buscador">
              <Search size={16} aria-hidden="true" />
              <input
                type="search"
                value={busqueda}
                onChange={(event) => actualizarParametro('q', event.target.value)}
                placeholder="Buscar producto"
                aria-label="Buscar producto"
              />
            </label>

            <select
              className="catalogo-select catalogo-subcategoria"
              value={subcategoria}
              onChange={(event) => actualizarParametro('sub', event.target.value === TODAS_SUBCATEGORIAS ? '' : event.target.value)}
              disabled={categoria === TODAS}
              aria-label="Filtrar por subcategoría"
            >
              <option value={TODAS_SUBCATEGORIAS}>
                {categoria === TODAS ? 'Elige una categoría' : 'Todas las subcategorías'}
              </option>
              {subcategoriasDisponibles.map((nombreSubcategoria) => (
                <option key={nombreSubcategoria} value={nombreSubcategoria}>
                  {nombreSubcategoria}
                </option>
              ))}
            </select>

            <select
              className="catalogo-select catalogo-orden"
              value={orden}
              onChange={(event) => setOrden(event.target.value)}
              aria-label="Ordenar productos"
            >
              {ORDENES.map(([valor, etiqueta]) => (
                <option key={valor} value={valor}>{etiqueta}</option>
              ))}
            </select>
          </div>
        </div>

        {productosFiltrados.length === 0 ? (
          <div className="catalogo-vacio">
            <p>No encontramos productos con esa búsqueda</p>
            <button type="button" className="catalogo-limpiar" onClick={limpiarFiltros}>
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="catalogo-grid">
            {productosFiltrados.map((producto) => (
              <ProductoCard
                key={producto.id}
                producto={producto}
                cantidadEnCarrito={carrito.find((item) => item.id === producto.id)?.cantidad ?? 0}
                onAgregar={onAgregar}
              />
            ))}
          </div>
        )}
      </Container>
    </main>
  )
}

export default Catalogo
