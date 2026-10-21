import { Col, Container, Row } from 'react-bootstrap'

function Delivery() {
  return (
    <section id="delivery" className="delivery-section">
      <Container>
        <Row className="g-4">
          <Col md={7}>
            <p className="eyebrow">Llegamos a tu puerta</p>
            <h2>Delivery fácil y rapidito</h2>
            <p>Estamos preparando una experiencia de delivery pensada para tu barrio.</p>
          </Col>
          <Col md={5} className="delivery-highlight">
            <strong>Próximamente</strong>
            <span>Consulta nuestra cobertura</span>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Delivery
