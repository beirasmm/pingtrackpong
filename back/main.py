from fastapi import FastAPI
from typing import List
from models import DeviceStatus, StrokeData, TableImpact
from simulator import PingPongSimulator
from storage import JsonStorage
import asyncio
import random
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(title="PingPong IoT API - JSON Persistence")

# Instanciamos el simulador y el almacenamiento
simulator = PingPongSimulator()
storage = JsonStorage()

@app.on_event("startup")
async def start_simulation_loop():
    asyncio.create_task(run_simulation())

async def run_simulation():
    """Genera datos y los guarda en el JSON automáticamente"""
    print("--- Iniciando Simulación y Grabación en JSON ---")
    while True:
        # 1. Actualizar y guardar estado
        status = simulator.generate_status()
        storage.update_status(status)
        
        # 2. Simular golpes aleatorios
        if random.random() > 0.3: 
            new_stroke = simulator.generate_stroke()
            storage.add_stroke(new_stroke)
            
            if random.random() > 0.1: 
                new_impact = simulator.generate_impact()
                storage.add_impact(new_impact)
        
        # Esperamos 2 segundos antes de generar más datos
        await asyncio.sleep(2)

#---Configuracion CORS---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # En producción cambia "*" por la URL de tu React
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# --- ENDPOINTS (Ahora leen del JSON a través de la clase storage) ---

@app.get("/status", response_model=DeviceStatus)
def get_device_status():
    data = storage.get_status()
    if not data:
        return simulator.generate_status()
    return data

@app.get("/telemetry/strokes", response_model=List[StrokeData])
def get_recent_strokes():
    return storage.get_strokes()

@app.get("/telemetry/heatmap", response_model=List[TableImpact])
def get_heatmap_data():
    return storage.get_heatmap()
