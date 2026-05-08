import React from 'react';
import './LoadingPulse.css';

interface LoadingPulseProps {
  type?: 'card' | 'text' | 'avatar';
}

export const LoadingPulse: React.FC<LoadingPulseProps> = ({ type = 'text' }) => {
  return (
    <div className={`loading-pulse pulse-${type}`}></div>
  );
};

export const LoadingPulseList: React.FC = () => {
  return (
    <div className="pulse-list">
      <div className="pulse-list-item">
        <LoadingPulse type="avatar" />
        <div className="pulse-list-content">
          <LoadingPulse type="text" />
          <LoadingPulse type="text" />
        </div>
      </div>
      <div className="pulse-list-item">
        <LoadingPulse type="avatar" />
        <div className="pulse-list-content">
          <LoadingPulse type="text" />
          <LoadingPulse type="text" />
        </div>
      </div>
    </div>
  );
};
