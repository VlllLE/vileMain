import { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDarkMode } from '../hooks/useDarkMode';
import { useActiveSection } from '../hooks/useActiveSection';
import { NAV_ITEMS } from '../data/site';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const activeSection = useActiveSection();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const scrollToSection = useCallback(
    (href: string) => {
      const sectionId = href.replace('#', '');
      if (!isHome) {
        navigate('/', { state: { scrollTo: sectionId } });
        setIsMobileMenuOpen(false);
        return;
      }
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    },
    [isHome, navigate],
  );

  const handleLogoClick = () => {
    if (isHome) {
      scrollToSection('#home');
    } else {
      navigate('/');
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <button type="button" className="logo-button" onClick={handleLogoClick}>
            <span className="logo-text">m@vile.cx</span>
          </button>
        </div>

        <div
          id="nav-menu"
          className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}
          role="menubar"
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.name}
              type="button"
              role="menuitem"
              onClick={() => scrollToSection(item.href)}
              className={`nav-link ${isHome && activeSection === item.sectionId ? 'active' : ''}`}
              aria-current={isHome && activeSection === item.sectionId ? 'true' : undefined}
            >
              {item.name}
            </button>
          ))}
          <button
            type="button"
            onClick={toggleDarkMode}
            className="dark-mode-toggle"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>

        <button
          type="button"
          className="nav-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="nav-menu"
        >
          <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`} />
          <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`} />
          <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`} />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
