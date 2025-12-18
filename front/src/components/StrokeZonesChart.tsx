import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { zona: 'Zona derecha', actual: 92, promedio: 85 },
  { zona: 'Zona izquierda', actual: 78, promedio: 82 },
  { zona: 'Zona central', actual: 96, promedio: 88 },
  { zona: 'Zona delantera', actual: 88, promedio: 84 },
  { zona: 'Zona trasera', actual: 82, promedio: 80 },
];

export function StrokeZonesChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <RadarChart data={data}>
        <PolarGrid stroke="#e2e8f0" />
        <PolarAngleAxis dataKey="zona" stroke="#64748b" />
        <PolarRadiusAxis stroke="#64748b" />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#fff', 
            border: '1px solid #e2e8f0',
            borderRadius: '8px' 
          }}
        />
        <Legend />
        <Radar 
          name="Sesión actual" 
          dataKey="actual" 
          stroke="#f97316" 
          fill="#f97316" 
          fillOpacity={0.5}
          strokeWidth={2}
        />
        <Radar 
          name="Promedio general" 
          dataKey="promedio" 
          stroke="#14b8a6" 
          fill="#14b8a6" 
          fillOpacity={0.3}
          strokeWidth={2}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
