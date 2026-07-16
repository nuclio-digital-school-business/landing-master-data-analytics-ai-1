const STATS = [
  { num: '25', lbl: 'Semanas part-time' },
  { num: '+6', lbl: 'Proyectos prácticos' },
  { num: '7', lbl: 'Piezas de portfolio' },
  { num: '+50', lbl: 'Ediciones de máster' },
];

export default function Stats() {
  return (
    <section className="sec stats-sec">
      <img
        src="/images/decoracion nuclio.png"
        alt=""
        className="stats-deco stats-deco--tl"
        aria-hidden="true"
      />
      <img
        src="/images/decoracion nuclio.png"
        alt=""
        className="stats-deco stats-deco--br"
        aria-hidden="true"
      />
      <div className="wrap">
        <h2 className="reveal">
          Sal con un portfolio que <span className="stats-hl">demuestra lo que sabes hacer</span>.
        </h2>
        <p className="subt reveal">
          Más de 6 proyectos con datos reales de marketing, ventas, logística, finanzas y salud.
          Terminas con un proyecto final mentorizado que defiendes ante tribunal y que puedes
          llevar directo a cualquier entrevista.
        </p>
        <div className="stats-grid reveal-stagger">
          {STATS.map((s) => (
            <div className="stat-card" key={s.lbl}>
              <div className="num">{s.num}</div>
              <div className="lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}