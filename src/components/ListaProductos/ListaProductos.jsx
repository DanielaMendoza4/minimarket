import { Col, Container, Row } from 'react-bootstrap'
import ProductoCard from '../ProductoCard/ProductoCard'

function ListaProductos({ productos, carrito, onAgregar, mostrarTodos, onAlternarTodos }) {
  return (
    <section id="productos" className="products-section" aria-labelledby="productos-titulo">
      <Container>
        <div className="section-heading">
          <h2 id="productos-titulo">Lo que más sale</h2>
          {productos.length > 4 && (
            <button className="products-see-all" type="button" onClick={onAlternarTodos}>
              {mostrarTodos ? 'Ver menos' : 'Ver todo'}
            </button>
          )}
        </div>
        <Row className="g-4">
          {productos.map((producto) => (
            <Col key={producto.id} xs={12} sm={6} lg={3}>
              <ProductoCard
                producto={producto}
                cantidadEnCarrito={carrito.find((item) => item.id === producto.id)?.cantidad ?? 0}
                onAgregar={onAgregar}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default ListaProductos
