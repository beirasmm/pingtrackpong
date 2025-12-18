import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { time: '0min', velocidad: 75, precision: 88 },
  { time: '15min', velocidad: 82, precision: 91 },
  { time: '30min', velocidad: 88, precision: 94 },
  { time: '45min', velocidad: 91, precision: 96 },
  { time: '60min', velocidad: 89, precision: 95 },
  { time: '75min', velocidad: 85, precision: 92 },
  { time: '90min', velocidad: 87, precision: 94 },
  { time: '105min', velocidad: 84, precision: 93 },
  { time: '120min', velocidad: 81, precision: 91 },
];

export function PerformanceChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="time" stroke="#64748b" />
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
          name="Velocidad (km/h)"
          dot={{ fill: '#f97316', r: 4 }}
        />
        <Line 
          type="monotone" 
          dataKey="precision" 
          stroke="#14b8a6" 
          strokeWidth={3}
          name="Precisión (%)"
          dot={{ fill: '#14b8a6', r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
