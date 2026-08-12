import { Footer, Header } from "../page";

const whatsapp = "https://wa.me/5491132595475";

export default function About() {
  return <><Header/><main>
    <section className="inner-hero about-intro">
      <p className="eyebrow">Sobre mí</p>
      <h1>Defensa penal con estrategia, claridad y compromiso humano</h1>
      <p>Acompaño a cada persona con una mirada integral, explicando cada decisión y construyendo una defensa sólida desde el primer momento.</p>
    </section>

    <figure className="about-page-photo"><img src="/julieta-tercera.png" alt="Julieta Vitale, abogada penalista"/></figure>

    <section className="about-story">
      <div className="story-columns">
        <div className="story-block"><p className="eyebrow">Trayectoria y compromiso</p><h2>Sobre mí</h2>
          <p>Mi forma de ejercer la defensa penal combina estrategia jurídica con un enfoque humano. Trabajo con empatía y transparencia, priorizando que cada persona comprenda su situación y pueda participar en las decisiones sobre su caso.</p>
          <p>No se trata solo de intervenir técnicamente, sino de acompañar y sostener en momentos de alta vulnerabilidad.</p>
        </div>

        <div className="story-block"><p className="eyebrow">Defensa integral</p><h2>Enfoque de trabajo</h2>
          <p>Intervengo en todas las etapas del proceso penal: desde la <strong>investigación penal preparatoria</strong> hasta el <strong>juicio</strong>, asegurando una defensa integral y sostenida.</p>
          <p><strong>Trabajo en equipo</strong> para garantizar disponibilidad permanente y respuesta rápida ante cualquier situación urgente.</p>
          <p>Mi actividad se desarrolla principalmente en la <strong>Provincia de Buenos Aires</strong>.</p>
        </div>
      </div>

      <div className="story-highlight"><p className="eyebrow">Experiencia</p><h2>Caso destacado</h2><p>Hemos logrado la detención domiciliaria de una persona imputada en un caso de narcotráfico, enfocando la estrategia en la vulneración del derecho a la salud dentro del contexto de encierro.</p></div>

      <div className="story-block"><h2>Valores</h2><div className="values-grid">
        <article><h3>Claridad</h3><p>Te explico todo en un lenguaje simple, sin tecnicismos innecesarios.</p></article>
        <article><h3>Compromiso</h3><p>Me involucro en cada caso como si fuera propio.</p></article>
        <article><h3>Cercanía</h3><p>Entiendo que detrás de cada causa hay una persona y una familia que necesita acompañamiento.</p></article>
      </div></div>

      <div className="about-cta"><h2>Estoy para ayudarte</h2><p>Si vos o alguien de tu familia está pasando por una situación legal, no dudes en contactarme.</p><a className="button" href={whatsapp} target="_blank" rel="noreferrer">Contactar por WhatsApp</a></div>
    </section>
  </main><Footer/></>;
}
