import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import './MetricCard.css';

interface MetricCardProps {
  name: string;
  value: string;
  unit?: string;
  date: string;
  trend: 'up' | 'down' | 'neutral';
}

export const MetricCard: React.FC<MetricCardProps> = ({ name, value, unit, date, trend }) => {
  return (
    <div className="metric-card">
      <div className="metric-header">
        <span className="metric-name">{name}</span>
        {trend === 'up' && <ArrowUpRight size={16} color="var(--color-error)" />}
        {trend === 'down' && <ArrowDownRight size={16} color="var(--color-success)" />}
        {trend === 'neutral' && <Minus size={16} color="var(--color-text-secondary)" />}
      </div>
      
      <div className="metric-value-container">
        <span className="metric-value">{value}</span>
        {unit && <span className="metric-unit">{unit}</span>}
      </div>
      
      <span className="metric-date">{date}</span>
    </div>
  );
};
