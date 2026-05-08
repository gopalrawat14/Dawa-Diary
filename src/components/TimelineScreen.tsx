import React, { useState } from 'react';
import { Calendar, Search, Plus } from 'lucide-react';
import { TimelineRecordCard } from './TimelineRecordCard';
import { Button } from './Button';
import './TimelineScreen.css';

interface TimelineScreenProps {
  onUploadClick: () => void;
  onRecordClick: (id: string) => void;
  onSearchClick?: () => void;
}

const FILTERS = [
  { id: 'all', label: 'Sab kuch (All)' },
  { id: 'prescription', label: '💊 Prescriptions' },
  { id: 'lab', label: '🔬 Lab Reports' },
  { id: 'discharge', label: '🏥 Discharge' },
  { id: 'imaging', label: '📷 Imaging' },
  { id: 'vaccine', label: '💉 Vaccines' }
];

export const TimelineScreen: React.FC<TimelineScreenProps> = ({ onUploadClick, onRecordClick, onSearchClick }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hasRecords] = useState(true); // Toggle for empty state

  return (
    <div className="timeline-screen">
      {/* Header Area */}
      <div className="ts-header">
        <div className="ts-title-row">
          <div>
            <h1 className="ts-title">Aapki Health Story</h1>
            <p className="ts-subtitle">Jab se aapne records add kiye</p>
          </div>
          <div className="ts-icon-btn">
            <Calendar size={24} color="var(--color-primary)" />
          </div>
        </div>

        <div className="ts-stats-bar">
          <div className="ts-stat"><strong>12</strong> Records</div>
          <div className="ts-stat-divider"></div>
          <div className="ts-stat"><strong>4</strong> Doctors</div>
          <div className="ts-stat-divider"></div>
          <div className="ts-stat"><strong>2</strong> Years</div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="ts-filter-scroll">
        {FILTERS.map(f => (
          <button 
            key={f.id}
            className={`ts-filter-chip ${activeFilter === f.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="ts-search-container">
        <div className="search-bar" onClick={onSearchClick}>
          <Search size={20} color="#94A3B8" />
          <input type="text" placeholder="Dhundho... dawaai, doctor, bimari" readOnly />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="ts-content">
        {!hasRecords ? (
          <div className="ts-empty-state">
            <img src="/assets/empty_shelf.png" alt="Empty Shelf" className="empty-img" />
            <h3 className="empty-title">Abhi tak koi record nahi</h3>
            <p className="empty-desc">Pehla document add karein</p>
            <Button onClick={onUploadClick}>Pehla document add karein</Button>
          </div>
        ) : (
          <div className="ts-records">
        
        {/* 2025 Section */}
        <div className="ts-year-header">2025</div>
        <div className="ts-month-header">March 2025</div>
        
        <TimelineRecordCard 
          typeBadge="Prescription"
          date="15 March 2025"
          doctorOrHospital="Apollo Hospital"
          diagnosis="Dr. Anita Sharma"
          chips={['Metformin 500mg', 'Telmisartan 40mg']}
          dotColor="blue"
          onClick={() => onRecordClick('rec-001')}
        />

        <div className="ts-month-header">February 2025</div>

        <TimelineRecordCard 
          typeBadge="Lab Report"
          date="28 Feb 2025"
          doctorOrHospital="Thyrocare Labs"
          diagnosis="Thyrocare Lab Report"
          chips={['HbA1c: 7.2%', 'Fasting Sugar: 118']}
          dotColor="purple"
          onClick={() => onRecordClick('rec-002')}
        />

        <div className="ts-month-header">January 2025</div>

        <TimelineRecordCard 
          typeBadge="Prescription"
          date="10 Jan 2025"
          doctorOrHospital="City Clinic"
          diagnosis="Dr. Suresh Patel"
          chips={['Amlodipine 5mg']}
          dotColor="blue"
          onClick={() => onRecordClick('rec-003')}
        />

        {/* 2024 Section */}
        <div className="ts-year-header mt-lg">2024</div>
        <div className="ts-month-header">December 2024</div>

        <TimelineRecordCard 
          typeBadge="Discharge"
          date="12 Dec 2024"
          doctorOrHospital="Fortis Hospital"
          diagnosis="Fortis Hospital Discharge"
          chips={['Hypertension Management']}
          dotColor="orange"
          onClick={() => onRecordClick('rec-004')}
        />

        <div className="ts-month-header">November 2024</div>

        <TimelineRecordCard 
          typeBadge="Lab Report"
          date="05 Nov 2024"
          doctorOrHospital="Lal PathLabs"
          diagnosis="Routine Blood Work"
          chips={['Cholesterol Normal', 'Vitamin D Low']}
          dotColor="purple"
          onClick={() => onRecordClick('rec-005')}
        />

      </div>
        )}
      </div>

      {/* Floating Action Button */}
      <button className="ts-fab" onClick={onUploadClick}>
        <Plus size={32} color="white" />
      </button>
      
      {/* Spacer for BottomNav */}
      <div className="ts-bottom-spacer"></div>
    </div>
  );
};
