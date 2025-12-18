import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { fecha: '1 Dic', velocidad: 79, precision: 89, golpes: 834 },
  { fecha: '4 Dic', velocidad: 85, precision: 93, golpes: 1103 },
  { fecha: '6 Dic', velocidad: 82, precision: 91, golpes: 956 },
  { fecha: '8 Dic', velocidad: 87, precision: 94, golpes: 1247 },
];

export function SessionComparisonChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="fecha" stroke="#64748b" />
        <YAxis stroke="#64748b" />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#fff', 
            border: '1px solid #e2e8f0',
            borderRadius: '8px' 
          }} 
        />
        <Legend />
        <Bar dataKey="velocidad" fill="#f97316" name="Velocidad (km/h)" radius={[8, 8, 0, 0]} />
        <Bar dataKey="precision" fill="#14b8a6" name="Precisión (%)" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
