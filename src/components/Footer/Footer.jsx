import { Container } from 'react-bootstrap'

function Footer({ onAbrirCarrito, onAbrirDelivery, onAbrirContacto, onVolverAInicio, onVerCatalogo }) {
  return (
    <footer className="footer-esquina">
      <Container>
        <div className="footer-columns">
          <div className="footer-brand">
            <h2>La Esquina.</h2>
            <p>El minimarket del barrio. Lo que necesitas, cuando lo necesitas, sin salir de la cuadra.</p>
          </div>
          <div className="footer-contact">
            <h3>Encuéntranos</h3>
            <p><span aria-hidden="true">⌖</span> Av. Los Almendros 128, esquina con Jr. Lima</p>
            <p><span aria-hidden="true">◷</span> Lun a Dom · 7:00 - 23:00</p>
            <p><span aria-hidden="true">☏</span> (01) 555 0142</p>
          </div>
          <nav className="footer-links" aria-label="Enlaces del pie de página">
            <h3>Explora</h3>
            <a href="/" onClick={(event) => {
              event.preventDefault()
              onVolverAInicio()
            }}>Inicio</a>
            <a href="/#productos" onClick={(event) => {
              event.preventDefault()
              onVerCatalogo()
            }}>Catálogo</a>
            <a href="/delivery" onClick={(event) => {
              event.preventDefault()
              onAbrirDelivery()
            }}>Delivery</a>
            <a href="/contacto" onClick={(event) => {
              event.preventDefault()
              onAbrirContacto()
            }}>Contacto</a>
            <a href="/carrito" onClick={(event) => {
              event.preventDefault()
              onAbrirCarrito()
            }}>Carrito</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Minimarket La Esquina</span>
          <span>Productos sujetos a disponibilidad · Hecho con cariño en Lima</span>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
