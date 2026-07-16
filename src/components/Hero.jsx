import { useFormModal } from '../context/FormModalContext';

export default function Hero() {
  const { openModal } = useFormModal();

  return (
    <section className="hero" id="top">
      <div className="wrap hero-flex">
        <div className="hero-inner">
          <span className="kicker load-in load-in-1">Máster en Data Analytics</span>
          <h1 className="load-in load-in-2">
            Conviértete en el <span className="hl">Data Analyst</span> que las empresas están
            buscando.
          </h1>
          <p className="lead load-in load-in-3">
            Aprende a convertir datos en decisiones. Desde cero, con el stack real del mercado y
            proyectos con datos de empresas reales.
          </p>
          <button type="button" className="btn btn-yellow load-in load-in-3" onClick={() => openModal()}>
            Habla con un asesor →
          </button>

          <div className="info-row load-in load-in-4">
            <span className="info-pill">25 semanas · Part-time</span>
            <span className="info-pill">Online · Sept 2026</span>
            <span className="info-pill">Barcelona · 2026</span>
          </div>
        </div>

        <div className="hero-bottom load-in load-in-5">
          <div className="hero-fundae-row">
            <p className="hero-fundae">Bonificable Fundae</p>
            <img src="/images/fundae-logo.png" alt="FUNDAE" className="fundae-logo" />
          </div>
          <p className="hero-accred">
            Acreditación universitaria de EUNEIZ (30 ECTS) disponible bajo solicitud expresa.
          </p>
        </div>
      </div>
    </section>
  );
}