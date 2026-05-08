import React from 'react';
import './HealthChip.css';

interface HealthChipProps {
  status: 'normal' | 'borderline' | 'abnormal';
  label?: string;
}

export const HealthChip: React.FC<HealthChipProps> = ({ status, label }) => {
  const defaultLabels = {
    normal: 'Normal',
    borderline: 'Borderline',
    abnormal: 'Abnormal'
  };

  return (
    <span className={`health-chip chip-${status}`}>
      {label || defaultLabels[status]}
    </span>
  );
};
