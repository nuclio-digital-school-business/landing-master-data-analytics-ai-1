export default function EmpleoVideo() {
  return (
    <section className="empleo-video-sec empleo-photo-bg">
      <div className="empleo-video-overlay" />
      <div className="wrap">
        <img
          src="/images/decoracion-nuclio-oscuro.png"
          alt=""
          className="why-deco why-deco--tl"
          aria-hidden="true"
        />
        <h2 className="reveal empleo-title">
          ¡Esto no termina aquí!
          <br />
          Seguimos contigo.
        </h2>
        <p className="subt reveal empleo-video-subt">
          Te orientamos y ayudamos con tu <strong>CV</strong> y <strong>portfolio</strong> para
          LinkedIn, pudiendo <strong>conectar con empresas</strong> del sector en el{' '}
          <strong>Hiring Day</strong> anual.
        </p>

        <div className="hiring-card reveal">
          <div className="hiring-card__body">
            <span className="hiring-card__label">Career &amp; Talent</span>
            <h3>Hiring Day</h3>
            <p>
              Realizamos un evento anual exclusivo donde los alumnos tienen la oportunidad de
              conocer empresas reales.
            </p>
            <p>
              Se realizan entrevistas <strong>speed dating</strong> para estrechar lazos y
              ofrecer vacantes activas. Participan marcas reconocidas como Desigual, CaixaBank,
              NTT Data, Jellyfish…
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}