import { Container } from 'react-bootstrap'

function Categorias({ categorias, categoriaActiva, onCambiarCategoria }) {
  return (
    <section className="categories-section" aria-labelledby="categorias-titulo">
      <Container>
        <div className="d-flex flex-wrap align-items-center gap-2">
          <h2 id="categorias-titulo" className="visually-hidden">Categorías</h2>
          {categorias.map((categoria) => (
            <button
              type="button"
              className={`category-chip${categoriaActiva === categoria ? ' active' : ''}`}
              aria-pressed={categoriaActiva === categoria}
              key={categoria}
              onClick={() => onCambiarCategoria(categoria)}
            >
              {categoria}
            </button>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Categorias
