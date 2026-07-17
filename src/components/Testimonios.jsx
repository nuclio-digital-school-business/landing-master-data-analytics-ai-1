const QUOTES = [
  {
    text: 'He realizado el máster de Data Analytics en Nuclio y ha sido una experiencia que ha cumplido mis expectativas. Se lo recomiendo a perfiles que quieran automatizar el análisis de datos de los procesos que se encuentren liderando.',
    name: 'Maikol Labrador',
  },
  {
    text: 'Ha sido una maravillosa experiencia formar parte del Máster en Data Science & AI en Nuclio Digital School. Durante el bootcamp he reforzado mis conocimientos en programación, análisis de datos, machine learning y deep learning, aplicando todo a casos reales de negocio. Todo ha ido genial… los horarios adecuados para compatibilizar el estudio y el trabajo, la ubicación ideal para asistir a las clases y eventos presenciales, el equipo académico muy cercano y resolutivo, y lo mejor de todo los profesores, grandes profesionales con experiencia y con vocación de enseñar y compartir.',
    name: 'Alejandra Vaquero',
  },
  {
    text: 'Me he formado en Data Analytics en Nuclio y mi experiencia ha sido muy satisfactoria! Los docentes son increíbles y te dan una visión real y práctica de cómo es el sector. Me siento totalmente preparado para embarcarme en una nueva aventura profesional, gracias a las capacidades y conocimientos que he adquirido 🙌🏻',
    name: 'Carlos Palmón',
  },
  {
    text: 'El máster de Data Analytics es una formación práctica, con casos reales y bien planteada.',
    name: 'Guillem Pujols',
  },
];

export default function Testimonios() {
  return (
    <section className="sec testimonios">
      <div className="wrap">
        <h2 className="reveal">
          Lo que dicen
          <br />
          quienes ya lo <em className="accent">vivieron</em>.
        </h2>
        <div className="testi-list reveal-stagger">
          {QUOTES.map((q) => (
            <div className="testi-item" key={q.name}>
              <img
                src="/images/nuclio-redonda-decoracion.png"
                alt=""
                className="testi-item__dot"
                aria-hidden="true"
              />
              <div>
                <p className="testi-item__text">“{q.text}”</p>
                <span className="testi-item__name">{q.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}