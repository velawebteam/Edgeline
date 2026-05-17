import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) return <Navigate to="/projectos" />;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className={`pt-2 pb-40 md:pt-4 min-h-screen bg-white ${project.id === 'casa-magoito' ? 'project-magoito' : ''}`}>
      <div className="px-6 md:px-12 w-full max-w-[1800px] mx-auto">
        {/* Mobile Title */}
        <h2 className="lg:hidden text-3xl editorial-title mb-10 leading-[0.9] uppercase tracking-tighter">
          {project.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start md:pt-12">
          
          {/* Column: Carousel (First on mobile, Second on desktop) */}
          <div className="flex flex-col items-center order-1 lg:order-2 relative">
            {/* Mobile Navigation Arrows (On Sides, outside image container) */}
            <div className="absolute inset-y-0 -left-4 flex items-center z-20 lg:hidden">
              <button 
                onClick={prevImage}
                className="w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-md rounded-full shadow-sm"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} strokeWidth={1} />
              </button>
            </div>
            <div className="absolute inset-y-0 -right-4 flex items-center z-20 lg:hidden">
              <button 
                onClick={nextImage}
                className="w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-md rounded-full shadow-sm"
                aria-label="Next image"
              >
                <ChevronRight size={24} strokeWidth={1} />
              </button>
            </div>

            <div className="aspect-square md:aspect-[4/5] max-h-[70vh] w-full overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={project.images[currentIndex]}
                  alt={`${project.title} sequence ${currentIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full object-contain border-none outline-none shadow-none"
                />
              </AnimatePresence>
            </div>

            {/* Desktop Navigation Arrows (Below Image) */}
            <div className="hidden lg:flex justify-between items-center mt-6 w-full max-w-[70vh] md:max-w-none">
              <button 
                onClick={prevImage}
                className="p-1 hover:opacity-50 transition-opacity"
                aria-label="Previous image"
              >
                <ChevronLeft size={60} strokeWidth={0.5} />
              </button>
              <button 
                onClick={nextImage}
                className="p-1 hover:opacity-50 transition-opacity"
                aria-label="Next image"
              >
                <ChevronRight size={60} strokeWidth={0.5} />
              </button>
            </div>
          </div>

          {/* Column: Info (Second on mobile, First on desktop) */}
          <div className="flex flex-col order-2 lg:order-1">
            {/* Desktop Title */}
            <h2 className="hidden lg:block text-3xl md:text-6xl editorial-title mb-8 leading-[0.9] uppercase tracking-tighter">
              {project.title}
            </h2>
            
            <div className="space-y-8 max-w-xl">
              <p className="text-lg md:text-xl font-light text-brand-black/90 leading-relaxed whitespace-pre-line">
                {project.fullDescription || project.description}
              </p>
              
              {project.technicalSpecs && (
                <div className="pt-12 border-t border-brand-black/10 mt-12">
                  <p className="text-[11px] md:text-xs font-light text-brand-black/50 leading-relaxed uppercase tracking-wider">
                    {project.technicalSpecs}
                  </p>
                </div>
              )}

              <p className="editorial-sub opacity-30 uppercase text-[10px] tracking-widest">
                Ano: {project.year}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-40 text-center">
          <Link to="/projectos" className="editorial-sub hover:text-brand-black border-b border-brand-black/20 pb-2">
            Voltar ao Arquivo
          </Link>
        </div>
      </div>
    </div>
  );
}
