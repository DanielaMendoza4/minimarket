import { Badge, Button, Card } from 'react-bootstrap'

function ProductoCard({ producto, cantidadEnCarrito, onAgregar }) {
  const agotado = producto.stock === 0

  return (
    <Card className="product-card h-100">
      <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} />
      <Card.Body className="d-flex flex-column">
        <span className="product-category">{producto.categoria} · {producto.subcategoria}</span>
        <div className="d-flex justify-content-between gap-2">
          <Card.Title className="h5">{producto.nombre}</Card.Title>
          {agotado && <Badge bg="rojo" className="product-badge">Agotado</Badge>}
        </div>
        <Card.Text className="product-unit">{producto.unidad}</Card.Text>
        <Card.Text className="product-description">{producto.descripcion}</Card.Text>
        <div className="mt-auto d-flex justify-content-between align-items-center gap-2">
          <strong className="product-price">S/ {producto.precio.toFixed(2)}</strong>
          <Button
            className="product-add-button"
            size="sm"
            disabled={agotado || cantidadEnCarrito >= producto.stock}
            onClick={() => onAgregar(producto)}
          >
            <span aria-hidden="true">+</span>
            {cantidadEnCarrito > 0 ? `En carrito (${cantidadEnCarrito})` : 'Agregar'}
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProductoCard
