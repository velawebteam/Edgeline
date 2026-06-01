import { ReactNode, useEffect } from 'react';
import Navbar from './Navbar';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { useHeader } from '../context/HeaderContext';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const { isHeaderRevealed, revealHeader } = useHeader();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isHomePage && !isHeaderRevealed) {
      revealHeader();
    }
  }, [location.pathname, isHomePage, isHeaderRevealed, revealHeader]);

  // Global click to reveal header if not yet revealed
  const handleGlobalClick = () => {
    if (!isHeaderRevealed) {
      revealHeader();
    }
  };

  return (
    <div 
      className={`min-h-screen flex flex-col bg-brand-offwhite ${!isHeaderRevealed ? 'cursor-pointer' : ''}`}
      onClick={handleGlobalClick}
    >
      <Navbar />
      <main className={`flex-grow ${!isHomePage ? 'pt-[73px] md:pt-[113px]' : ''}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      
      <AnimatePresence>
        {isHeaderRevealed && (
          <motion.footer 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="px-6 py-12 md:px-12 text-center"
          >
            <p className="editorial-sub opacity-30">© {new Date().getFullYear()} edgeline — arquitectos associados</p>
          </motion.footer>
        )}
      </AnimatePresence>
    </div>
  );
}
