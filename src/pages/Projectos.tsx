import { PROJECTS } from '../constants';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Projectos() {
  return (
    <div className="px-6 pt-12 pb-40 md:px-12 md:pt-20">
      <header className="mb-16 md:mb-32">
        <p className="editorial-sub mb-4">Arquivo</p>
        <h2 className="text-4xl md:text-7xl editorial-title">Obras e Projectos</h2>
      </header>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-x-12 md:gap-y-20">
        {PROJECTS.map((project, index) => (
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
                  <p className="editorial-sub opacity-60 mt-1">{project.location}</p>
                </div>
                <span className="editorial-sub opacity-30">{project.year}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
