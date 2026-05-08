import React from 'react';
import { Button } from './Button';
import { AlertTriangle, FileQuestion, WifiOff, HardDrive } from 'lucide-react';
import './UIStates.css';

export type ErrorStateType = 'upload' | 'ai' | 'network' | 'storage';

interface ErrorStateProps {
  type: ErrorStateType;
  onRetry?: () => void;
  onSecondaryAction?: () => void;
}

const CONFIG = {
  upload: {
    icon: <AlertTriangle size={48} strokeWidth={1.5} color="#EF4444" />,
    title: 'Photo acchi nahi aai',
    desc: 'Thodi zyada roshni mein dobara try karein',
    primary: 'Dobara Try Karein',
    secondary: ''
  },
  ai: {
    icon: <FileQuestion size={48} strokeWidth={1.5} color="#D97706" />,
    title: 'Document samajh nahi aaya',
    desc: 'Yeh document alag lag raha hai. Manually info fill karein?',
    primary: 'Dobara Try Karein',
    secondary: 'Manually Fill Karein'
  },
  network: {
    icon: <WifiOff size={48} strokeWidth={1.5} color="#64748B" />,
    title: 'Internet nahi hai',
    desc: 'Koi baat nahi! Aapke records phone pe hain, dekh sakte hain',
    primary: '',
    secondary: ''
  },
  storage: {
    icon: <HardDrive size={48} strokeWidth={1.5} color="#EF4444" />,
    title: 'Phone ka space khatam ho raha hai',
    desc: 'Purane documents archive karein',
    primary: 'Storage Clean Karein',
    secondary: ''
  }
};

export const ErrorState: React.FC<ErrorStateProps> = ({ type, onRetry, onSecondaryAction }) => {
  const data = CONFIG[type];

  return (
    <div className="error-state-container">
      <div className={`error-illustration ${type}`}>
        <div className="illustration-bg"></div>
        {data.icon}
      </div>
      <h3 className="error-title">{data.title}</h3>
      <p className="error-desc">{data.desc}</p>
      
      <div className="error-actions mt-lg">
        {data.primary && (
          <Button onClick={onRetry} className="w-full">
            {data.primary}
          </Button>
        )}
        
        {data.secondary && (
          <button className="error-secondary-btn" onClick={onSecondaryAction}>
            {data.secondary}
          </button>
        )}
      </div>
    </div>
  );
};
