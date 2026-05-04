import { ReactNode, useEffect } from 'react';
import Navbar from './Navbar';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
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
      
      {/* Footer is implicitly part of the Contact page in this design, but we could add a subtle signature */}
      <footer className="px-6 py-12 md:px-12 text-center">
        <p className="editorial-sub opacity-30">© {new Date().getFullYear()} Edgeline — Arquitetos Associados</p>
      </footer>
    </div>
  );
}
