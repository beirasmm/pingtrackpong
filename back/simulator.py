import random
import time
import uuid
from datetime import datetime
from models import DeviceStatus, StrokeData, TableImpact

class PingPongSimulator:
    def __init__(self, device_id="RACKET_01"):
        self.device_id = device_id
        self.battery = 100

    def generate_status(self):
        # La batería baja poco a poco
        self.battery = max(0, self.battery - random.uniform(0.1, 0.5))
        return DeviceStatus(
            device_id=self.device_id,
            connected=True, # Simulamos que siempre está conectado por ahora
            battery_level=int(self.battery),
            timestamp=datetime.now()
        )

    def generate_stroke(self):
        # Simulamos datos realistas
        # Velocidad: Jugador amateur entre 30 y 80 km/h, Pro > 100
        speed = random.normalvariate(60, 15) 
        
        # Punto dulce: 0 es el centro. Usamos distribución normal centrada en 0.
        # Desviación en cm desde el centro de la pala.
        deviation = abs(random.normalvariate(0, 3.5)) 
        
        return StrokeData(
            stroke_id=str(uuid.uuid4()),
            player_id="PLAYER_1",
            speed_kmh=round(speed, 2),
            spin_type=random.choice(['topspin', 'topspin', 'flat', 'backspin']), # Topspin es más común
            sweet_spot_deviation=round(deviation, 2),
            timestamp=datetime.now()
        )

    def generate_impact(self):
        # Dimensiones mesa: Largo ~274cm, Ancho ~152.5cm
        # Asumimos coordenadas relativas: x (0-274), y (0-152.5)
        return TableImpact(
            x_coord=round(random.uniform(0, 274), 1),
            y_coord=round(random.uniform(0, 152.5), 1),
            is_edge=random.choice([True] + [False]*20), # 5% probabilidad de borde
            timestamp=datetime.now()
        )

# Ejemplo de uso (solo para probar el script)
if __name__ == "__main__":
    sim = PingPongSimulator()
    print(sim.generate_stroke().json())