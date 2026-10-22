import { Container, Navbar as BarraNavegacion, Nav } from "react-bootstrap";

function Navbar({ cantidadEnCarrito, vista, onAbrirCarrito, onAbrirDelivery, onVolverAComprar, onVerCatalogo }) {
  return (
    <>
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
              <Nav.Link className={vista === 'inicio' ? 'active' : ''} href="#inicio" onClick={onVolverAComprar}>
                Inicio
              </Nav.Link>
              <Nav.Link href="#productos" onClick={(event) => {
                event.preventDefault()
                onVerCatalogo()
              }}>Catálogo</Nav.Link>
              <Nav.Link className={vista === 'delivery' ? 'active' : ''} href="#delivery" onClick={(event) => {
                event.preventDefault()
                onAbrirDelivery()
              }}>Delivery</Nav.Link>
              <Nav.Link href="#contacto" onClick={onVolverAComprar}>Contacto</Nav.Link>
            </Nav>
            <button type="button" className="btn btn-carrito" onClick={onAbrirCarrito} aria-label={`Abrir carrito con ${cantidadEnCarrito} productos`}>
              <svg className="cart-button-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 10h18l-2 10H5L3 10Zm2 0 7-7 7 7M9 13v4m6-4v4" />
              </svg>
              Carrito <span>{cantidadEnCarrito}</span>
            </button>
          </BarraNavegacion.Collapse>
        </Container>
      </BarraNavegacion>
    </>
  );
}

export default Navbar;
