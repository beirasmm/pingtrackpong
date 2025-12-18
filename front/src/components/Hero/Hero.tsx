import { useEffect, useState } from 'react';
import { Calendar, TrendingUp, Clock, User } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { SessionCard } from '../SessionCard/SessionCard';
import './Hero.css'; // <-- Importamos el CSS

interface HeroProps {
  setActiveSection: (section: 'home' | 'dashboard' | 'technology') => void;
}

interface Session {
  id: number;
  date: string;
  duration: string;
  golpes: number;
  velocidadMedia: number;
  precision: number;
  bpm: number;
  tipo: 'Entrenamiento' | 'Partido';
}

// Mock API: devuelve siempre las mismas sesiones
const fetchSessions = async (): Promise<Session[]> => {
  return new Promise((resolve) => {
    resolve([
      { id: 1, date: '8 Dic 2025', duration: '2h 15min', golpes: 1247, velocidadMedia: 87, precision: 94, bpm: 142, tipo: 'Entrenamiento' },
      { id: 2, date: '6 Dic 2025', duration: '1h 45min', golpes: 956, velocidadMedia: 82, precision: 91, bpm: 138, tipo: 'Partido' },
      { id: 3, date: '4 Dic 2025', duration: '2h 0min', golpes: 1103, velocidadMedia: 85, precision: 93, bpm: 145, tipo: 'Entrenamiento' },
      { id: 4, date: '1 Dic 2025', duration: '1h 30min', golpes: 834, velocidadMedia: 79, precision: 89, bpm: 135, tipo: 'Partido' },
    ]);
  });
};

export function Hero({ setActiveSection }: HeroProps) {
  const [sessions, setSessions] = useState<Session[] | null>(null);

  useEffect(() => {
    fetchSessions().then((data) => setSessions(data));
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Header */}
        <div className="hero-header">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1708268418738-4863baa9cf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg"
            alt="Ping Pong"
            className="hero-header-img"
          />
          <div className="hero-grid">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-500 p-3 rounded-full">
                  <User className="size-8" />
                </div>
                <div>
                  <h2 className="text-white">¡Bienvenido de nuevo, Marc!</h2>
                  <p className="text-slate-300">Tenista de mesa intermedio</p>
                </div>
              </div>
              <p className="text-xl text-slate-200 mb-6">
                Mejora tu juego, golpe a golpe, con datos inteligentes
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="hero-metric-card">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="size-4 text-orange-300" />
                    <span className="text-sm text-slate-300">Total sesiones</span>
                  </div>
                  <p className="text-2xl">{sessions?.length ?? 'Cargando...'}</p>
                </div>
                <div className="hero-metric-card">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="size-4 text-teal-300" />
                    <span className="text-sm text-slate-300">Tiempo total</span>
                  </div>
                  <p className="text-2xl">48h 30min</p>
                </div>
                <div className="hero-metric-card">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="size-4 text-pink-300" />
                    <span className="text-sm text-slate-300">Mejora promedio</span>
                  </div>
                  <p className="text-2xl">+12%</p>
                </div>
              </div>
            </div>
            {/* Métricas rápidas */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl">
                <div className="text-3xl mb-2">⚡</div>
                <div className="text-sm text-orange-100">Velocidad media</div>
                <div className="text-3xl">84 km/h</div>
              </div>
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-6 rounded-xl">
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-sm text-teal-100">Precisión media</div>
                <div className="text-3xl">92%</div>
              </div>
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-6 rounded-xl">
                <div className="text-3xl mb-2">🏓</div>
                <div className="text-sm text-pink-100">Golpes totales</div>
                <div className="text-3xl">28.5K</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl">
                <div className="text-3xl mb-2">❤️</div>
                <div className="text-sm text-purple-100">BPM promedio</div>
                <div className="text-3xl">140</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sesiones recientes */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-slate-900 mb-1">Sesiones Recientes</h3>
              <p className="text-slate-600">Historial de tus últimos entrenamientos y partidos</p>
            </div>
            <button
              onClick={() => setActiveSection('dashboard')}
              className="hero-button"
            >
              Ver análisis completo
            </button>
          </div>
          <div className="sessions-grid">
            {sessions
              ? sessions.map((session) => (
                  <SessionCard
                    key={session.id}
                    session={session}
                    onClick={() => setActiveSection('dashboard')}
                  />
                ))
              : 'Cargando sesiones...'}
          </div>
        </div>
      </div>
    </section>
  );
}
