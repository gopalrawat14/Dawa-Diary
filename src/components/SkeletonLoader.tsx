import React from 'react';
import './SkeletonLoader.css';

interface SkeletonProps {
  type: 'card' | 'list' | 'profile' | 'metric';
  count?: number;
}

export const SkeletonLoader: React.FC<SkeletonProps> = ({ type, count = 1 }) => {
  const renderCard = (key: number) => (
    <div key={key} className="skeleton-card">
      <div className="skel-row">
        <div className="skel-avatar"></div>
        <div className="skel-col">
          <div className="skel-text-main"></div>
          <div className="skel-text-sub"></div>
        </div>
      </div>
      <div className="skel-text-long mt"></div>
    </div>
  );

  const renderList = (key: number) => (
    <div key={key} className="skeleton-list-item">
      <div className="skel-icon-box"></div>
      <div className="skel-col">
        <div className="skel-text-main"></div>
        <div className="skel-text-short"></div>
      </div>
    </div>
  );

  const renderMetric = (key: number) => (
    <div key={key} className="skeleton-metric">
      <div className="skel-text-short"></div>
      <div className="skel-text-large mt"></div>
      <div className="skel-text-sub mt"></div>
    </div>
  );

  const items = Array.from({ length: count }, (_, i) => i);

  return (
    <div className="skeleton-container">
      {type === 'card' && items.map(renderCard)}
      {type === 'list' && items.map(renderList)}
      {type === 'metric' && <div className="skeleton-grid">{items.map(renderMetric)}</div>}
    </div>
  );
};
