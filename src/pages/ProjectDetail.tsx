import { useParams, Link, Navigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { motion } from 'motion/react';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) return <Navigate to="/projectos" />;

  return (
    <div className="pt-12 pb-40 md:pt-20">
      {/* Narrative Header */}
      <section className="px-6 md:px-12 mb-20 md:mb-40 max-w-4xl">
        <p className="editorial-sub mb-4">{project.location}</p>
        <h2 className="text-4xl md:text-8xl editorial-title mb-8 md:mb-12">{project.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <p className="text-xl md:text-2xl font-light text-brand-black/80 leading-relaxed">
            {project.description}
          </p>
          <div className="space-y-2 md:pt-2">
            <p className="editorial-sub opacity-40">Ano: {project.year}</p>
            <p className="editorial-sub opacity-40">Localização: {project.location}</p>
          </div>
        </div>
      </section>

      {/* Visual Narrative - Large Images */}
      <section className="space-y-16 md:space-y-64">
        {project.images.map((img, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className={`flex flex-col ${index % 2 === 0 ? 'items-start pl-0 md:pr-40' : 'items-end pr-0 md:pl-40'}`}
          >
            <div className="w-full h-full overflow-hidden">
              <img 
                src={img} 
                alt={`${project.title} sequence ${index}`} 
                className="w-full object-cover max-h-[90vh]"
              />
            </div>
          </motion.div>
        ))}
      </section>

      {/* Footer Navigation */}
      <section className="px-6 py-40 md:px-12 text-center">
        <Link to="/projectos" className="editorial-sub hover:text-brand-black border-b border-brand-black/20 pb-2">
          Voltar ao Arquivo
        </Link>
      </section>
    </div>
  );
}
