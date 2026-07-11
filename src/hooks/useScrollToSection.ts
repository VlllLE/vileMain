import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollState {
  scrollTo?: string;
}

export function useScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as ScrollState | null;
    if (state?.scrollTo) {
      const timer = setTimeout(() => {
        const element = document.getElementById(state.scrollTo!);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);
}
