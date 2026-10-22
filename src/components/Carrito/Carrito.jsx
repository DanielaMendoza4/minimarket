import { useState } from 'react'
import { Container } from 'react-bootstrap'

const COSTO_DELIVERY = 8
const MONTO_DELIVERY_GRATIS = 50

function soles(valor) {
  return `S/ ${valor.toFixed(2)}`
}

function Carrito({
  productos,
  onCambiarCantidad,
  onEliminar,
  onVaciar,
  onSeguirComprando,
}) {
  const [mensajePedido, setMensajePedido] = useState('')
  const subtotal = productos.reduce((total, producto) => total + producto.precio * producto.cantidad, 0)
  const delivery = subtotal === 0 || subtotal >= MONTO_DELIVERY_GRATIS ? 0 : COSTO_DELIVERY
  const total = subtotal + delivery
  const restanteParaDeliveryGratis = Math.max(0, MONTO_DELIVERY_GRATIS - subtotal)
  const progresoDelivery = Math.min((subtotal / MONTO_DELIVERY_GRATIS) * 100, 100)

  return (
    <main id="carrito" className="cart-page">
      <Container>
        <div className="cart-layout">
          <section className="cart-items" aria-labelledby="carrito-titulo">
            <div className="cart-heading">
              <h1 id="carrito-titulo">Tu carrito</h1>
              {productos.length > 0 && (
                <button className="cart-clear" type="button" onClick={onVaciar}>
                  Vaciar
                </button>
              )}
            </div>

            {productos.length > 0 ? (
              <ul className="cart-list">
                {productos.map((producto) => (
                  <li className="cart-item" key={producto.id}>
                    <div className="cart-product-mark" aria-hidden="true">
                      {producto.nombre.charAt(0).toUpperCase()}
                    </div>
                    <div className="cart-product-info">
                      <strong>{producto.nombre}</strong>
                      <span>{producto.unidad} · {soles(producto.precio)}</span>
                    </div>
                    <div className="cart-quantity" aria-label={`Cantidad de ${producto.nombre}`}>
                      <button
                        type="button"
                        aria-label={`Quitar una unidad de ${producto.nombre}`}
                        onClick={() => onCambiarCantidad(producto.id, producto.cantidad - 1)}
                      >
                        −
                      </button>
                      <span aria-live="polite">{producto.cantidad}</span>
                      <button
                        type="button"
                        aria-label={`Agregar una unidad de ${producto.nombre}`}
                        disabled={producto.cantidad >= producto.stock}
                        onClick={() => onCambiarCantidad(producto.id, producto.cantidad + 1)}
                      >
                        +
                      </button>
                    </div>
                    <strong className="cart-line-total">{soles(producto.precio * producto.cantidad)}</strong>
                    <button
                      className="cart-remove"
                      type="button"
                      aria-label={`Eliminar ${producto.nombre} del carrito`}
                      onClick={() => onEliminar(producto.id)}
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M4 7h16M10 11v6m4-6v6M6 7l1 14h10l1-14M9 7V4h6v3" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="cart-empty">
                <p>Tu carrito está vacío.</p>
                <button className="cart-continue" type="button" onClick={onSeguirComprando}>
                  Explorar productos
                </button>
              </div>
            )}
          </section>

          <aside className="cart-summary" aria-labelledby="resumen-titulo">
            <h2 id="resumen-titulo">Resumen</h2>
            <div className="cart-summary-line">
              <span>Subtotal</span>
              <span>{soles(subtotal)}</span>
            </div>
            <div className="cart-summary-line">
              <span>Delivery</span>
              <span>{delivery === 0 && subtotal > 0 ? 'Gratis' : soles(delivery)}</span>
            </div>
            <div className="cart-summary-total">
              <strong>Total</strong>
              <strong>{soles(total)}</strong>
            </div>

            <div className="cart-delivery-progress">
              <p aria-live="polite">
                {subtotal >= MONTO_DELIVERY_GRATIS
                  ? '¡Tu delivery es gratis!'
                  : `Te faltan ${soles(restanteParaDeliveryGratis)} para delivery gratis.`}
              </p>
              <div
                className="cart-progress-track"
                role="progressbar"
                aria-label="Progreso para obtener delivery gratis"
                aria-valuemin="0"
                aria-valuemax={MONTO_DELIVERY_GRATIS}
                aria-valuenow={Math.min(subtotal, MONTO_DELIVERY_GRATIS)}
              >
                <span style={{ width: `${progresoDelivery}%` }} />
              </div>
            </div>

            <button
              className="cart-checkout"
              type="button"
              disabled={productos.length === 0}
              onClick={() => setMensajePedido('El pago aún no está conectado. Tu carrito sigue guardado.')}
            >
              Finalizar pedido
            </button>
            <p className="cart-demo-note" role="status">
              {mensajePedido || 'Vista de demostración: el pago aún no está conectado.'}
            </p>
          </aside>
        </div>
      </Container>
    </main>
  )
}

export default Carrito
