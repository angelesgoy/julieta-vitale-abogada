import Link from "next/link";

const phone = "5491132595475";
const generalMessage = encodeURIComponent("Hola, necesito asesoramiento por un tema penal. Mi situación es…");
const whatsapp = (message = generalMessage) => `https://wa.me/${phone}?text=${message}`;

const practices = [
  ["Defensa penal estratégica", "Representación legal con una estrategia diseñada a medida para cada caso, protegiendo tus derechos en cada etapa del proceso."],
  ["Excarcelaciones", "Gestión urgente para obtener la libertad de personas detenidas, con acompañamiento inmediato y respuesta rápida."],
  ["Morigeraciones de prisión preventiva", "Gestión de detenciones domiciliarias y alternativas al encierro, priorizando los derechos de la persona imputada."],
  ["Recursos y seguimiento del proceso", "Presentación de recursos legales y seguimiento completo de tu causa en todas las instancias."],
];

const faqs = [
  ["¿Qué hace un abogado penalista?", "Interviene en causas penales desde el primer momento, asesora, diseña la estrategia de defensa y representa a la persona durante todo el proceso."],
  ["¿Cuándo debería contactar a un abogado penal?", "Lo antes posible. Una consulta temprana permite proteger derechos, evitar errores y definir con claridad los próximos pasos."],
  ["¿Puedo consultar por un familiar?", "Sí. Podés escribirnos si un familiar fue detenido, citado o está atravesando una situación penal."],
  ["¿La consulta es confidencial?", "Sí. Toda la información compartida durante la consulta es tratada con absoluta reserva profesional."],
  ["¿Atienden urgencias?", "Sí. Atendemos urgencias penales las 24 horas y priorizamos los casos que requieren una respuesta inmediata."],
];

export function Header() {
  return <header className="site-header"><div className="nav-wrap">
    <Link className="brand" href="/"><span>JULIETA</span> VITALE</Link>
    <nav aria-label="Navegación principal">
      <Link href="/">Inicio</Link><Link href="/sobre-mi">Sobre mí</Link><Link href="/areas-de-practica">Áreas de práctica</Link><Link href="/contacto">Contacto</Link>
    </nav>
    <a className="button button-small" href={whatsapp()} target="_blank" rel="noreferrer">Consultar</a>
  </div></header>;
}

export function Footer() {
  return <footer><div className="footer-grid">
    <div><h3>Julieta Vitale</h3><p>Abogada penalista. Defensa clara, acompañamiento humano y compromiso con cada caso.</p></div>
    <div><h4>Navegación</h4><Link href="/">Inicio</Link><Link href="/sobre-mi">Sobre mí</Link><Link href="/areas-de-practica">Áreas de práctica</Link><Link href="/contacto">Contacto</Link></div>
    <div><h4>Contacto</h4><p>Buenos Aires, Argentina</p><a href="mailto:mairajulietavitale@gmail.com">mairajulietavitale@gmail.com</a></div>
  </div><div className="copyright">© 2026 Julieta Vitale. Todos los derechos reservados.</div></footer>;
}

function JulietaPhoto({ variant = "portrait", label = "Julieta Vitale" }) {
  const source = variant === "wide" ? "/julieta-about.jpg" : "/julieta-hero.jpg";
  return <figure className={`julieta-photo ${variant}`}><img src={source} alt={label}/></figure>;
}

