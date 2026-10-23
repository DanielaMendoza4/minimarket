import { Container, Navbar as BarraNavegacion, Nav } from "react-bootstrap";

function Navbar({ cantidadEnCarrito, vista, onAbrirCarrito, onAbrirDelivery, onAbrirContacto, onVolverAComprar, onVerCatalogo }) {
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
          <BarraNavegacion.Brand href="/" className="brand-esquina" onClick={(event) => {
            event.preventDefault()
            onVolverAComprar()
          }}>
            <span>La Esquina.</span>
            <small>MINIMARKET</small>
          </BarraNavegacion.Brand>
          <BarraNavegacion.Toggle aria-controls="menu-principal" />
          <BarraNavegacion.Collapse id="menu-principal">
            <Nav className="mx-auto">
              <Nav.Link className={vista === 'inicio' ? 'active' : ''} href="/" onClick={(event) => {
                event.preventDefault()
                onVolverAComprar()
              }}>
                Inicio
              </Nav.Link>
              <Nav.Link className={vista === 'catalogo' ? 'active' : ''} href="/catalogo" onClick={(event) => {
                event.preventDefault()
                onVerCatalogo()
              }}>Catálogo</Nav.Link>
              <Nav.Link className={vista === 'delivery' ? 'active' : ''} href="/delivery" onClick={(event) => {
                event.preventDefault()
                onAbrirDelivery()
              }}>Delivery</Nav.Link>
              <Nav.Link className={vista === 'contacto' ? 'active' : ''} href="/contacto" onClick={(event) => {
                event.preventDefault()
                onAbrirContacto()
              }}>Contacto</Nav.Link>
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
