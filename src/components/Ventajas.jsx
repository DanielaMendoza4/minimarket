import { Container } from 'react-bootstrap'

const ventajas = [
  {
    numero: '01',
    titulo: 'Fresco de verdad',
    descripcion: 'Frutas y verduras de productores cercanos, repuestas cada mañana.',
    icono: <path d="M20 4c-8 0-14 4-14 11a5 5 0 0 0 5 5c7 0 10-8 9-16ZM4 21c2-5 5-8 10-11" />,
  },
  {
    numero: '02',
    titulo: 'Delivery en 40 min',
    descripcion: 'A casa o a la oficina, en un radio de 3 km.',
    icono: <><circle cx="6" cy="17" r="3" /><circle cx="18" cy="17" r="3" /><circle cx="13" cy="5" r="1" /><path d="m6 17 4-7h4l4 7m-8-7 3 7m-3-4h7" /></>,
  },
  {
    numero: '03',
    titulo: 'Hasta las 23:00',
    descripcion: 'Para la cena improvisada o el antojo de medianoche.',
    icono: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  },
  {
    numero: '04',
    titulo: 'Precios de barrio',
    descripcion: 'Sin sobreprecio de cadena. Ofertas nuevas cada semana.',
    icono: <path d="M5 9a7 7 0 0 1 14 0v3a3 3 0 0 1-3 3h-2l-2 4-2-4H8a3 3 0 0 1-3-3V9Zm4 1h.01M15 10h.01M9 13h6" />,
  },
]

function Ventajas() {
  return (
    <section className="benefits-section" aria-label="Ventajas de La Esquina">
      <Container>
        <div className="benefits-grid">
          {ventajas.map((ventaja) => (
            <article className="benefit" key={ventaja.numero}>
              <span className="benefit-number">{ventaja.numero}</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">{ventaja.icono}</svg>
              <h2>{ventaja.titulo}</h2>
              <p>{ventaja.descripcion}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Ventajas
