import ContactFormCard from './ContactFormCard';

export default function Signup() {
  return (
    <section className="sec signup" id="solicita">
      <div className="wrap">
        <h2 className="reveal">Déjanos ayudarte a conseguir tu objetivo.</h2>
        <p className="subt reveal">
          Rellena tus datos y un asesor te contactará para acompañarte en los próximos pasos.
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
