import { useEffect, useState } from 'react';
import { HeatMapData } from './HeatMapData';
import './HeatMap.css';

const getHeatColorClass = (intensity: number) => {
  if (intensity < 20) return 'heatmap-blue';
  if (intensity < 40) return 'heatmap-teal';
  if (intensity < 60) return 'heatmap-yellow';
  if (intensity < 80) return 'heatmap-orange';
  return 'heatmap-red';
};

export function HeatMap() {
  const [heatData, setHeatData] = useState<number[][]>([]);
  const [hoveredCell, setHoveredCell] = useState<{ row: number; col: number; value: number } | null>(null);

  useEffect(() => {
    const heatMap = new HeatMapData(15, 30);
    heatMap.fetchData().then((data) => setHeatData(data));
  }, []);

  if (!heatData.length) return <p>Cargando datos...</p>;

  return (
    <div className="heatmap-container">
      <div className="heatmap-legend">
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-600">Baja intensidad</span>
          <div className="colors">
            <div className="color-box heatmap-blue"></div>
            <div className="color-box heatmap-teal"></div>
            <div className="color-box heatmap-yellow"></div>
            <div className="color-box heatmap-orange"></div>
            <div className="color-box heatmap-red"></div>
          </div>
          <span className="text-sm text-slate-600">Alta intensidad</span>
        </div>

        {hoveredCell && (
          <div className="heatmap-hover-info">
            Intensidad: {hoveredCell.value.toFixed(0)}% | Pos: ({hoveredCell.col}, {hoveredCell.row})
          </div>
        )}
      </div>

      <div className="heatmap-grid-wrapper">
        <div className="heatmap-net"></div>

        <div className="heatmap-grid" style={{ gridTemplateRows: `repeat(${heatData.length}, 1fr)` }}>
          {heatData.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="heatmap-row"
              style={{ gridTemplateColumns: `repeat(${row.length}, 1fr)` }}
            >
              {row.map((intensity, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`heatmap-cell ${getHeatColorClass(intensity)}`}
                  style={{ opacity: 0.3 + (intensity / 100) * 0.7 }}
                  onMouseEnter={() => setHoveredCell({ row: rowIndex, col: colIndex, value: intensity })}
                  onMouseLeave={() => setHoveredCell(null)}
                ></div>
              ))}
            </div>
          ))}
        </div>

        <div className="heatmap-net"></div>
      </div>
    </div>
  );
}
