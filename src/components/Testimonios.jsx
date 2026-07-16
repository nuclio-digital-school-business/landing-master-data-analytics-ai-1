const QUOTES = [
  {
    text: 'Llegué desde marketing sin saber picar una línea de código. Hoy construyo mis propios dashboards y ya no dependo de nadie para responder a negocio.',
    name: 'Marta Ruiz',
    role: 'Marketing Analyst en fintech',
  },
  {
    text: 'La metodología 100% en directo lo cambia todo: preguntas en el momento y ves cómo se resuelven problemas reales, no ejercicios de manual.',
    name: 'Javier Alonso',
    role: 'Data Analyst · antes en RR.HH.',
  },
  {
    text: 'El proyecto final fue lo que me abrió la puerta a mi nuevo trabajo. Lo llevé directo a la entrevista y marcó la diferencia.',
    name: 'Carla Méndez',
    role: 'Business Analyst en e-commerce',
  },
];

export default function Testimonios() {
  return (
    <section className="sec testimonios">
      <div className="wrap">
        <span className="eyebrow reveal">Testimonios</span>
        <h2 className="reveal">Lo que dicen quienes ya lo vivieron.</h2>
        <div className="quote-grid reveal-stagger">
          {QUOTES.map((q) => (
            <div className="quote-card" key={q.name}>
              <svg className="quote-card__mark" viewBox="0 0 60 48" aria-hidden="true">
                <path
                  d="M0 48V29.5C0 12.9 9.6 2.3 24 0l2.6 6.8C17.4 9.6 12.3 15.6 11.6 24h13.2v24H0Zm34.2 0V29.5C34.2 12.9 43.8 2.3 58.2 0l2.6 6.8c-9.2 2.8-14.3 8.8-15 17.2h13.2v24H34.2Z"
                  fill="currentColor"
                />
              </svg>
              <p className="quote-card__text">“{q.text}”</p>
              <div className="quote-card__foot">
                <h4>{q.name}</h4>
                <span>{q.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
