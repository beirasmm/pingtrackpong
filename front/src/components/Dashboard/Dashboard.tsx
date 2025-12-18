import { TrendingUp, Heart, Target, Timer, BarChart3, PieChart, Calendar } from 'lucide-react';
import { PerformanceChart } from '../PerformanceChart';
import { HeatMap } from '../HeatMap/HeatMap';
import { StatsCard } from '../StatsCard/StatsCard';
import { BiometricChart } from '../BiometricChart/BiometricChart';
import { SessionComparisonChart } from '../SessionComparisonChart';
import { ShotTypeChart } from '../ShotTypeChart';
import { EvolutionChart } from '../EvolutionChart';
import { StrokeZonesChart } from '../StrokeZonesChart';
import { SessionStatsTable } from '../SessionStatsTable';
import './Dashboard.css'; // Importa el CSS que creamos

export function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-inner">
        {/* Header */}
        <div className="dashboard-header mb-8">
          <h2>Dashboard de Rendimiento</h2>
          <p>Análisis completo de tu última sesión y evolución general</p>
        </div>

        {/* Stats Overview */}
        <div className="stats-overview">
          <StatsCard type="Velocidad Media" />
          <StatsCard type="Precisión" />
          <StatsCard type="Golpes Totales" />
          <StatsCard type="BPM Medio" />
        </div>

        {/* Charts Grid */}
        <div className="charts-grid">
          <div className="card">
            <div className="card-header">
              <TrendingUp className="icon" />
              <h3>Velocidad de Golpes</h3>
            </div>
            <PerformanceChart />
          </div>

          <div className="card">
            <div className="card-header">
              <Heart className="icon" />
              <h3>Datos Biométricos</h3>
            </div>
            <BiometricChart />
          </div>
        </div>

        {/* HeatMap */}
        <div className="card heatmap-card">
          <div className="card-header justify-between">
            <div className="card-header-left">
              <Target className="icon" />
              <h3>Mapa de Calor - Contacto con Mesa</h3>
            </div>
            <div className="card-header-right">
              <Timer className="icon-small" />
              <span className="text-sm">Última sesión: 2h 15min</span>
            </div>
          </div>
          <HeatMap />
        </div>

        {/* New Charts Section */}
        <div className="charts-grid-lower">
          <div className="card">
            <div className="card-header">
              <BarChart3 className="icon" />
              <h3>Comparación de Sesiones</h3>
            </div>
            <SessionComparisonChart />
          </div>

          <div className="card">
            <div className="card-header">
              <PieChart className="icon" />
              <h3>Distribución de Tipos de Golpe</h3>
            </div>
            <ShotTypeChart />
          </div>
        </div>

        {/* Evolution Chart */}
        <div className="card full-width-card">
          <div className="card-header">
            <TrendingUp className="icon" />
            <h3>Evolución de Rendimiento</h3>
            <span className="text-xs ml-auto">Últimas 24 sesiones</span>
          </div>
          <EvolutionChart />
        </div>

        {/* Stroke Zones Analysis */}
        <div className="card full-width-card">
          <div className="card-header">
            <Target className="icon" />
            <h3>Análisis por Zonas de Golpeo</h3>
          </div>
          <StrokeZonesChart />
        </div>

        {/* Session Stats Table */}
        <div className="card full-width-card">
          <div className="card-header">
            <Calendar className="icon" />
            <h3>Historial de Sesiones</h3>
          </div>
          <SessionStatsTable />
        </div>

        {/* Analysis Summary */}
        <div className="analysis-grid">
          <div className="analysis-card-green">
            <h3>💪 Fortalezas Detectadas</h3>
            <ul>
              <li><span>•</span> <span>Excelente precisión en golpes cruzados (96%)</span></li>
              <li><span>•</span> <span>Velocidad de respuesta superior en zona central</span></li>
              <li><span>•</span> <span>Consistencia mejorada en intercambios largos</span></li>
            </ul>
          </div>

          <div className="analysis-card-orange">
            <h3>🎯 Áreas de Mejora</h3>
            <ul>
              <li><span>•</span> <span>Mejorar colocación en esquina izquierda (78% precisión)</span></li>
              <li><span>•</span> <span>Reducir toques en red (12 en esta sesión)</span></li>
              <li><span>•</span> <span>Trabajar potencia en golpes de revés</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
