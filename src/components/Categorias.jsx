import { Container } from 'react-bootstrap'

function Categorias({ categorias }) {
  return (
    <section className="categories-section" aria-labelledby="categorias-titulo">
      <Container>
        <div className="d-flex flex-wrap align-items-center gap-2">
          <h2 id="categorias-titulo" className="h5 mb-0 me-2">Compra por categoría</h2>
          {categorias.map((categoria) => (
            <button type="button" className="category-chip" key={categoria}>{categoria}</button>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Categorias
