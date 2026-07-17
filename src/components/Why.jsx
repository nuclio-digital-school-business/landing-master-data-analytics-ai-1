import { useState } from 'react';
import { useFormModal } from '../context/FormModalContext';

const SALIDAS = ['Data Analyst', 'BI Analyst', 'BI Engineer', 'Data Consultant', 'Marketing Analyst', 'Business Analyst'];

const LOGOS = [
  '2c0a5736b5858bc933a15b274085512866df939d.png',
  '5cbf60d0fdf2b6d977b277d893520443540023cf.png',
  '6bbf47163703935628349109410892bb2b4b5010.png',
  '21d40fdc312dc43e4be75ec73a3c011c1dabbc3f.png',
  '41174b4e46ab978f4c980a472a6387b635e99a73.png',
  '6603312b366ab4d864d5577228581ce1de82c7a8.png',
  '7417071fb377e45dadde15a42876a432a079e737.png',
  '519083127e426c66ef97623364ba5b96d8f7662f.png',
  'c2a5e01ee63777eb18b58897d4151162ec8fa02d.png',
  'c3043b5df95b657b0684742b034ebd047c158bdc.png',
  'c9436c0d5f800c99954e5df165c0ff7df432fe12.png',
  'e9e110d442dd686b7e2a60c8b243803a94a1f71d.png',
].map((file, i) => ({ src: `/images/carrusel nuestros alumnos/${file}`, alt: `Empresa ${i + 1}` }));

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

const MODULES = [
  {
    n: 'Pre',
    title: 'Data Pre-Work',
    body: (
      <>
        <p>
          Antes de comenzar el bootcamp tendrás acceso a varios pre-cursos online para
          prepararte y empezar con una base sólida.
        </p>
        <p>
          Repasarás desde cero los fundamentos de programación con <strong>Python y SQL</strong>,
          así como conceptos clave de <strong>estadística aplicada al análisis de datos</strong>.
        </p>
      </>
    ),
  },
  {
    n: 'M1',
    title: 'Introducción a Data Analytics y la revolución de los datos',
    body: (
      <>
        <p>
          Descubre el papel de los datos en las empresas y cómo el análisis de datos impulsa la
          toma de decisiones estratégicas.
        </p>
        <p>
          Explorarás la evolución del <strong>Data Analytics</strong>, los conceptos clave del
          sector, la ética y privacidad en el uso de datos y una introducción a{' '}
          <strong>bases de datos, Big Data y Machine Learning</strong>.
        </p>
      </>
    ),
  },
  {
    n: 'M2',
    title: 'Python 101',
    body: (
      <>
        <p>
          Aprende los fundamentos de programación en Python y cómo utilizar este lenguaje para
          trabajar con datos.
        </p>
        <p>
          Trabajarás variables, estructuras de control, funciones y manejo de archivos, además de
          librerías esenciales como <strong>NumPy y Pandas</strong> para el análisis y
          tratamiento de datos.
        </p>
      </>
    ),
  },
  {
    n: 'M3',
    title: 'Statistical Thinking',
    body: (
      <>
        <p>
          Desarrolla una base sólida en estadística para interpretar datos con criterio y
          comunicar resultados de forma efectiva.
        </p>
        <p>
          Aprenderás <strong>estadística descriptiva, probabilidad, correlación y
          significancia</strong>, además de crear visualizaciones con <strong>Matplotlib</strong>{' '}
          para explorar datos.
        </p>
      </>
    ),
  },
  {
    n: 'M4',
    title: 'Análisis exploratorio de datos',
    body: (
      <>
        <p>
          Aprende a limpiar, transformar y analizar datos procedentes de diferentes fuentes para
          extraer información relevante.
        </p>
        <p>
          Trabajarás técnicas de <strong>data cleaning, transformación de datos y análisis
          exploratorio</strong>, pasando del análisis a la toma de decisiones.
        </p>
      </>
    ),
  },
  {
    n: 'M5',
    title: 'SQL para Data Analysts',
    body: (
      <>
        <p>
          Domina SQL para consultar, filtrar y manipular datos en bases de datos de forma
          eficiente.
        </p>
        <p>
          Aprenderás a trabajar con <strong>queries, funciones de agregación, filtros y
          ordenación</strong>, además de introducirte en{' '}
          <strong>BigQuery, bases de datos NoSQL y MongoDB</strong>.
        </p>
      </>
    ),
  },
  {
    n: 'M6',
    title: 'Dataviz: herramientas y dashboards',
    body: (
      <>
        <p>Aprende a comunicar datos de forma clara mediante visualización y storytelling.</p>
        <p>
          Diseñarás <strong>dashboards y reports</strong> con herramientas como{' '}
          <strong>Looker Studio</strong>, trabajarás <strong>KPIs</strong> y descubrirás buenas
          prácticas de visualización de datos.
        </p>
      </>
    ),
  },
  {
    n: 'M7',
    title: 'ChatGPT y LLMs en análisis de datos',
    body: (
      <>
        <p>Descubre cómo los modelos de lenguaje pueden acelerar el trabajo de análisis de datos.</p>
        <p>
          Explorarás <strong>prompt engineering</strong>, herramientas basadas en{' '}
          <strong>LLMs</strong> y cómo aplicar estas tecnologías para analizar datos de forma más
          rápida y eficiente.
        </p>
      </>
    ),
  },
  {
    n: 'M8',
    title: 'Introducción a Machine Learning & IA',
    body: (
      <>
        <p>
          Conoce los fundamentos del Machine Learning y cómo se aplican los modelos predictivos
          en el análisis de datos.
        </p>
        <p>
          Aprenderás los principales <strong>algoritmos, técnicas y herramientas</strong>, además
          de evaluar modelos y entender sus sesgos y aplicaciones.
        </p>
      </>
    ),
  },
  {
    n: 'M9',
    title: 'Desafíos y tendencias en el mercado de datos',
    body: (
      <>
        <p>
          Explora las principales tendencias del sector y cómo posicionarte profesionalmente en
          el mercado de datos.
        </p>
        <p>
          Aprenderás a crear tu <strong>portfolio en GitHub</strong>, conocerás aspectos legales y
          éticos del uso de datos y descubrirás las diferentes salidas profesionales en{' '}
          <strong>Data Analytics</strong>.
        </p>
      </>
    ),
  },
  {
    n: 'PF',
    title: 'Proyecto Final',
    body: (
      <>
        <p>Pon en práctica todo lo aprendido desarrollando un proyecto real de análisis de datos.</p>
        <p>
          Trabajarás en equipo para analizar una problemática real, aplicar pensamiento
          estadístico, trabajar con bases de datos y comunicar insights mediante{' '}
          <strong>data storytelling</strong>, con el acompañamiento de profesionales del sector.
        </p>
      </>
    ),
  },
];

