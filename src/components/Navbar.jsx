import { Container, Navbar as BarraNavegacion, Nav } from "react-bootstrap";

function Navbar() {
  return (
    <>
      <div className="announcement-bar">
        <div
          className="announcement-track"
          aria-label="Promociones de La Esquina"
        >
          <div className="announcement-group">
            <span>Delivery gratis desde S/ 50</span>
            <span>Verdura fresca cada mañana</span>
            <span>Pan caliente a las 7:30</span>
            <span>Abierto todos los días de 7:00 a 23:00</span>
          </div>
          <div className="announcement-group" aria-hidden="true">
            <span>Delivery gratis desde S/ 50</span>
            <span>Verdura fresca cada mañana</span>
            <span>Pan caliente a las 7:30</span>
            <span>Abierto todos los días de 7:00 a 23:00</span>
          </div>
        </div>
      </div>
      <BarraNavegacion
        expand="lg"
        className="navbar-esquina"
        data-bs-theme="light"
      >
        <Container>
          <BarraNavegacion.Brand href="#inicio" className="brand-esquina">
            <span>La Esquina.</span>
            <small>MINIMARKET</small>
          </BarraNavegacion.Brand>
          <BarraNavegacion.Toggle aria-controls="menu-principal" />
          <BarraNavegacion.Collapse id="menu-principal">
            <Nav className="mx-auto">
              <Nav.Link className="active" href="#inicio">
                Inicio
              </Nav.Link>
              <Nav.Link href="#productos">Catálogo</Nav.Link>

              <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
            <button type="button" className="btn btn-carrito">
              Carrito <span>0</span>
            </button>
          </BarraNavegacion.Collapse>
        </Container>
      </BarraNavegacion>
    </>
  );
}

export default Navbar;
