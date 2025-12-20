import json
import os
from datetime import datetime
from typing import List, Dict
# Importamos los modelos para poder reconstruir los objetos al leer
from models import DeviceStatus, StrokeData, TableImpact

DB_FILE = "../database/pingpong_data.json"

class JsonStorage:
    def __init__(self):
        # Estructura inicial base
        self.data = {
            "device_status": None,
            "strokes": [],
            "heatmap": []
        }
        self.load_data()

    def load_data(self):
        """Carga el JSON existente si existe"""
        if os.path.exists(DB_FILE):
            try:
                with open(DB_FILE, 'r') as f:
                    raw_data = json.load(f)
                    self.data = raw_data
            except json.JSONDecodeError:
                print("Error leyendo JSON, iniciando vacío.")

    def save_data(self):
        """Escribe los datos actuales en el archivo JSON"""
        # Convertimos objetos Pydantic a dicts para poder guardarlos
        # Usamos default=str para que las fechas se guarden como texto ISO
        with open(DB_FILE, 'w') as f:
            json.dump(self.data, f, indent=4, default=str)

    # --- Métodos para añadir datos ---

    def update_status(self, status: DeviceStatus):
        # Convertimos a dict (jsonable)
        self.data["device_status"] = status.dict()
        self.save_data()

    def add_stroke(self, stroke: StrokeData):
        self.data["strokes"].append(stroke.dict())
        # Mantenemos solo los ultimos 100 para que el JSON no explote en la demo
        if len(self.data["strokes"]) > 100:
            self.data["strokes"].pop(0)
        self.save_data()

    def add_impact(self, impact: TableImpact):
        self.data["heatmap"].append(impact.dict())
        if len(self.data["heatmap"]) > 100:
            self.data["heatmap"].pop(0)
        self.save_data()

    # --- Métodos para leer (Getters) ---
    
    def get_status(self):
        return self.data.get("device_status")

    def get_strokes(self):
        return self.data.get("strokes", [])

    def get_heatmap(self):
        return self.data.get("heatmap", [])