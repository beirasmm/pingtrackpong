export const processRealData = (
	rawData: any[],
	rows: number,
	cols: number
): number[][] => {
	// Crear matriz de ceros
	const matrix: number[][] = Array(rows)
		.fill(0)
		.map(() => Array(cols).fill(0));

	const MESA_ANCHO = 274; // X
	const MESA_LARGO = 152.5; // Y

	rawData.forEach((point) => {
		// Mapeo proporcional: (coordenada / max_mesa) * total_celdas
		const colIndex = Math.floor((point.x_coord / MESA_ANCHO) * cols);
		const rowIndex = Math.floor((point.y_coord / MESA_LARGO) * rows);

		// Seguridad: solo procesar si cae dentro de la matriz
		if (rowIndex >= 0 && rowIndex < rows && colIndex >= 0 && colIndex < cols) {
			matrix[rowIndex][colIndex] += 1;
		}
	});

	// Normalizar a escala 0-100 para tus clases CSS
	const maxHits = Math.max(...matrix.flat());
	if (maxHits === 0) return matrix;

	return matrix.map((row) =>
		row.map((hits) => Math.round((hits / maxHits) * 100))
	);
};

export const getHeatColorClass = (intensity: number): string => {
	if (intensity === 0) return 'heatmap-empty';
	if (intensity < 20) return 'heatmap-blue';
	if (intensity < 40) return 'heatmap-teal';
	if (intensity < 60) return 'heatmap-yellow';
	if (intensity < 80) return 'heatmap-orange';
	return 'heatmap-red';
};
