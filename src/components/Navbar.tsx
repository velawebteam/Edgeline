import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_ITEMS = [
  { label: 'INÍCIO', path: '/' },
  { label: 'EDGELINE', path: '/edgeline' },
  { label: 'EQUIPA', path: '/equipa' },
  { label: 'OBRAS E PROJECTOS', path: '/projectos' },
  { label: 'CONTACTOS', path: '/contactos' },
];

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

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
    <nav 
      className="relative w-full z-50 px-6 py-4 md:px-12 md:py-8 flex justify-between items-center bg-brand-offwhite border-b border-brand-black/5"
    >
      <Link to="/" className="flex items-center z-50">
        <img 
          src="https://lh3.googleusercontent.com/d/1XpAXBiHLqE6aRFuy9o7vr_WA7vmDTvBW" 
          alt="Edgeline Logo" 
          className="h-5 md:h-8 w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </Link>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`editorial-sub hover:text-brand-black transition-colors duration-300 ${
              location.pathname === item.path ? 'text-brand-black' : 'text-brand-gray'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Toggle */}
      <button 
        className="md:hidden z-50 p-2 -mr-2 text-brand-black"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
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
                    className={`text-3xl editorial-title ${
                      location.pathname === item.path ? 'text-brand-black' : 'text-brand-gray'
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
    </nav>
  );
}
