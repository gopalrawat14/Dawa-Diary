import React from 'react';
import './TimelineItem.css';

interface TimelineItemProps {
  title: string;
  date: string;
  description?: string;
  isLast?: boolean;
  children?: React.ReactNode;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  date,
  description,
  isLast = false,
  children
}) => {
  return (
    <div className={`timeline-item ${isLast ? 'timeline-item-last' : ''}`}>
      <div className="timeline-indicator">
        <div className="timeline-dot"></div>
        {!isLast && <div className="timeline-line"></div>}
      </div>
      <div className="timeline-content">
        <div className="timeline-header">
          <h4 className="timeline-title">{title}</h4>
          <span className="timeline-date">{date}</span>
        </div>
        {description && <p className="timeline-desc">{description}</p>}
        {children && <div className="timeline-children">{children}</div>}
      </div>
    </div>
  );
};
