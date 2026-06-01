import { PROJECTS } from '../constants';

export default function Edgeline() {
  return (
    <div className="px-6 pt-6 pb-40 md:px-12 md:pt-10 max-w-7xl mx-auto space-y-32">

      <section className="flex flex-col md:grid md:grid-cols-12 gap-12 md:gap-24 items-center">
        <div className="md:col-span-4 flex flex-col justify-start">
          <img 
            src="https://lh3.googleusercontent.com/d/1XpAXBiHLqE6aRFuy9o7vr_WA7vmDTvBW" 
            alt="Edgeline Logo" 
            className="h-20 w-auto object-contain mb-4"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="md:col-span-8 space-y-8 text-xl md:text-2xl font-normal text-brand-black/80 whitespace-relaxed">
          <p>
            Fundada em 2014 pelo arquitecto Alexandre Berardo, a edgeline arquitectos desenvolve a sua actividade nas áreas da Arquitectura e do Planeamento Urbano, com projectos e obras realizadas em Portugal, Angola e no Gana.
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
          <h3 className="editorial-sub">lista de projectos</h3>
        </div>
        <div className="divide-y divide-brand-black/5">
          {PROJECTS.map((project) => (
            <div key={project.id} className="py-6 flex flex-col md:grid md:grid-cols-4 gap-4 items-baseline">
              <span className="text-2xl editorial-title md:col-span-2">{project.title}</span>
              <div className="md:col-span-2 md:text-right flex flex-col">
                <span className="text-base md:text-lg text-[#9D9D9D] font-normal tracking-tight">
                  {project.location}
                </span>
                <span className="text-base md:text-lg text-[#9D9D9D] font-normal tracking-tight">
                  {project.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
