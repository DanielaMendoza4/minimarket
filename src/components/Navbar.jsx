import { Container, Form, Navbar as BarraNavegacion, Nav } from 'react-bootstrap'

function Navbar() {
  return (
    <BarraNavegacion expand="lg" className="navbar-esquina sticky-top" data-bs-theme="dark">
      <Container>
        <BarraNavegacion.Brand href="#inicio" className="brand-esquina">
          <span className="brand-mark">L</span>
          <span>La Esquina</span>
        </BarraNavegacion.Brand>
        <BarraNavegacion.Toggle aria-controls="menu-principal" />
        <BarraNavegacion.Collapse id="menu-principal">
          <Nav className="me-auto">
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#delivery">Delivery</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
          <Form className="d-flex navbar-search" role="search">
            <Form.Control type="search" placeholder="Buscar productos" aria-label="Buscar productos" />
          </Form>
          <button type="button" className="btn btn-amarillo ms-lg-3 mt-3 mt-lg-0">
            Carrito <span className="badge text-bg-rojo">0</span>
          </button>
        </BarraNavegacion.Collapse>
      </Container>
    </BarraNavegacion>
  )
}

export default Navbar
