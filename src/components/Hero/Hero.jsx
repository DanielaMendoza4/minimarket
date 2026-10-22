import { Button, Col, Container, Row } from 'react-bootstrap'
import { imagenHero } from '../../assets/imagenes'

function Hero({ onVerCatalogo, onAbrirDelivery }) {
  return (
    <section id="inicio" className="hero-section">
      <Container>
        <Row className="align-items-center g-4">
          <Col lg={7}>
            <p className="eyebrow">N° 128 · DESDE 1998</p>
            <h1>Tu despensa, <em>a la vuelta</em> de la esquina.</h1>
            <p className="hero-copy">Verduras del día, lácteos, bebidas frías y todo lo que se acaba justo cuando lo necesitas. Pide por la web y lo llevamos a tu puerta.</p>
            <div className="hero-actions">
              <Button className="btn-rojo" onClick={onVerCatalogo}>Ver catálogo <span>→</span></Button>
              <Button className="btn-outline-esquina" onClick={onAbrirDelivery}>Cómo funciona el delivery</Button>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero-photo-wrap">
              <img className="hero-photo" src={imagenHero} alt="Ilustración de frutas frescas en una caja" />
              <a className="hero-sticker" href="#productos">
                <small>OFERTA DE LA SEMANA</small>
                <strong>Paltas S/ 20.60 <i>/kg</i></strong>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
