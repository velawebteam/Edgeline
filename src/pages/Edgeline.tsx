import { PROJECTS } from '../constants';

export default function Edgeline() {
  return (
    <div className="px-6 pt-12 pb-40 md:px-12 md:pt-20 max-w-7xl mx-auto space-y-32">
      <header className="mb-10 md:mb-16">
        <p className="editorial-sub mb-4">Sobre</p>
        <h2 className="text-3xl md:text-6xl editorial-title">Atelier</h2>
      </header>

      <section className="max-w-3xl">
        <div className="mb-12">
          <img 
            src="https://lh3.googleusercontent.com/d/1XpAXBiHLqE6aRFuy9o7vr_WA7vmDTvBW" 
            alt="Edgeline Logo" 
            className="h-20 md:h-24 w-auto object-contain mb-4"
            referrerPolicy="no-referrer"
          />
          <h2 className="text-xl md:text-2xl editorial-title opacity-40">Arquitetos Associados</h2>
        </div>
        <div className="space-y-8 text-xl md:text-2xl font-light text-brand-black/80 whitespace-relaxed">
          <p>
            Fundada em 2014 pelo arquitecto Alexandre Berardo, a edgeline – arquitectos associados desenvolve a sua actividade nas áreas da Arquitectura e do Planeamento Urbano, com projectos e obras realizadas em Portugal, Angola e no Gana.
          </p>
          <p>
            A sua actividade centra-se, primordialmente, na elaboração de projectos de Arquitectura, quer no âmbito de novas construções, quer em intervenções de reabilitação e recuperação do edificado, assegurando uma abordagem integrada e orientada para a criação de valor, que abrange todas as fases do processo projectual.
          </p>
          <p>
            Complementarmente, presta serviços de elaboração de estudos, revisão de projectos e consultadoria técnica nas áreas da sua especialidade.
          </p>
        </div>
      </section>

      <section>
        <div className="border-b border-brand-black/10 pb-4 mb-8">
          <h3 className="editorial-sub">Filosofia</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h4 className="text-2xl editorial-title">Materialidade</h4>
            <p className="text-brand-gray text-base leading-relaxed">
              Respeitamos a natureza dos materiais. O betão, a madeira e a pedra são utilizados na sua forma mais pura, permitindo que o tempo e a luz esculpam a alma dos espaços.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-2xl editorial-title">Rigor</h4>
            <p className="text-brand-gray text-base leading-relaxed">
              O detalhe não é um adorno, mas uma componente estrutural da nossa narrativa visual. Do desenho técnico à execução em obra, a precisão é a nossa linguagem constante.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="border-b border-brand-black/10 pb-4 mb-8">
          <h3 className="editorial-sub">Lista de Projectos</h3>
        </div>
        <div className="divide-y divide-brand-black/5">
          {PROJECTS.map((project) => (
            <div key={project.id} className="py-6 flex flex-col md:grid md:grid-cols-4 gap-4 items-baseline">
              <span className="text-2xl editorial-title md:col-span-2">{project.title}</span>
              <span className="editorial-sub opacity-60">{project.location}</span>
              <span className="editorial-sub opacity-30 md:text-right">{project.year}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
