import { useState } from 'react';
import { Hero } from './components/Hero/Hero';
import { Features } from './components/Features';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Technology } from './components/Technology/Technology';
import { Navbar } from './components/Navbar/Navbar';

export default function App() {
  const [activeSection, setActiveSection] = useState<'home' | 'dashboard' | 'technology'>('home');

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {activeSection === 'home' && (
        <>
          <Hero setActiveSection={setActiveSection} />
          <Features />
        </>
      )}

      {activeSection === 'dashboard' && <Dashboard />}

      {activeSection === 'technology' && <Technology />}

      <footer className="bg-slate-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm">
            PingTrackPong &copy; 2025 - Mejora tu juego, golpe a golpe, con datos inteligentes
          </p>
        </div>
      </footer>

    </div>
  );
}
