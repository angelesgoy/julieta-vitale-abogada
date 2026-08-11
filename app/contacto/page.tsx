import { Footer, Header } from "../page";

const whatsapp = "https://wa.me/1132595475";

export default function Contact() {
  return <><Header/><main className="contact-page">
    <section className="contact-hero">
      <p className="eyebrow">Contacto</p>
      <h1>Hablemos de tu situación</h1>
      <p>Si necesitás asesoramiento penal —para vos o un familiar— no dudes en escribirme. La consulta es confidencial.</p>
      <strong>Atención de urgencias penales las 24 horas.</strong>
      <a className="button whatsapp-button" href={whatsapp} target="_blank" rel="noreferrer"><span>Contactar por WhatsApp<small>Respuesta rápida y confidencial</small></span><b aria-hidden="true">→</b></a>
      <div className="contact-facts">
        <article><span aria-hidden="true">✉</span><div><h3>Email</h3><a href="mailto:mairajulietavitale@gmail.com">mairajulietavitale@gmail.com</a></div></article>
        <article><span aria-hidden="true">⌖</span><div><h3>Ubicación</h3><p>San Martín, Provincia de Buenos Aires</p></div></article>
        <article><span aria-hidden="true">◷</span><div><h3>Disponibilidad</h3><p>Urgencias las 24 horas</p></div></article>
      </div>
    </section>

    <section className="contact-studio">
      <div className="section-heading"><p className="eyebrow">Atención presencial</p><h2>Mi estudio</h2><p>Visitanos o coordiná una consulta presencial.</p><address>Ada Elflein 668, San Martín, Provincia de Buenos Aires</address></div>
      <div className="map-embed"><iframe title="Ubicación del estudio de Julieta Vitale" src="https://www.google.com/maps?q=-34.5405276,-58.5826711&z=16&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div>
      <div className="center"><a className="button map-button" href="https://maps.app.goo.gl/n3bXYQYkjrCjkj7K7" target="_blank" rel="noreferrer"><span aria-hidden="true">⌖</span> Abrir en Google Maps</a></div>
    </section>
  </main><Footer/></>;
}