function moduleBg(index, total) {
  const t = index / (total - 1);
  const from = [255, 198, 48];
  const to = [255, 255, 255];
  const mix = (a, b) => Math.round(a + (b - a) * t);
  const [r, g, b] = [mix(from[0], to[0]), mix(from[1], to[1]), mix(from[2], to[2])];
  return `rgb(${r}, ${g}, ${b})`;
}

export default function Why() {
  const [openIndex, setOpenIndex] = useState(null);
  const { openModal } = useFormModal();

  return (
    <section className="sec why">
      <img
        src="/images/decoracion-nuclio-oscuro.png"
        alt=""
        className="why-deco why-deco--br"
        aria-hidden="true"
      />
      <div className="wrap">
        <h2 className="reveal">Pensado para gente de negocio, no para ingenieros.</h2>
        <p className="subt reveal">
          Sin código previo, sin jerga innecesaria: <strong>aprenderás a pensar como analista</strong>{' '}
          y a convertir datos en decisiones que un negocio pueda usar de verdad.
        </p>
        <div className="why-grid reveal-stagger" style={{ display: 'none' }}>
          {REASONS.map((r) => (
            <div className="why-card" key={r.title}>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </div>
          ))}
        </div>

        <div className="why-modalidades reveal" style={{ marginTop: 56 }}>
          <h2>
            Las modalidades de nuestro <strong>programa</strong>.
          </h2>
          <p className="subt">
            Pre-work de nivelación y clases 100% en directo para picar código contigo en tiempo
            real.
          </p>

          <div className="temario-pills">
            {MODULES.map((mod, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  className={`temario-pill${isOpen ? ' is-open' : ''}`}
                  key={mod.n}
                  style={{ background: moduleBg(i, MODULES.length) }}
                >
                  <button
                    type="button"
                    className="temario-pill__trigger"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span className="temario-pill__num">{mod.n}</span>
                    <span className="temario-pill__title">{mod.title}</span>
                    <span className="nuclio-accordion__icon" aria-hidden="true" />
                  </button>
                  <div className={`nuclio-accordion__content${isOpen ? ' is-open' : ''}`}>
                    <div className="nuclio-accordion__content-inner temario-pill__inner">
                      {mod.body}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="temario-cta">
            <button type="button" className="btn btn-yellow" onClick={() => openModal('download')}>
              Descargar plan de estudios
            </button>
          </div>
        </div>

        <div className="empleo-title-wrap" style={{ marginTop: 56 }}>
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
          <p className="subt reveal">
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
            <img
              className="hiring-card__img"
              alt=""
              src="https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=900"
            />
          </div>

          <div className="mercado-block reveal" style={{ marginTop: 56 }}>
            <h2 className="mercado-title">Te formamos para el mercado, no para el aula.</h2>
            <p className="subt">
              Aprenderás con <strong>datos reales</strong>, tomarás decisiones que importan y
              llegarás a un <strong>mercado que ya te está buscando</strong>.
            </p>
            <div className="salidas-chips reveal-stagger">
              {SALIDAS.map((s) => (
                <span className="chip" key={s}>{s}</span>
              ))}
            </div>
          </div>

          <div className="alumni-block reveal" style={{ marginTop: 56 }}>
            <img
              src="/images/decoracion nuclio.png"
              alt=""
              className="why-deco why-deco--alumni"
              aria-hidden="true"
            />
            <h2 className="alumni-title">¿Dónde trabajan nuestros alumnos?</h2>
            <div className="logo-row reveal-stagger">
              {LOGOS.map((logo, i) => {
                const extraStyle = {};
                if (i === 9) extraStyle.transform = 'scaleX(-1)'; // Desigual
                if (i === 2 || i === 5) extraStyle.height = '46px'; // Wallapop, SEAT
                return (
                  <img
                    key={logo.alt}
                    alt={logo.alt}
                    src={logo.src}
                    style={Object.keys(extraStyle).length ? extraStyle : undefined}
                  />
                );
              })}
            </div>
            <img
              src="/images/decoracion nuclio.png"
              alt=""
              className="why-deco why-deco--alumni-bottom"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}