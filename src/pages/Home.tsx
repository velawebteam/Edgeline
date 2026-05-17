import { PROJECTS } from '../constants';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Home() {
  // Daily hero image logic
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 0);
  const diff = today.getTime() - startOfYear.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  
  const heroProject = PROJECTS[dayOfYear % PROJECTS.length];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="h-[calc(100dvh-72px)] md:h-[calc(100dvh-96px)] w-full relative overflow-hidden">
        <motion.img
          key={heroProject.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src={heroProject.coverImage}
          alt={heroProject.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute bottom-12 left-6 md:left-12">
          <p className="editorial-sub text-white/80">Projecto em Destaque</p>
          <h2 className="text-white text-3xl md:text-5xl editorial-title mt-2">{heroProject.title}</h2>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-16 md:px-12 md:py-40 max-w-4xl">
        <p className="text-xl md:text-4xl font-light tracking-tight leading-snug text-brand-black/90">
          Arquitetura que respira. Procuramos a essência no detalhe, o rigor na forma e o silêncio no espaço construído.
        </p>
      </section>

      {/* Recent Projects Grid */}
      <section className="px-6 pb-20 md:pb-40 md:px-12">
        <div className="flex justify-between items-baseline border-b border-brand-black/10 pb-4 mb-12">
          <h3 className="editorial-sub">Projectos Recentes</h3>
          <Link to="/projectos" className="editorial-sub hover:text-brand-black">Ver todos</Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-x-12 md:gap-y-20">
          {PROJECTS.filter(p => p.featured).slice(0, 6).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Link to={`/projectos/${project.id}`} className="group block">
                <div className="aspect-[4/5] overflow-hidden bg-brand-black/5 mb-6">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                  />
                </div>
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="text-2xl editorial-title">{project.title}</h3>
                  </div>
                  <span className="editorial-sub opacity-30">{project.year}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
