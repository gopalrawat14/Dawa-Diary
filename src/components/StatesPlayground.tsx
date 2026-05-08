import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { EmptyState } from './EmptyState';
import { ErrorState } from './ErrorState';
import { SkeletonLoader } from './SkeletonLoader';
import './StatesPlayground.css';

interface StatesPlaygroundProps {
  onBack: () => void;
}

export const StatesPlayground: React.FC<StatesPlaygroundProps> = ({ onBack }) => {
  return (
    <div className="playground-overlay">
      <div className="playground-header">
        <button className="icon-btn" onClick={onBack}><ArrowLeft size={24} /></button>
        <h2>UI States Playground</h2>
        <div style={{ width: 40 }}></div>
      </div>

      <div className="playground-content">
        <div className="playground-banner">
          This is a developer view to showcase all Empty, Error, and Loading states without needing to trigger them naturally.
        </div>

        <h3 className="playground-section-title">Loading Skeletons</h3>
        <div className="playground-section">
          <h4>Card Skeleton (e.g. Dashboard)</h4>
          <SkeletonLoader type="card" count={1} />
          
          <h4 className="mt-lg">List Skeleton (e.g. Search Results)</h4>
          <SkeletonLoader type="list" count={2} />

          <h4 className="mt-lg">Grid Skeleton (e.g. Metrics)</h4>
          <SkeletonLoader type="metric" count={2} />
        </div>

        <h3 className="playground-section-title">Empty States</h3>
        <div className="playground-section">
          <h4>No Records Yet</h4>
          <div className="state-box"><EmptyState type="records" /></div>

          <h4 className="mt-lg">No Search Results</h4>
          <div className="state-box"><EmptyState type="search" /></div>

          <h4 className="mt-lg">No Medicines</h4>
          <div className="state-box"><EmptyState type="medicines" /></div>

          <h4 className="mt-lg">No Family Members</h4>
          <div className="state-box"><EmptyState type="family" /></div>
        </div>

        <h3 className="playground-section-title">Error States</h3>
        <div className="playground-section">
          <h4>Upload Failed</h4>
          <div className="state-box"><ErrorState type="upload" /></div>

          <h4 className="mt-lg">AI Extraction Failed</h4>
          <div className="state-box"><ErrorState type="ai" /></div>

          <h4 className="mt-lg">No Internet Connection</h4>
          <div className="state-box"><ErrorState type="network" /></div>

          <h4 className="mt-lg">Storage Full</h4>
          <div className="state-box"><ErrorState type="storage" /></div>
        </div>

      </div>
    </div>
  );
};
