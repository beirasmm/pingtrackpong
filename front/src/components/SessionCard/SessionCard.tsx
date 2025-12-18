import {
  Calendar,
  Clock,
  Activity,
  Zap,
  Target,
  Heart,
} from 'lucide-react';
import './SessionCard.css';

export function SessionCard({ session, onClick }: SessionCardProps) {
  const isPartido = session.tipo === 'Partido';

  return (
    <div className="session-card" onClick={onClick}>
      <div className="session-card-header">
        <div className="session-card-date">
          <div className="session-card-row">
            <Calendar size={16} className="icon-slate" />
            <span className="session-card-date-text">{session.date}</span>
          </div>
          <div className="session-card-row">
            <Clock size={16} className="icon-slate" />
            <span className="session-card-duration">{session.duration}</span>
          </div>
        </div>

        <span
          className={`session-badge ${
            isPartido ? 'partido' : 'entrenamiento'
          }`}
        >
          {session.tipo}
        </span>
      </div>

      <div className="session-stats">
        <div className="session-stat">
          <div className="session-stat-header">
            <Activity size={16} className="icon-pink" />
            <span className="session-stat-label">Golpes</span>
          </div>
          <p className="session-stat-value">
            {session.golpes.toLocaleString()}
          </p>
        </div>

        <div className="session-stat">
          <div className="session-stat-header">
            <Zap size={16} className="icon-orange" />
            <span className="session-stat-label">Velocidad</span>
          </div>
          <p className="session-stat-value">
            {session.velocidadMedia} km/h
          </p>
        </div>

        <div className="session-stat">
          <div className="session-stat-header">
            <Target size={16} className="icon-teal" />
            <span className="session-stat-label">Precisión</span>
          </div>
          <p className="session-stat-value">
            {session.precision}%
          </p>
        </div>

        <div className="session-stat">
          <div className="session-stat-header">
            <Heart size={16} className="icon-pink" />
            <span className="session-stat-label">BPM</span>
          </div>
          <p className="session-stat-value">{session.bpm}</p>
        </div>
      </div>
    </div>
  );
}