export default function Home() {
  return <><Header/><main>
    <section className="hero"><div className="hero-copy">
      <p className="eyebrow">Abogada Penalista</p>
      <h1>Defensa penal estratégica y acompañamiento en momentos difíciles</h1>
      <p className="lead">Si estás atravesando una situación legal o un familiar necesita ayuda, podés recibir asesoramiento claro, rápido y profesional.</p>
      <p className="availability"><span/>Atención de urgencias penales las 24 horas.</p>
      <a className="button" href={whatsapp()} target="_blank" rel="noreferrer">Contactar por WhatsApp <b>→</b></a>
    </div><div className="hero-photo"><JulietaPhoto label="Julieta Vitale, abogada penalista"/></div></section>

    <section className="urgent section"><div className="section-heading light"><p className="eyebrow">Respuesta inmediata</p><h2>¿Necesitás ayuda urgente?</h2><p>Elegí tu situación y contactanos de inmediato.</p></div>
      <div className="urgent-grid">
        {[['01','Me detuvieron','Hola, me detuvieron y necesito asesoramiento urgente.'],['02','Detuvieron a un familiar','Hola, detuvieron a un familiar y necesito ayuda urgente.'],['03','Necesito asesoramiento','Hola, necesito asesoramiento por un tema penal. Mi situación es…']].map(([n,t,m])=><a key={n} href={whatsapp(encodeURIComponent(m))} target="_blank" rel="noreferrer"><span>{n}</span><h3>{t}</h3><small>Consultar ahora →</small></a>)}
      </div>
    </section>

    <section className="section practices"><div className="section-heading"><p className="eyebrow">Asesoramiento especializado</p><h2>Áreas de práctica</h2><p>Especialización en derecho penal con enfoque humano y estratégico.</p></div>
      <div className="practice-grid">{practices.map(([title,text],i)=><article key={title}><div className="practice-number">0{i+1}</div><h3>{title}</h3><p>{text}</p><a href={whatsapp(encodeURIComponent(`Hola, necesito asesoramiento sobre ${title.toLowerCase()}.`))} target="_blank" rel="noreferrer">Consultar por WhatsApp →</a></article>)}</div>
      <div className="center"><Link className="text-link" href="/areas-de-practica">Ver todas las áreas →</Link></div>
    </section>

    <section className="about section"><JulietaPhoto variant="wide" label="Julieta Vitale en su estudio"/><div><p className="eyebrow">Compromiso y cercanía</p><h2>Sobre Julieta Vitale</h2><p>Mi forma de ejercer la defensa penal combina estrategia jurídica con un enfoque humano. Trabajo con empatía y transparencia, priorizando que cada persona comprenda su situación y pueda participar en las decisiones sobre su caso.</p><p>No se trata solo de intervenir técnicamente, sino de acompañar y sostener en momentos de alta vulnerabilidad.</p><Link className="text-link" href="/sobre-mi">Conocer más →</Link></div></section>

    <section className="process section"><div className="section-heading"><p className="eyebrow">Paso a paso</p><h2>¿Cómo trabajamos?</h2><p>Un proceso simple, claro y pensado para vos.</p></div><div className="steps">
      {[['01','Contacto por WhatsApp','Escribinos contando brevemente tu situación. Respondemos rápido, incluso fuera de horario.'],['02','Evaluación de la situación','Analizamos los detalles de tu caso para entender la mejor forma de ayudarte.'],['03','Estrategia legal personalizada','Diseñamos un plan de defensa a medida y te explicamos cada paso con claridad.']].map(([n,t,x])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{x}</p></article>)}
    </div></section>

    <section className="faq section"><div className="section-heading"><p className="eyebrow">Información útil</p><h2>Preguntas frecuentes</h2><p>Respuestas claras a las dudas más comunes.</p></div><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>

    <section className="studio section"><div><p className="eyebrow">Atención presencial</p><h2>Mi estudio</h2><p>Visitanos o coordiná una consulta presencial.</p><a className="button outline" href="https://maps.app.goo.gl/C46zpkmxcssRJsbn7" target="_blank" rel="noreferrer">Abrir en Google Maps</a></div><div className="map-placeholder"><span>Buenos Aires</span><small>Ubicación del estudio</small></div></section>
    <section className="final-cta"><p className="eyebrow">Estamos para ayudarte</p><h2>Si estás pasando por una situación legal, podés recibir asesoramiento ahora.</h2><a className="button pale" href={whatsapp()} target="_blank" rel="noreferrer">Contactar ahora por WhatsApp →</a></section>
  </main><Footer/><a className="whatsapp-float" href={whatsapp()} aria-label="Contactar por WhatsApp" target="_blank" rel="noreferrer">WA</a></>;
}
