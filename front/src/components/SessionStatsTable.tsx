import { TrendingUp, TrendingDown } from 'lucide-react';

const sessions = [
  { 
    fecha: '8 Dic 2025', 
    tipo: 'Entrenamiento',
    duracion: '2h 15min',
    velocidad: 87, 
    precision: 94, 
    golpes: 1247,
    bpm: 142,
    changeVel: 5,
    changePrec: 2
  },
  { 
    fecha: '6 Dic 2025', 
    tipo: 'Partido',
    duracion: '1h 45min',
    velocidad: 82, 
    precision: 91, 
    golpes: 956,
    bpm: 138,
    changeVel: -3,
    changePrec: 2
  },
  { 
    fecha: '4 Dic 2025', 
    tipo: 'Entrenamiento',
    duracion: '2h 0min',
    velocidad: 85, 
    precision: 93, 
    golpes: 1103,
    bpm: 145,
    changeVel: 6,
    changePrec: 4
  },
  { 
    fecha: '1 Dic 2025', 
    tipo: 'Partido',
    duracion: '1h 30min',
    velocidad: 79, 
    precision: 89, 
    golpes: 834,
    bpm: 135,
    changeVel: -4,
    changePrec: -2
  },
];

export function SessionStatsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="text-left py-3 px-4 text-sm text-slate-600">Fecha</th>
            <th className="text-left py-3 px-4 text-sm text-slate-600">Tipo</th>
            <th className="text-left py-3 px-4 text-sm text-slate-600">Duración</th>
            <th className="text-center py-3 px-4 text-sm text-slate-600">Velocidad</th>
            <th className="text-center py-3 px-4 text-sm text-slate-600">Precisión</th>
            <th className="text-center py-3 px-4 text-sm text-slate-600">Golpes</th>
            <th className="text-center py-3 px-4 text-sm text-slate-600">BPM</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session, index) => (
            <tr 
              key={index} 
              className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
            >
              <td className="py-3 px-4 text-sm text-slate-900">{session.fecha}</td>
              <td className="py-3 px-4">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  session.tipo === 'Partido' 
                    ? 'bg-purple-100 text-purple-700' 
                    : 'bg-teal-100 text-teal-700'
                }`}>
                  {session.tipo}
                </span>
              </td>
              <td className="py-3 px-4 text-sm text-slate-600">{session.duracion}</td>
              <td className="py-3 px-4 text-center">
                <div className="flex items-center justify-center gap-1">
                  <span className="text-sm text-slate-900">{session.velocidad} km/h</span>
                  {session.changeVel !== 0 && (
                    <span className={`flex items-center text-xs ${session.changeVel > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {session.changeVel > 0 ? <TrendingUp className="size-3" /> : <TrendingDown className="size-3" />}
                      {Math.abs(session.changeVel)}%
                    </span>
                  )}
                </div>
              </td>
              <td className="py-3 px-4 text-center">
                <div className="flex items-center justify-center gap-1">
                  <span className="text-sm text-slate-900">{session.precision}%</span>
                  {session.changePrec !== 0 && (
                    <span className={`flex items-center text-xs ${session.changePrec > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {session.changePrec > 0 ? <TrendingUp className="size-3" /> : <TrendingDown className="size-3" />}
                      {Math.abs(session.changePrec)}%
                    </span>
                  )}
                </div>
              </td>
              <td className="py-3 px-4 text-center text-sm text-slate-900">
                {session.golpes.toLocaleString()}
              </td>
              <td className="py-3 px-4 text-center text-sm text-slate-900">{session.bpm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
