import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useHeader } from '../context/HeaderContext';

const NAV_ITEMS = [
  { label: 'Início', path: '/' },
  { label: 'Edgeline Arquitectos', path: '/edgeline-arquitectos' },
  { label: 'Equipa', path: '/equipa' },
  { label: 'Obras e Projectos', path: '/projectos' },
  { label: 'Contactos', path: '/contactos' },
];

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { isHeaderRevealed } = useHeader();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <motion.nav 
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ 
          y: isHeaderRevealed ? 0 : "-100%",
          opacity: isHeaderRevealed ? 1 : 0
        }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-5 md:px-12 md:py-8 flex justify-between items-center bg-brand-offwhite/90 backdrop-blur-md border-b border-brand-black/5 ${!isHeaderRevealed ? 'pointer-events-none' : ''}`}
      >
        <Link to="/" className="flex items-center z-50">
          <img 
            src="https://lh3.googleusercontent.com/d/1XpAXBiHLqE6aRFuy9o7vr_WA7vmDTvBW" 
            alt="Edgeline Logo" 
            className="h-8 md:h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-sans tracking-[0.1em] text-[14px] md:text-[14px] font-normal text-black transition-opacity duration-300 ${
                location.pathname === item.path ? 'opacity-100' : 'opacity-100'
              } hover:opacity-70`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 p-2 -mr-2 text-black flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 bg-brand-offwhite z-40 flex flex-col justify-center px-6 pt-20"
            >
              <div className="flex flex-col space-y-8">
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className={`text-3xl md:text-4xl editorial-title font-normal ${
                        location.pathname === item.path ? 'text-black opacity-100' : 'text-black opacity-100'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
