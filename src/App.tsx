import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './contexts/DarkModeProvider';
import ErrorBoundary from './components/ErrorBoundary';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NotFound from './components/NotFound';
import { useScrollToSection } from './hooks/useScrollToSection';
import './App.css';

const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage'));

function AppContent() {
  useScrollToSection();

  return (
    <div className="App">
      <Navigation />
      <main id="main-content">
        <Suspense fallback={<div className="loading-fallback">Loading…</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:slug" element={<CaseStudyPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <DarkModeProvider>
      <ErrorBoundary>
        <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || '/'}>
          <AppContent />
        </BrowserRouter>
      </ErrorBoundary>
    </DarkModeProvider>
  );
}

export default App;
