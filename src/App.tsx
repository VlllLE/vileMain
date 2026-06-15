import { DarkModeProvider } from './contexts/DarkModeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <DarkModeProvider>
      <div className="App">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <footer className="footer">
          <div className="container">
            <p>&copy; 2026 m@vile.cx</p>
              <p> u can also msg me on discord: 8o40</p>
          </div>
        </footer>
      </div>
    </DarkModeProvider>
  );
}

export default App;
