const BASE_URL = 'http://127.0.0.1:8000';

export const heatMapService = {
  getHeatmapData: async () => {
    try {
      const response = await fetch(`${BASE_URL}/telemetry/heatmap`);
      if (!response.ok) throw new Error('Error en la red');
      return await response.json();
    } catch (error) {
      console.error('Error en servicio:', error);
      throw error;
    }
  }
};
