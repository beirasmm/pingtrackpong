import { Bluetooth, Battery, Watch, Waves, Camera, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Bluetooth,
    title: 'Comunicación BLE',
    description: 'Conexión inalámbrica mediante Bluetooth Low Energy para reducir el cableado innecesario y mantener la movilidad.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Battery,
    title: 'Baterías de larga duración',
    description: 'Alimentación de 2-4 horas que asegura completar partidos y entrenamientos. Compatible con pilas AA/AAA recargables.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Watch,
    title: 'Wearables inteligentes',
    description: 'Dispositivos portátiles que miden datos biométricos y de movimiento sin afectar el rendimiento del jugador.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Waves,
    title: 'Sensores piezoeléctricos',
    description: 'Detectan ondas cuando la pelota contacta la mesa, generando mapas de calor mediante cálculos trigonométricos.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Camera,
    title: 'Seguimiento por cámaras',
    description: 'Cámaras externas o smartphones para rastrear la pelota sin modificar su estructura. Accesible para todos los clubes.',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: TrendingUp,
    title: 'Análisis completo de datos',
    description: 'Recolección, procesamiento y generación de información relevante para clubes, entrenadores y jugadores.',
    color: 'from-teal-500 to-teal-600',
  },
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-4">Propuestas de innovación</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Seis pilares tecnológicos que hacen de PingTrackPong una solución completa e innovadora para el monitoreo deportivo
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-slate-200"
              >
                <div className={`bg-gradient-to-br ${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="size-6 text-white" />
                </div>
                <h3 className="text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
