export class HeatMapData {
  rows: number;
  cols: number;
  data: number[][];

  constructor(rows: number = 15, cols: number = 30) {
    this.rows = rows;
    this.cols = cols;
    this.data = this.generateData();
  }

  // Genera datos aleatorios para el heatmap
  private generateData(): number[][] {
    const data: number[][] = [];
    for (let i = 0; i < this.rows; i++) {
      const row: number[] = [];
      for (let j = 0; j < this.cols; j++) {
        const centerX = this.cols / 2;
        const centerY = this.rows / 2;
        const distanceFromCenter = Math.sqrt(Math.pow(j - centerX, 2) + Math.pow(i - centerY, 2));
        
        let intensity = Math.max(0, 100 - distanceFromCenter * 5); // zonas centrales más calientes
        intensity += (Math.random() - 0.5) * 30; // variación aleatoria

        // zonas calientes en las esquinas
        if ((i < 3 && j < 5) || (i < 3 && j > this.cols - 5) || (i > this.rows - 3 && j < 5) || (i > this.rows - 3 && j > this.cols - 5)) {
          intensity += Math.random() * 40;
        }

        row.push(Math.max(0, Math.min(100, intensity)));
      }
      data.push(row);
    }
    return data;
  }

  // Simula una llamada a API para obtener los datos
  async fetchData(): Promise<number[][]> {
    return new Promise((resolve) => {
        resolve(this.data);
    });
  }
}
