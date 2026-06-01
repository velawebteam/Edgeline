import { PROJECTS } from '../constants';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useHeader } from '../context/HeaderContext';

export default function Home() {
  const { isHeaderRevealed, revealHeader } = useHeader();
  
  // Daily hero image logic
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 0);
  const diff = today.getTime() - startOfYear.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  
  const heroProject = PROJECTS[dayOfYear % PROJECTS.length];

  return (
    <div className="flex flex-col h-[100dvh] relative overflow-hidden">
      {/* Persistant Hero Image as the only content for Home */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroProject.coverImage}
          alt={heroProject.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* Logo in top left - initially visible, later covered by Navbar if revealed */}
      {!isHeaderRevealed && (
        <div className="relative z-10 px-6 py-4 md:px-12 md:py-8 cursor-pointer" onClick={revealHeader}>
          <img 
            src="https://lh3.googleusercontent.com/d/1XpAXBiHLqE6aRFuy9o7vr_WA7vmDTvBW" 
            alt="Edgeline Logo" 
            className="h-5 md:h-8 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </div>
  );
}
