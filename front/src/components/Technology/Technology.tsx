import { Battery, Bluetooth, Wifi, CheckCircle, AlertCircle, Settings, Radio } from 'lucide-react';
import { DeviceCard } from '../DeviceCard/DeviceCard';
import { SensorStatus } from '../SensorStatus';
import './Technology.css'

const devices = [
  {
    id: 1,
    name: 'Apple Watch Series 9',
    type: 'Wearable',
    status: 'connected',
    battery: 78,
    charging: false,
    signal: 95,
    lastSync: 'Hace 2 min',
    sensors: [
      { name: 'Monitor cardíaco', status: 'active', value: '142 BPM' },
      { name: 'Acelerómetro', status: 'active', value: 'Activo' },
      { name: 'Giroscopio', status: 'active', value: 'Activo' },
    ],
  },
  {
    id: 2,
    name: 'Mesa Inteligente Pro',
    type: 'Mesa',
    status: 'connected',
    battery: 92,
    charging: true,
    signal: 88,
    lastSync: 'Hace 5 seg',
    sensors: [
      { name: 'Piezoeléctrico NE', status: 'active', value: '98%' },
      { name: 'Piezoeléctrico NO', status: 'active', value: '97%' },
      { name: 'Piezoeléctrico SE', status: 'active', value: '99%' },
      { name: 'Piezoeléctrico SO', status: 'active', value: '96%' },
      { name: 'Sensor de vibración', status: 'active', value: 'Operativo' },
    ],
  },
  {
    id: 3,
    name: 'Sensor Pala Principal',
    type: 'Pala',
    status: 'connected',
    battery: 45,
    charging: false,
    signal: 91,
    lastSync: 'Hace 1 min',
    sensors: [
      { name: 'Acelerómetro 3D', status: 'active', value: '0-150 km/h' },
      { name: 'Giroscopio 3D', status: 'active', value: '360°' },
      { name: 'Sensor impacto', status: 'active', value: '0-100N' },
    ],
  },
  {
    id: 4,
    name: 'Cámara Tracking HD',
    type: 'Cámara',
    status: 'connected',
    battery: 100,
    charging: true,
    signal: 85,
    lastSync: 'Tiempo real',
    sensors: [
      { name: 'Sensor óptico', status: 'active', value: '120 FPS' },
      { name: 'Tracking IA', status: 'active', value: 'Activo' },
      { name: 'Detección giro', status: 'active', value: 'Operativo' },
    ],
  },
  {
    id: 5,
    name: 'Sensor Red Central',
    type: 'Red',
    status: 'warning',
    battery: 23,
    charging: false,
    signal: 72,
    lastSync: 'Hace 45 min',
    sensors: [
      { name: 'Sensor táctil', status: 'warning', value: 'Batería baja' },
      { name: 'Contador toques', status: 'active', value: '12 toques' },
    ],
  },
];

const systemStatus = {
  bleHub: 'online',
  dataProcessing: 'active',
  cloudSync: 'synced',
  aiAnalysis: 'processing',
};


