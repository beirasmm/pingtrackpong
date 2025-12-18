import { useEffect, useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import './BiometricChart.css';

interface BiometricData {
  time: string;
  bpm: number;
  calorias: number;
}

// Mock de datos simulando API
const generateMockBiometricData = (): BiometricData[] => {
  const intervals = [
    '0min', '15min', '30min', '45min',
    '60min', '75min', '90min', '105min', '120min',
  ];

  let caloriasAcumuladas = 0;

  return intervals.map((time) => {
    const bpm = Math.floor(Math.random() * 40 + 110);
    const caloriasIncremento = Math.floor(Math.random() * 60 + 20);
    caloriasAcumuladas += caloriasIncremento;

    return {
      time,
      bpm,
      calorias: caloriasAcumuladas,
    };
  });
};

export function BiometricChart() {
  const [data, setData] = useState<BiometricData[] | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(generateMockBiometricData());
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Skeleton de carga
  if (!data) {
    return <div className="biometric-skeleton" />;
  }

  return (
    <div className="biometric-chart">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="time" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />

          <Tooltip />

          <Area
            yAxisId="left"
            type="monotone"
            dataKey="bpm"
            name="BPM"
            stroke="#ec4899"
            fill="#ec4899"
            fillOpacity={0.3}
            strokeWidth={2}
          />

          <Area
            yAxisId="right"
            type="monotone"
            dataKey="calorias"
            name="Calorías"
            stroke="#3b82f6"   // azul
            fill="#3b82f6"
            fillOpacity={0.3}
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
