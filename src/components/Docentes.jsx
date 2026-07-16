const DIRECTOR = {
  img: 'https://nuclio.school/wp-content/uploads/2026/03/image-1-193x300.png',
  name: 'Pedro Costa del Amo',
  role: 'Head of Artificial Intelligence',
  company: 'Latency',
  bio: 'Con un doctorado en Modelización Matemática y Computacional por el Imperial College de Londres, tiene más de 8 años de experiencia en el desarrollo y liderazgo de soluciones de ciencia de datos.',
};

const TEAM = [
  {
    img: 'https://nuclio.school/wp-content/uploads/2024/09/felipe_calderero.png',
    name: 'Felipe Calderero',
    role: 'Head of Software Engineering',
    company: 'MOSTLY AI',
  },
  {
    img: 'https://nuclio.school/wp-content/uploads/2026/03/Leandro-Bleda-Cantos.png',
    name: 'Leandro Bleda Cantos',
    role: 'Senior Data Engineer',
    company: 'Qogita',
  },
  {
    img: 'https://nuclio.school/wp-content/uploads/2026/03/Miguel-Angel-Fernandez.png',
    name: 'Miguel Ángel Fernández',
    role: 'Data Science Expert',
    company: 'Kepler Data Tech',
  },
  {
    img: 'https://nuclio.school/wp-content/uploads/2026/03/Tamara-Sanchez.png',
    name: 'Tamara Sánchez',
    role: 'Data Science Manager',
    company: 'Kantar',
  },
];

export default function Docentes() {
  return (
    <section className="sec docentes">
      <img
        src="/images/decoracion-nuclio-logo.png"
        alt=""
        className="docentes-deco"
        aria-hidden="true"
      />
      <div className="wrap">
        <h2 className="reveal">Aprende de los mejores <strong>profesionales</strong>.</h2>
        <p className="subt reveal">
          Nuestros docentes no explican teoría de manual: aplican datos a diario en algunas de
          las mejores empresas del mercado y traen esos casos reales a clase.
        </p>

        <h3 className="docentes-subhead reveal">Director del máster</h3>
        <div className="director-card reveal">
          <img className="director-card__ava" src={DIRECTOR.img} alt={DIRECTOR.name} />
          <div>
            <h4>{DIRECTOR.name}</h4>
            <span className="company-chip">{DIRECTOR.company}</span>
            <p className="director-card__role">{DIRECTOR.role}</p>
            <p className="director-card__bio">{DIRECTOR.bio}</p>
          </div>
        </div>

        <h3 className="docentes-subhead reveal">Profesorado</h3>
        <div className="team-grid reveal-stagger">
          {TEAM.map((t) => (
            <div className="team-member" key={t.name}>
              <img className="team-member__ava" src={t.img} alt={t.name} />
              <div>
                <h4>{t.name}</h4>
                <span className="team-member__role">{t.role}</span>
                <span className="company-chip">{t.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}