export function Technology() {
  const connectedDevices = devices.filter(d => d.status === 'connected').length;
  const warningDevices = devices.filter(d => d.status === 'warning').length;
  const avgBattery = Math.round(devices.reduce((acc, d) => acc + d.battery, 0) / devices.length);
  const avgSignal = Math.round(devices.reduce((acc, d) => acc + d.signal, 0) / devices.length);

  return (
    <div className="technology">
      <div className="technology-container">
        {/* Header */}
        <div className="technology-header mb-8">
          <h2>Panel de Control IoT</h2>
          <p>Monitoreo y configuración de dispositivos y sensores</p>
        </div>

        {/* Overview Cards */}
        <div className="overview-cards mb-8">
          <div className="overview-card">
            <div className="overview-card-header">
              <div className="overview-card-icon" style={{ background: 'linear-gradient(to bottom right, #22c55e, #16a34a)' }}>
                <CheckCircle className="size-6 text-white" />
              </div>
              <span className="status-badge" style={{ backgroundColor: '#dcfce7', color: '#16a34a' }}>Activo</span>
            </div>
            <p className="overview-card-text">Dispositivos conectados</p>
            <p className="overview-card-value">{connectedDevices}/{devices.length}</p>
          </div>

          <div className="overview-card">
            <div className="overview-card-header">
              <div className="overview-card-icon" style={{ background: 'linear-gradient(to bottom right, #f97316, #ea580c)' }}>
                <Battery className="size-6 text-white" />
              </div>
              <span className="status-badge" style={{ backgroundColor: '#ffedd5', color: '#c2410c' }}>{avgBattery}%</span>
            </div>
            <p className="overview-card-text">Batería promedio</p>
            <p className="overview-card-value">{avgBattery}%</p>
          </div>

          <div className="overview-card">
            <div className="overview-card-header">
              <div className="overview-card-icon" style={{ background: 'linear-gradient(to bottom right, #3b82f6, #2563eb)' }}>
                <Bluetooth className="size-6 text-white" />
              </div>
              <span className="status-badge" style={{ backgroundColor: '#dbeafe', color: '#1d4ed8' }}>{avgSignal}%</span>
            </div>
            <p className="overview-card-text">Señal promedio</p>
            <p className="overview-card-value">{avgSignal}%</p>
          </div>

          <div className="overview-card">
            <div className="overview-card-header">
              <div className="overview-card-icon" style={{ background: warningDevices > 0 ? 'linear-gradient(to bottom right, #fbbf24, #f59e0b)' : 'linear-gradient(to bottom right, #22c55e, #16a34a)' }}>
                {warningDevices > 0 ? <AlertCircle className="size-6 text-white" /> : <CheckCircle className="size-6 text-white" />}
              </div>
              <span className="status-badge" style={{ backgroundColor: warningDevices > 0 ? '#fef3c7' : '#dcfce7', color: warningDevices > 0 ? '#b45309' : '#16a34a' }}>
                {warningDevices > 0 ? 'Atención' : 'OK'}
              </span>
            </div>
            <p className="overview-card-text">Alertas activas</p>
            <p className="overview-card-value">{warningDevices}</p>
          </div>
        </div>

        {/* System Status */}
        <div className="system-status mb-8">
          <div className="system-status-header">
            <Settings className="size-5 text-slate-600" />
            <h3>Estado del Sistema</h3>
          </div>
          <div className="system-status-grid">
            <div className="system-status-card" style={{ backgroundColor: '#d1fae5', borderColor: '#22c55e' }}>
              <div className="system-status-card-icon" style={{ backgroundColor: '#22c55e' }}>
                <Bluetooth className="size-5 text-white" />
              </div>
              <div className="system-status-card-text">
                <p>BLE Hub</p>
                <p>En línea</p>
              </div>
            </div>

            <div className="system-status-card" style={{ backgroundColor: '#dbeafe', borderColor: '#3b82f6' }}>
              <div className="system-status-card-icon" style={{ backgroundColor: '#3b82f6' }}>
                <Radio className="size-5 text-white" />
              </div>
              <div className="system-status-card-text">
                <p>Procesamiento</p>
                <p>Activo</p>
              </div>
            </div>

            <div className="system-status-card" style={{ backgroundColor: '#ccfbf1', borderColor: '#14b8a6' }}>
              <div className="system-status-card-icon" style={{ backgroundColor: '#14b8a6' }}>
                <Wifi className="size-5 text-white" />
              </div>
              <div className="system-status-card-text">
                <p>Sincronización</p>
                <p>Sincronizado</p>
              </div>
            </div>

            <div className="system-status-card" style={{ backgroundColor: '#ede9fe', borderColor: '#7c3aed' }}>
              <div className="system-status-card-icon" style={{ backgroundColor: '#7c3aed' }}>
                <Settings className="size-5 text-white" />
              </div>
              <div className="system-status-card-text">
                <p>Análisis IA</p>
                <p>Procesando</p>
              </div>
            </div>
          </div>
        </div>

        {/* Devices List */}
        <div className="devices-header mb-6">
          <h3>Dispositivos Conectados</h3>
          <button onClick={() => alert("Buscando dispositivos...")}>
            <Radio className="size-4" />
            Buscar dispositivos
          </button>
        </div>
        <div className="devices-list">
          {devices.map(device => <DeviceCard key={device.id} device={device} />)}
        </div>

        {/* Connection & Energy Info */}
        <div className="info-grid mt-8">
          <div className="info-card">
            <h3>📡 Información de Conectividad</h3>
            <ul>
              <li>Protocolo: Bluetooth Low Energy 5.0</li>
              <li>Alcance efectivo: 10 metros</li>
              <li>Frecuencia de actualización: 100 Hz</li>
              <li>Latencia promedio: 12ms</li>
              <li>Tasa de pérdida de paquetes: 0.02%</li>
            </ul>
          </div>
          <div className="info-card info-card-orange">
            <h3>⚡ Gestión de Energía</h3>
            <ul>
              <li>Modo ahorro energía: Habilitado</li>
              <li>Recarga automática disponible (mesa y cámara)</li>
              <li>Alerta batería baja: &lt; 25%</li>
              <li>Duración estimada sesión: 2-4 horas</li>
              <li>Compatible con pilas AA/AAA recargables</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
