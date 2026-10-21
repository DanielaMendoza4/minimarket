import { Col, Container, Row } from 'react-bootstrap'
import ProductoCard from './ProductoCard'

function ListaProductos({ productos }) {
  return (
    <section id="productos" className="products-section" aria-labelledby="productos-titulo">
      <Container>
        <div className="section-heading">
          <p className="eyebrow">Directo de nuestros estantes</p>
          <h2 id="productos-titulo">Los favoritos de la esquina</h2>
        </div>
        <Row className="g-4">
          {productos.map((producto) => (
            <Col key={producto.id} xs={12} sm={6} lg={3}>
              <ProductoCard producto={producto} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default ListaProductos
