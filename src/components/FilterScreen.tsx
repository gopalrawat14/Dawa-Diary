import React from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';
import './FilterScreen.css';

interface FilterScreenProps {
  onClose: () => void;
  onApply: () => void;
}

export const FilterScreen: React.FC<FilterScreenProps> = ({ onClose, onApply }) => {
  return (
    <div className="filter-overlay">
      <div className="filter-sheet">
        <div className="filter-header">
          <h3>Filters</h3>
          <button className="icon-btn" onClick={onClose}><X size={24} /></button>
        </div>

        <div className="filter-body">
          <div className="filter-section">
            <label>Date Range</label>
            <div className="date-range-row">
              <input type="date" className="filter-input" />
              <span>to</span>
              <input type="date" className="filter-input" />
            </div>
          </div>

          <div className="filter-section">
            <label>Document Types</label>
            <div className="checkbox-list">
              <label className="checkbox-label">
                <input type="checkbox" defaultChecked /> Prescriptions
              </label>
              <label className="checkbox-label">
                <input type="checkbox" defaultChecked /> Lab Reports
              </label>
              <label className="checkbox-label">
                <input type="checkbox" /> Discharge Summaries
              </label>
              <label className="checkbox-label">
                <input type="checkbox" /> Imaging (X-Ray/Scan)
              </label>
            </div>
          </div>

          <div className="filter-section">
            <label>Doctor Name</label>
            <input type="text" className="filter-input w-full" placeholder="e.g. Dr. Sharma" />
          </div>
        </div>

        <div className="filter-footer">
          <button className="text-btn text-secondary font-bold" onClick={onClose}>Reset</button>
          <Button onClick={onApply} className="px-xl">Apply Filters</Button>
        </div>
      </div>
    </div>
  );
};
