import { Col, Container, Row } from 'react-bootstrap'

function Contacto() {
  return (
    <section id="contacto" className="contact-section">
      <Container>
        <Row className="g-4">
          <Col md={6}>
            <p className="eyebrow">Estamos para ayudarte</p>
            <h2>Visítanos o escríbenos</h2>
            <p>Av. La Amistad 123, Santiago de Surco, Lima</p>
            <p>Todos los días, de 8:00 a. m. a 10:00 p. m.</p>
          </Col>
          <Col md={6}>
            <div className="contact-card">
              <strong>¿Tienes alguna consulta?</strong>
              <p className="mb-0">Nuestro equipo del barrio está listo para atenderte.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contacto
