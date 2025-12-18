import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { sesion: 'Sesión 1', velocidad: 75, precision: 85, resistencia: 70 },
  { sesion: 'Sesión 5', velocidad: 78, precision: 87, resistencia: 74 },
  { sesion: 'Sesión 10', velocidad: 81, precision: 89, resistencia: 77 },
  { sesion: 'Sesión 15', velocidad: 83, precision: 91, resistencia: 80 },
  { sesion: 'Sesión 20', velocidad: 85, precision: 93, resistencia: 83 },
  { sesion: 'Sesión 24', velocidad: 87, precision: 94, resistencia: 86 },
];

export function EvolutionChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="sesion" stroke="#64748b" />
        <YAxis stroke="#64748b" />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#fff', 
            border: '1px solid #e2e8f0',
            borderRadius: '8px' 
          }} 
        />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="velocidad" 
          stroke="#f97316" 
          strokeWidth={3}
          name="Velocidad"
          dot={{ fill: '#f97316', r: 5 }}
        />
        <Line 
          type="monotone" 
          dataKey="precision" 
          stroke="#14b8a6" 
          strokeWidth={3}
          name="Precisión"
          dot={{ fill: '#14b8a6', r: 5 }}
        />
        <Line 
          type="monotone" 
          dataKey="resistencia" 
          stroke="#ec4899" 
          strokeWidth={3}
          name="Resistencia"
          dot={{ fill: '#ec4899', r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
