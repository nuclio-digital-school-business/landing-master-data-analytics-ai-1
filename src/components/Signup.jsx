import ContactFormCard from './ContactFormCard';

export default function Signup() {
  return (
    <section className="sec signup" id="solicita">
      <img
        src="/images/decoracion-nuclio-logo.png"
        alt=""
        className="signup-deco"
        aria-hidden="true"
      />
      <div className="wrap">
        <h2 className="reveal signup-title">
          Déjanos ayudarte
          <br />
          <strong>a conseguir tu sueño.</strong>
        </h2>
        <p className="subt reveal signup-subt">
          Rellena la información y un asesor contactará contigo para concretar los próximos
          pasos a seguir.
        </p>
        <div className="signup-form-wrap reveal">
          <ContactFormCard
            targetId="hs-form-signup"
            subtitle="Al enviar aceptas la política de privacidad de Nuclio Digital School."
          />
        </div>
      </div>
    </section>
  );
}