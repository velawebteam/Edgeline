import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';

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
    <div className="pt-6 pb-20 md:pt-12 min-h-screen bg-white">
      <div className="px-6 md:px-12 w-full max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start md:pt-6">
          
          {/* Column: Carousel (First on mobile, Second on desktop) */}
          <div className="flex flex-col items-center order-1 lg:order-2 relative w-full">
            <div className="aspect-square md:aspect-[4/5] max-h-[70vh] w-full overflow-hidden relative group">
              {/* Desktop Click Areas */}
              <div 
                className="hidden lg:block absolute left-0 top-0 w-1/4 h-full z-30 cursor-w-resize" 
                onClick={prevImage}
                title="anterior"
              />
              <div 
                className="hidden lg:block absolute right-0 top-0 w-1/4 h-full z-30 cursor-e-resize" 
                onClick={nextImage}
                title="seguinte"
              />

              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={currentIndex}
                  src={project.images[currentIndex]}
                  alt={`${project.title} sequence ${currentIndex}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    const swipeThreshold = 50;
                    if (info.offset.x > swipeThreshold) {
                      prevImage();
                    } else if (info.offset.x < -swipeThreshold) {
                      nextImage();
                    }
                  }}
                  className="w-full h-full object-contain border-none outline-none shadow-none cursor-grab active:cursor-grabbing"
                />
              </AnimatePresence>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center items-center space-x-3 mt-6">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                    index === currentIndex 
                      ? 'bg-brand-black w-4' 
                      : 'bg-brand-black/20 hover:bg-brand-black/40'
                  }`}
                  aria-label={`Ver imagem ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Column: Info (Second on mobile, First on desktop) */}
          <div className="flex flex-col order-2 lg:order-1">
            <h2 className="text-3xl md:text-6xl editorial-title mb-6 mt-4 lg:mt-0 leading-[0.9] tracking-tighter">
              {project.title}
            </h2>
            
            <div className="space-y-6 max-w-xl">
              <div className="space-y-2">
                <p className="text-xl md:text-2xl text-[#9D9D9D] font-normal tracking-tight">{project.location}</p>
                <p className="text-xl md:text-2xl text-[#9D9D9D] font-normal tracking-tight">{project.year}</p>
              </div>

              <p className="text-lg md:text-xl font-normal text-brand-black leading-relaxed whitespace-pre-line tracking-tight">
                {project.fullDescription || project.description}
              </p>
              
              {project.technicalSpecs && (
                <div className="pt-8 border-t border-brand-black/10 mt-8">
                  <div className="text-[11px] md:text-xs font-normal text-brand-black leading-relaxed tracking-wider markdown-specs">
                    <ReactMarkdown>{project.technicalSpecs}</ReactMarkdown>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-20 text-center">
          <Link to="/projectos" className="editorial-sub hover:text-brand-black border-b border-brand-black/20 pb-2">
            voltar ao arquivo
          </Link>
        </div>
      </div>
    </div>
  );
}
