import { Container } from 'react-bootstrap'

const pasos = [
  {
    numero: '1',
    titulo: 'Elige',
    descripcion: 'Arma tu carrito desde el catálogo, sin cuenta ni registro.',
    icono: <path d="M3 10h18l-2 10H5L3 10Zm2 0 7-7 7 7M9 13v4m6-4v4" />,
  },
  {
    numero: '2',
    titulo: 'Preparamos',
    descripcion: 'Seleccionamos a mano cada producto, con la fruta más madura al final.',
    icono: <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Zm-8 4.5 8 4.7 8-4.7M12 12.2V21m-4-16.8 8 4.6" />,
  },
  {
    numero: '3',
    titulo: 'Salimos',
    descripcion: 'Un repartidor del barrio lleva tu pedido en bicicleta o moto.',
    icono: <><circle cx="6" cy="17" r="3" /><circle cx="18" cy="17" r="3" /><circle cx="13" cy="5" r="1" /><path d="m6 17 4-7h4l4 7m-8-7 3 7m-3-4h7" /></>,
  },
  {
    numero: '4',
    titulo: 'Recibes',
    descripcion: 'Llegamos a tu puerta en promedio en 40 minutos.',
    icono: <path d="M4 21h16M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M10 7h1m-1 4h1m4 10v-6h3" />,
  },
]

const zonas = [
  { nombre: 'Centro y Los Almendros', tiempo: '25 min', envio: 'Gratis desde S/ 50' },
  { nombre: 'San Martín y La Floresta', tiempo: '40 min', envio: 'Gratis desde S/ 50' },
  { nombre: 'Villa Norte', tiempo: '55 min', envio: 'Gratis desde S/ 80' },
]

function Delivery({ onEmpezarPedido }) {
  return (
    <main id="delivery" className="delivery-page">
      <section className="delivery-intro" aria-labelledby="delivery-titulo">
        <Container>
          <p className="delivery-eyebrow">Delivery</p>
          <h1 id="delivery-titulo">Del estante a tu puerta,<br />sin apuro ni complicación.</h1>

          <ol className="delivery-steps">
            {pasos.map((paso) => (
              <li className="delivery-step" key={paso.numero}>
                <span className="delivery-step-number">{paso.numero}</span>
                <svg viewBox="0 0 24 24" aria-hidden="true">{paso.icono}</svg>
                <h2>{paso.titulo}</h2>
                <p>{paso.descripcion}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="delivery-details" aria-label="Zonas y horario de reparto">
        <Container>
          <div className="delivery-details-grid">
            <div className="delivery-zones">
              <h2>Zonas y tiempos</h2>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Zona</th>
                    <th scope="col">Tiempo</th>
                    <th scope="col">Envío</th>
                  </tr>
                </thead>
                <tbody>
                  {zonas.map((zona) => (
                    <tr key={zona.nombre}>
                      <td>{zona.nombre}</td>
                      <td>{zona.tiempo}</td>
                      <td>{zona.envio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="delivery-zone-note">
                Pedidos menores a S/ 50 pagan S/ 8.00 de envío en las dos primeras zonas.
              </p>
            </div>

            <aside className="delivery-hours">
              <h2>Horario de reparto</h2>
              <p>
                Todos los días de 8:00 a 22:30. Pedidos recibidos después de las 22:30
                se entregan al día siguiente desde las 8:00.
              </p>
              <button type="button" className="delivery-order-button" onClick={onEmpezarPedido}>
                Empezar mi pedido
              </button>
            </aside>
          </div>
        </Container>
      </section>
    </main>
  )
}

export default Delivery
