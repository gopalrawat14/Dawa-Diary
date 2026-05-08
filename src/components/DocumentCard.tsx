import React from 'react';
import { Card } from './Card';
import './DocumentCard.css';

interface DocumentCardProps {
  title: string;
  date: string;
  typeBadge: string;
  thumbnailUrl?: string;
  icon?: React.ReactNode;
  doctorOrLab?: string;
  borderColor?: 'blue' | 'purple' | 'orange';
}

export const DocumentCard: React.FC<DocumentCardProps> = ({
  title,
  date,
  typeBadge,
  thumbnailUrl,
  icon,
  doctorOrLab,
  borderColor
}) => {
  return (
    <Card padding="md" className={`doc-card ${borderColor ? `border-${borderColor}` : ''}`}>
      <div className="doc-card-thumb">
        {thumbnailUrl ? (
          <img src={thumbnailUrl} alt={title} />
        ) : (
          <div className="doc-card-icon-placeholder">{icon}</div>
        )}
      </div>
      <div className="doc-card-content">
        <h3 className="doc-card-title">{title}</h3>
        <p className="doc-card-date">
          {date} {doctorOrLab && `• ${doctorOrLab}`}
        </p>
        <span className="doc-card-badge">{typeBadge}</span>
      </div>
    </Card>
  );
};
