import { useEffect, useState } from 'react';
import { LucideIcon, TrendingUp, TrendingDown, Zap, Target, Activity, Heart } from 'lucide-react';
import './StatsCard.css'; // Importa el CSS

interface StatsData {
  icon: LucideIcon;
  title: string;
  value: string;
  change: string;
  positive: boolean;
  color: 'orange' | 'teal' | 'pink' | 'purple';
}

interface StatsCardProps {
  type: 'Velocidad Media' | 'Precisión' | 'Golpes Totales' | 'BPM Medio';
}

const colorClasses = {
  orange: { bg: 'from-orange-500 to-orange-600', text: 'text-orange-600', lightBg: 'bg-orange-50' },
  teal: { bg: 'from-teal-500 to-teal-600', text: 'text-teal-600', lightBg: 'bg-teal-50' },
  pink: { bg: 'from-pink-500 to-pink-600', text: 'text-pink-600', lightBg: 'bg-pink-50' },
  purple: { bg: 'from-purple-500 to-purple-600', text: 'text-purple-600', lightBg: 'bg-purple-50' },
};

// Genera un StatsData específico según el tipo
const generateRandomStat = (type: StatsCardProps['type']): StatsData => {
  switch (type) {
    case 'Velocidad Media':
      return {
        icon: Zap,
        title: type,
        value: `${Math.floor(Math.random() * 50 + 50)} km/h`,
        change: `${Math.floor(Math.random() * 10 - 5)}%`,
        positive: Math.random() > 0.5,
        color: 'orange',
      };
    case 'Precisión':
      return {
        icon: Target,
        title: type,
        value: `${Math.floor(Math.random() * 15 + 85)}%`,
        change: `${Math.floor(Math.random() * 5 - 2)}%`,
        positive: Math.random() > 0.5,
        color: 'teal',
      };
    case 'Golpes Totales':
      return {
        icon: Activity,
        title: type,
        value: `${Math.floor(Math.random() * 500 + 700)}`,
        change: `${Math.floor(Math.random() * 50 - 25)}`,
        positive: Math.random() > 0.5,
        color: 'pink',
      };
    case 'BPM Medio':
      return {
        icon: Heart,
        title: type,
        value: `${Math.floor(Math.random() * 40 + 120)}`,
        change: `${Math.floor(Math.random() * 10 - 5)}`,
        positive: Math.random() > 0.5,
        color: 'purple',
      };
  }
};

export function StatsCard({ type }: StatsCardProps) {
  const [stats, setStats] = useState<StatsData | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats(generateRandomStat(type));
    }, 200);
    return () => clearTimeout(timer);
  }, [type]);

  if (!stats) return (
    <div className="stats-card-loading">
      <div className="loader-icon"></div>
      <div className="loader-title"></div>
      <div className="loader-value"></div>
    </div>
  );

  const colors = colorClasses[stats.color];
  const IconComponent = stats.icon;

  return (
    <div className="stats-card">
      <div className="stats-card-header">
        <div className={`stats-card-icon bg-gradient-to-br ${colors.bg}`}>
          <IconComponent className="icon-svg" />
        </div>
        <div className={`stats-card-change ${stats.positive ? 'text-green-600' : 'text-red-600'}`}>
          {stats.positive ? <TrendingUp className="icon-change" /> : <TrendingDown className="icon-change" />}
          <span>{stats.change}</span>
        </div>
      </div>
      <div>
        <p className="stats-card-title">{stats.title}</p>
        <p className="stats-card-value">{stats.value}</p>
      </div>
    </div>
  );
}
