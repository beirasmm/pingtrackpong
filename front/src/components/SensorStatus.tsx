import { CheckCircle, AlertCircle, XCircle } from 'lucide-react';

interface SensorStatusProps {
  name: string;
  status: 'active' | 'inactive' | 'warning';
  value?: string;
}

export function SensorStatus({ name, status, value }: SensorStatusProps) {
  const getStatusIcon = () => {
    switch (status) {
      case 'active':
        return <CheckCircle className="size-4 text-green-500" />;
      case 'warning':
        return <AlertCircle className="size-4 text-yellow-500" />;
      case 'inactive':
        return <XCircle className="size-4 text-red-500" />;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'active':
        return 'bg-green-50 border-green-200';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200';
      case 'inactive':
        return 'bg-red-50 border-red-200';
    }
  };

  const getTextColor = () => {
    switch (status) {
      case 'active':
        return 'text-green-700';
      case 'warning':
        return 'text-yellow-700';
      case 'inactive':
        return 'text-red-700';
    }
  };

  return (
    <div className={`p-3 rounded-lg border ${getStatusColor()}`}>
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm text-slate-900">{name}</span>
        {getStatusIcon()}
      </div>
      {value && (
        <p className={`text-xs ${getTextColor()}`}>{value}</p>
      )}
    </div>
  );
}
