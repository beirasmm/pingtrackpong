import { useState, useEffect } from 'react';
import { heatMapService } from '../../services/heatmapService';
import { processRealData, getHeatColorClass } from './HeatMapData';
import './HeatMap.css'; // Asegúrate de tener tus estilos aquí

export function HeatMap() {
	const [heatData, setHeatData] = useState<number[][]>([]);
	const [hoveredCell, setHoveredCell] = useState<any>(null);
	const ROWS = 15;
	const COLS = 30;

	useEffect(() => {
		const loadData = async () => {
			try {
				const raw = await heatMapService.getHeatmapData();
				const matrix = processRealData(raw, ROWS, COLS);
				setHeatData(matrix);
			} catch (err) {
				console.error('Fallo al cargar mapa:', err);
			}
		};

		loadData();
		// Opcional: poner un intervalo para tiempo real
		// const interval = setInterval(loadData, 5000);
		// return () => clearInterval(interval);
	}, []);

	if (heatData.length === 0)
		return <div className="p-10">Cargando datos de telemetría...</div>;

	return (
		<div className="heatmap-container">
			<div className="heatmap-legend">
				<div className="flex items-center gap-4">
					<span className="text-sm text-slate-600">Baja intensidad</span>
					<div className="colors flex gap-1">
						<div className="color-box heatmap-blue w-4 h-4"></div>
						<div className="color-box heatmap-teal w-4 h-4"></div>
						<div className="color-box heatmap-yellow w-4 h-4"></div>
						<div className="color-box heatmap-orange w-4 h-4"></div>
						<div className="color-box heatmap-red w-4 h-4"></div>
					</div>
					<span className="text-sm text-slate-600">Alta intensidad</span>
				</div>

				{hoveredCell && (
					<div className="heatmap-hover-info">
						Intensidad: {hoveredCell.value}% | Pos: [{hoveredCell.row},{' '}
						{hoveredCell.col}]
					</div>
				)}
			</div>

			<div className="heatmap-grid-wrapper">
				<div
					className="heatmap-grid"
					style={{ gridTemplateRows: `repeat(${ROWS}, 1fr)` }}
				>
					{heatData.map((row, rowIndex) => (
						<div
							key={rowIndex}
							className="heatmap-row"
							style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}
						>
							{row.map((intensity, colIndex) => (
								<div
									key={`${rowIndex}-${colIndex}`}
									className={`heatmap-cell ${getHeatColorClass(intensity)}`}
									style={{
										opacity:
											intensity === 0 ? 0.1 : 0.3 + (intensity / 100) * 0.7,
									}}
									onMouseEnter={() =>
										setHoveredCell({
											row: rowIndex,
											col: colIndex,
											value: intensity,
										})
									}
									onMouseLeave={() => setHoveredCell(null)}
								/>
							))}
						</div>
					))}
				</div>
				{/* Línea de la red (opcional) */}
				<div className="heatmap-net-line"></div>
			</div>
		</div>
	);
}
