import React from 'react';
import { Button } from './Button';
import { FileText, SearchX, Box, Home } from 'lucide-react';
import './UIStates.css';

export type EmptyStateType = 'records' | 'search' | 'medicines' | 'family';

interface EmptyStateProps {
  type: EmptyStateType;
  onAction?: () => void;
}

const CONFIG = {
  records: {
    icon: <FileText size={48} strokeWidth={1.5} />,
    title: 'Abhi tak koi record nahi',
    desc: 'Pehla document scan karein — bas ek photo!',
    action: 'Scan Karein'
  },
  search: {
    icon: <SearchX size={48} strokeWidth={1.5} />,
    title: 'Kuch nahi mila',
    desc: 'Alag words try karein ya filters hataein',
    action: ''
  },
  medicines: {
    icon: <Box size={48} strokeWidth={1.5} />,
    title: 'Koi dawai add nahi ki',
    desc: 'Doctor ki parchi scan karein — dawaaiyan automatic add ho jaayengi',
    action: ''
  },
  family: {
    icon: <Home size={48} strokeWidth={1.5} />,
    title: 'Parivaar ka koi record nahi',
    desc: 'Maa, papa ya bachchon ke records rakhein',
    action: 'Add Family Member'
  }
};

export const EmptyState: React.FC<EmptyStateProps> = ({ type, onAction }) => {
  const data = CONFIG[type];

  return (
    <div className="empty-state-container">
      <div className="empty-illustration">
        <div className="illustration-bg"></div>
        {data.icon}
      </div>
      <h3 className="empty-title">{data.title}</h3>
      <p className="empty-desc">{data.desc}</p>
      
      {data.action && (
        <Button onClick={onAction} className="mt-lg px-xl">
          {data.action}
        </Button>
      )}
    </div>
  );
};
