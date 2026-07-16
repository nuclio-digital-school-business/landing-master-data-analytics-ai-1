import { useState } from 'react';
import { useFormModal } from '../context/FormModalContext';

const MODULES = [
  {
    n: 'Pre',
    title: 'Data Pre-Work',
    body: 'Nivelación previa en Python, SQL y estadística aplicada para que todos arranquen con la misma base, vengas de donde vengas.',
  },
  {
    n: 'M1',
    title: 'Introducción a Data Analytics y la revolución de los datos',
    body: 'Familiarízate con el rol del Data Analyst y el impacto de los datos en la toma de decisiones de negocio.',
  },
  {
    n: 'M2',
    title: 'Python 101',
    body: 'Fundamentos de programación en Python orientados al análisis de datos: estructuras, librerías clave y buenas prácticas.',
  },
  {
    n: 'M3',
    title: 'Statistical Thinking',
    body: 'Estadística aplicada para interpretar datos con criterio: distribuciones, hipótesis y significancia.',
  },
  {
    n: 'M4',
    title: 'Análisis exploratorio de datos',
    body: 'Técnicas de EDA para limpiar, transformar y entender un dataset antes de modelarlo o visualizarlo.',
  },
  {
    n: 'M5',
    title: 'SQL para Data Analysts',
    body: 'Consultas SQL para extraer, combinar y analizar datos directamente desde bases de datos relacionales.',
  },
  {
    n: 'M6',
    title: 'Dataviz: herramientas y dashboards',
    body: 'Construcción de dashboards con Tableau y Looker Studio para comunicar insights a negocio.',
  },
  {
    n: 'M7',
    title: 'ChatGPT y LLMs en análisis de datos',
    body: 'Aplica IA generativa para acelerar la exploración, limpieza y documentación de tus análisis.',
  },
  {
    n: 'M8',
    title: 'Introducción a Machine Learning & IA',
    body: 'Primeros modelos predictivos: regresión, clasificación y clustering aplicados a casos de negocio.',
  },
  {
    n: 'M9',
    title: 'Desafíos y tendencias en el mercado de datos',
    body: 'Panorama actual del sector: gobernanza del dato, ética en IA y hacia dónde evoluciona el rol.',
  },
  {
    n: 'TFM',
    title: 'Proyecto final mentorizado',
    body: 'Aplicas todo el ciclo analítico sobre un caso real, con un tutor experto, y lo defiendes ante tribunal.',
  },
];

export default function Temario() {
  const [openIndex, setOpenIndex] = useState(null);
  const { openModal } = useFormModal();

  return (
    <section className="sec temario">
      <div className="wrap">
        <div className="eyebrow">El programa</div>
        <h2>Módulo a módulo.</h2>
        <p className="subt">
          Pre-work de nivelación y clases 100% en directo para picar código contigo en tiempo
          real.
        </p>

        <div className="nuclio-accordion reveal">
          {MODULES.map((mod, i) => {
            const isOpen = openIndex === i;
            return (
              <div className="nuclio-accordion__item" key={mod.n}>
                <button
                  type="button"
                  className="nuclio-accordion__trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="nuclio-accordion__num">{mod.n}</span>
                  <span className="nuclio-accordion__title">{mod.title}</span>
                  <span className="nuclio-accordion__icon" aria-hidden="true" />
                </button>
                <div className={`nuclio-accordion__content${isOpen ? ' is-open' : ''}`}>
                  <div className="nuclio-accordion__content-inner">
                    <p>{mod.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="temario-cta">
          <button type="button" className="btn btn-yellow" onClick={() => openModal('download')}>
            Descarga el plan de estudio
          </button>
        </div>
      </div>
    </section>
  );
}
