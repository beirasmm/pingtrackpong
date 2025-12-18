import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Drive derecha', value: 342, percentage: 27 },
  { name: 'Drive revés', value: 298, percentage: 24 },
  { name: 'Top spin', value: 261, percentage: 21 },
  { name: 'Bloqueo', value: 187, percentage: 15 },
  { name: 'Remate', value: 99, percentage: 8 },
  { name: 'Defensa', value: 60, percentage: 5 },
];

const COLORS = ['#f97316', '#14b8a6', '#ec4899', '#8b5cf6', '#f59e0b', '#06b6d4'];

export function ShotTypeChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percentage }) => `${name} ${percentage}%`}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#fff', 
            border: '1px solid #e2e8f0',
            borderRadius: '8px' 
          }}
          formatter={(value: number) => [`${value} golpes`, 'Cantidad']}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
