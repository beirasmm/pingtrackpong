import { Battery, BatteryCharging, BatteryLow, Bluetooth, CheckCircle, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import './DeviceCard.css';

interface Device {
  id: number;
  name: string;
  type: string;
  status: 'connected' | 'disconnected' | 'warning';
  battery: number;
  charging: boolean;
  signal: number;
  lastSync: string;
  sensors: Array<{
    name: string;
    status: 'active' | 'inactive' | 'warning';
    value: string;
  }>;
}

interface DeviceCardProps {
  device: Device;
}

export function DeviceCard({ device }: DeviceCardProps) {
  const [expanded, setExpanded] = useState(false);

  const getBatteryIcon = () => {
    if (device.charging) return BatteryCharging;
    if (device.battery < 25) return BatteryLow;
    return Battery;
  };

  const getBatteryLevelClass = () => {
    if (device.battery < 25) return 'battery-low';
    if (device.battery < 50) return 'battery-mid';
    return 'battery-high';
  };

  const getStatusColorClass = () => {
    if (device.status === 'connected') return 'status-connected';
    if (device.status === 'warning') return 'status-warning';
    return 'status-disconnected';
  };

  const BatteryIcon = getBatteryIcon();

  return (
    <div className="device-card">
      <div className="card-content">
        {/* Header */}
        <div className="card-header">
          <div className="device-info">
            <div className={`device-icon ${getStatusColorClass()}`}>
              {device.type === 'Wearable' ? '⌚' :
               device.type === 'Mesa' ? '🏓' :
               device.type === 'Pala' ? '🎾' :
               device.type === 'Cámara' ? '📹' :
               device.type === 'Red' ? '🏐' : '📱'}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="device-name">{device.name}</h3>
                <span className={`status-badge ${getStatusColorClass()}`}>
                  {device.status === 'connected' ? 'Conectado' : device.status === 'warning' ? 'Atención' : 'Desconectado'}
                </span>
              </div>
              <p className="device-type">{device.type}</p>
              <p className="device-last-sync">Última sincronización: {device.lastSync}</p>
            </div>
          </div>
          <button className="expand-btn" onClick={() => setExpanded(!expanded)}>
            {expanded ? <ChevronUp className="size-5" /> : <ChevronDown className="size-5" />}
          </button>
        </div>

        {/* Métricas */}
        <div className="metrics-grid">
          {/* Batería */}
          <div className="metric">
            <div className="metric-header">
              <BatteryIcon className={`size-4 ${getBatteryLevelClass()}`} />
              <span>Batería</span>
            </div>
            <div className="metric-value">
              {device.battery}% {device.charging && <span>Cargando</span>}
            </div>
            <div className="metric-bar">
              <div className={`metric-bar-fill ${getBatteryLevelClass()}`} style={{ width: `${device.battery}%` }}></div>
            </div>
          </div>

          {/* Señal */}
          <div className="metric">
            <div className="metric-header">
              <Bluetooth className="size-4 text-blue-500" />
              <span>Señal BLE</span>
            </div>
            <div className="metric-value">{device.signal}%</div>
            <div className="metric-bar">
              <div className="metric-bar-fill signal-bar" style={{ width: `${device.signal}%` }}></div>
            </div>
          </div>

          {/* Estado */}
          <div className="metric">
            <div className="metric-header">
              {device.status === 'connected' ? <CheckCircle className="size-4 text-green-500" /> : <AlertCircle className="size-4 text-yellow-500" />}
              <span>Estado</span>
            </div>
            <div className="metric-value">
              {device.status === 'connected' ? 'Operativo' : device.status === 'warning' ? 'Revisar' : 'Offline'}
            </div>
            <div className="text-xs text-slate-500 mt-1">
              {device.sensors.filter(s => s.status === 'active').length}/{device.sensors.length} sensores activos
            </div>
          </div>
        </div>

        {/* Sensores expandibles */}
        {expanded && (
          <div className="expanded">
            <h4>Sensores del dispositivo</h4>
            <div className="sensor-grid">
              {device.sensors.map((sensor, i) => (
                <div key={i} className={`sensor ${sensor.status === 'active' ? 'sensor-active' : sensor.status === 'warning' ? 'sensor-warning' : 'sensor-inactive'}`}>
                  <div>
                    <p className="text-sm">{sensor.name}</p>
                    <p className="text-xs">{sensor.value}</p>
                  </div>
                  <div className={`sensor-dot ${sensor.status === 'active' ? 'active' : sensor.status === 'warning' ? 'warning' : 'inactive'}`}></div>
                </div>
              ))}
            </div>

            <div className="action-buttons">
              <button className="action-btn action-btn-config">Configuración</button>
              <button className="action-btn action-btn-recalibrate">Recalibrar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
