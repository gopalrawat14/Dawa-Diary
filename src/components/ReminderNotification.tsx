import React, { useState, useEffect } from 'react';
import { Pill, Check, Clock } from 'lucide-react';
import './ReminderNotification.css';

interface ReminderNotificationProps {
  onDismiss: () => void;
}

export const ReminderNotification: React.FC<ReminderNotificationProps> = ({ onDismiss }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Slight delay to allow for the slide-down animation to feel organic
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleAction = () => {
    setIsVisible(false);
    setTimeout(onDismiss, 300); // Wait for slide-up animation
  };

  return (
    <div className={`reminder-overlay-container ${isVisible ? 'visible' : ''}`}>
      <div className="reminder-toast">
        <div className="toast-header">
          <div className="toast-icon">
            <Pill size={16} color="white" />
          </div>
          <span className="toast-app-name">Dawa Diary</span>
          <span className="toast-time">Now</span>
        </div>
        
        <div className="toast-body">
          <h4>💊 Dawaai lene ka waqt!</h4>
          <p><strong>Metformin 500mg</strong> — Khaane ke baad leni hai</p>
        </div>
        
        <div className="toast-actions">
          <button className="toast-btn primary" onClick={handleAction}>
            <Check size={14} /> Le li
          </button>
          <button className="toast-btn secondary" onClick={handleAction}>
            <Clock size={14} /> 30 min baad
          </button>
        </div>
      </div>
    </div>
  );
};
