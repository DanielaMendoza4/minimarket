import { useRef, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import './Contacto.css'

const horarios = [
  ['Lunes a viernes', '7:00 – 23:00'],
  ['Sábado', '7:00 – 23:30'],
  ['Domingo y feriados', '8:00 – 22:00'],
]

function Contacto() {
  const formRef = useRef(null)
  const [enviando, setEnviando] = useState(false)

  const enviarMensaje = async (event) => {
    event.preventDefault()
    setEnviando(true)

    formRef.current.elements.time.value = new Date().toLocaleString('es-PE')

    try {
      console.log('EmailJS env:', {
        serviceId: Boolean(import.meta.env.VITE_EMAILJS_SERVICE_ID),
        templateId: Boolean(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
        publicKey: Boolean(import.meta.env.VITE_EMAILJS_PUBLIC_KEY),
      })

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      await Swal.fire({
        icon: 'success',
        title: '¡Mensaje enviado!',
        text: 'Gracias por escribirnos. Te respondemos hoy mismo.',
        confirmButtonColor: '#173f35',
      })
      formRef.current.reset()
    } catch (error) {
      console.error('EmailJS error:', error?.status, error?.text, error)
      Swal.fire({
        icon: 'error',
        title: 'No se pudo enviar',
        text: 'Intenta de nuevo en unos minutos o llámanos al (01) 555 0142.',
        confirmButtonColor: '#c94c3c',
      })
    } finally {
      setEnviando(false)
    }
  }

  return (
    <main id="contacto" className="contacto-page">
      <Container>
        <div className="contacto-grid">
          <section className="contacto-info" aria-labelledby="contacto-titulo">
            <p className="contacto-eyebrow">Contacto</p>
            <h1 id="contacto-titulo" className="contacto-titulo">Pasa a saludarnos</h1>

            <ul className="contacto-lista">
              <li>
                <MapPin className="contacto-icono" size={20} aria-hidden="true" />
                <span>Av. Los Almendros 128, esquina con Jr. Lima</span>
              </li>
              <li>
                <Phone className="contacto-icono" size={20} aria-hidden="true" />
                <span>(01) 555 0142 · WhatsApp 999 555 142</span>
              </li>
              <li>
                <Mail className="contacto-icono" size={20} aria-hidden="true" />
                <span>delcarmendani514@gmail.com</span>
              </li>
            </ul>

            <div className="contacto-horarios">
              <h2>
                <Clock className="contacto-icono" size={20} aria-hidden="true" />
                Horarios
              </h2>
              <dl>
                {horarios.map(([dia, hora]) => (
                  <div className="contacto-horario" key={dia}>
                    <dt>{dia}</dt>
                    <dd>{hora}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <form ref={formRef} className="contacto-form" onSubmit={enviarMensaje}>
            <h2>Escríbenos</h2>

            <label className="contacto-label">
              Nombre
              <input className="contacto-campo" name="name" type="text" autoComplete="name" required />
            </label>
            <label className="contacto-label">
              Correo o teléfono
              <input className="contacto-campo" name="reply_to" type="text" required />
            </label>
            <label className="contacto-label">
              Mensaje
              <textarea className="contacto-campo contacto-campo-mensaje" name="message" rows={5} required />
            </label>

            <input type="hidden" name="time" />

            <button className="contacto-boton" type="submit" disabled={enviando}>
              {enviando ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </form>
        </div>
      </Container>
    </main>
  )
}

export default Contacto