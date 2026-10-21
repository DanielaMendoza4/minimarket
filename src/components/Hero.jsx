import { Button, Col, Container, Row } from 'react-bootstrap'

function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <Container>
        <Row className="align-items-center g-4">
          <Col lg={7}>
            <p className="eyebrow">Tu tienda de confianza en Lima</p>
            <h1>Todo lo que necesitas, <span>cerquita de casa.</span></h1>
            <p className="hero-copy">Compra tus favoritos del barrio y recíbelos rápido, fresco y seguro.</p>
            <Button href="#productos" className="btn-rojo">Ver productos</Button>
          </Col>
          <Col lg={5}>
            <div className="hero-illustration" role="img" aria-label="Canasta con productos del minimarket">
              <span className="hero-sticker">¡Qué rico!</span>
              🛒
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
