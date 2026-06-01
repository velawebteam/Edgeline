import { createContext, useContext, useState, ReactNode } from 'react';

interface HeaderContextType {
  isHeaderRevealed: boolean;
  revealHeader: () => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export function HeaderProvider({ children }: { children: ReactNode }) {
  const [isHeaderRevealed, setIsHeaderRevealed] = useState(false);

  const revealHeader = () => setIsHeaderRevealed(true);

  return (
    <HeaderContext.Provider value={{ isHeaderRevealed, revealHeader }}>
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeader() {
  const context = useContext(HeaderContext);
  if (context === undefined) {
    throw new Error('useHeader must be used within a HeaderProvider');
  }
  return context;
}
