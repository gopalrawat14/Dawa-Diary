import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Card } from './Card';
import './TimelineRecordCard.css';

interface TimelineRecordCardProps {
  typeBadge: string;
  date: string;
  doctorOrHospital: string;
  diagnosis: string;
  chips: string[];
  dotColor?: 'blue' | 'purple' | 'orange' | 'green';
  onClick?: () => void;
}

export const TimelineRecordCard: React.FC<TimelineRecordCardProps> = ({
  typeBadge,
  date,
  doctorOrHospital,
  diagnosis,
  chips,
  dotColor = 'blue',
  onClick
}) => {
  return (
    <div className="timeline-item-wrapper">
      <div className="timeline-spine">
        <div className={`timeline-dot bg-${dotColor}`}></div>
        <div className="timeline-line"></div>
      </div>
      
      <div className="timeline-card-content">
        <Card padding="md" className="tl-card" onClick={onClick}>
          <div className="tl-card-header">
            <span className={`tl-badge color-${dotColor}`}>{typeBadge}</span>
            <span className="tl-date">{date}</span>
          </div>
          
          <p className="tl-doctor">{doctorOrHospital}</p>
          <p className="tl-diagnosis">{diagnosis}</p>
          
          <div className="tl-chips">
            {chips.map((chip, i) => (
              <span key={i} className="tl-chip">{chip}</span>
            ))}
          </div>
          
          <button className="tl-link">
            Poora dekho <ChevronRight size={14} />
          </button>
        </Card>
      </div>
    </div>
  );
};
