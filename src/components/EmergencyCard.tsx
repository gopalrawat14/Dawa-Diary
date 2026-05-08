import React from 'react';
import { ChevronRight } from 'lucide-react';
import './EmergencyCard.css';

interface EmergencyCardProps {
  bloodGroup?: string;
  allergies?: string[];
  conditions?: string[];
  onExpand?: () => void;
}

export const EmergencyCard: React.FC<EmergencyCardProps> = ({ 
  bloodGroup = 'B+', 
  allergies = ['Peanuts'], 
  conditions = [], 
  onExpand 
}) => {
  return (
    <div className="emergency-card">
      <div className="emergency-header">
        <span className="emergency-label">🚨 Emergency Card</span>
        <button className="emergency-link" onClick={onExpand}>
          Poora dekho <ChevronRight size={14} />
        </button>
      </div>
      
      <div className="emergency-content">
        <div className="em-pill bg-group">{bloodGroup}</div>
        {allergies.map((allergy, i) => (
          <div key={`alg-${i}`} className="em-pill allergy">{allergy}</div>
        ))}
        {conditions.map((cond, i) => (
          <div key={`cond-${i}`} className="em-pill med">{cond}</div>
        ))}
      </div>
    </div>
  );
};
