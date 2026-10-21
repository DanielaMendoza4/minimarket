import { Container } from 'react-bootstrap'

function Footer() {
  return (
    <footer className="footer-esquina">
      <Container className="d-flex flex-column flex-md-row justify-content-between gap-3">
        <span>© 2026 La Esquina. Hecho con cariño en Lima.</span>
        <span>Productos sujetos a disponibilidad.</span>
      </Container>
    </footer>
  )
}

export default Footer
