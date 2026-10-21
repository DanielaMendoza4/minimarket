import { Offcanvas } from 'react-bootstrap'

function Carrito() {
  return (
    <Offcanvas placement="end" show={false} onHide={() => {}} aria-labelledby="carrito-titulo">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="carrito-titulo">Tu carrito</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>Tu carrito aparecerá aquí.</Offcanvas.Body>
    </Offcanvas>
  )
}

export default Carrito
