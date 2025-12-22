from pydantic import BaseModel
from typing import Literal, Optional
from datetime import datetime

# Modelo para el estado del dispositivo
class DeviceStatus(BaseModel):
    device_id: str
    connected: bool
    battery_level: int  # 0 a 100
    timestamp: datetime
    signal:bool


# Modelo para un golpe (Swing/Hit)
class StrokeData(BaseModel):
    stroke_id: str
    player_id: str
    speed_kmh: float        # Velocidad del golpe
    spin_type: Literal['topspin', 'backspin', 'flat', 'none']
    sweet_spot_deviation: float # Distancia del centro de la pala (0 es perfecto)
    timestamp: datetime

# Modelo para el impacto en la mesa (Heatmap)
class TableImpact(BaseModel):
    x_coord: float  # Coordenada largo mesa
    y_coord: float  # Coordenada ancho mesa
    is_edge: bool   # Si pegó en el borde
    timestamp: datetime

# Modelo tipo de dispositivo
class DeviceType(BaseModel):
    device_id: str
    device_type: Literal['wearable', 'red', 'mesa', 'camara_hd', 'pelota']
    firmware_version: str
    last_update: Optional[datetime]
