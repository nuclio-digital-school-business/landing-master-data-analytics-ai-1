const REASONS = [
  {
    title: 'Se empieza desde cero, con foco en negocio',
    text: 'Sin base técnica previa. Diseñado para perfiles de negocio, marketing o economía que quieren entender el negocio a través de los datos.',
  },
  {
    title: 'Las herramientas que piden las empresas',
    text: 'Python, SQL, Tableau, Looker Studio y MongoDB: exactamente el stack que aparece en las ofertas de Data Analyst y BI Engineer.',
  },
  {
    title: 'Más de 6 proyectos sobre problemas reales',
    text: 'Live-coding, labs, case studies con expertos y datos de sectores reales: marketing, ventas, logística, finanzas y salud.',
  },
  {
    title: 'Un proyecto final real y a tu medida',
    text: 'Eliges la temática que conecta con tu perfil y aplicas todo el ciclo analítico con un tutor experto en activo.',
  },
  {
    title: 'Docentes que trabajan con datos hoy',
    text: 'Profesionales en activo en empresas como Latency, PepsiCo, CaixaBank o El Corte Inglés.',
  },
  {
    title: 'Compatible con tu vida profesional',
    text: 'Online y part-time. Y si no puedes seguir una sesión en directo, queda grabada en el campus.',
  },
];

export default function Why() {
  return (
    <section className="sec why">
      <div className="wrap">
        <div className="eyebrow reveal">Por qué este máster</div>
        <h2 className="reveal">Pensado para gente de negocio, no para ingenieros.</h2>
        <div className="why-grid reveal-stagger">
          {REASONS.map((r) => (
            <div className="why-card" key={r.title}>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
