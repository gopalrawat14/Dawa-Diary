import React, { useState } from 'react';
import { ArrowLeft, User, FileText, Check } from 'lucide-react';
import { Card } from './Card';
import { Button } from './Button';
import './ShareScreen.css';

interface ShareScreenProps {
  onBack: () => void;
  onGenerate: () => void;
}

export const ShareScreen: React.FC<ShareScreenProps> = ({ onBack, onGenerate }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedTimeRange, setSelectedTimeRange] = useState('6 Months');

  const [toggles, setToggles] = useState({
    complete: false,
    lastVisit: true,
    medicines: true,
    labReports: true,
    allergies: true
  });

  const handleToggle = (key: keyof typeof toggles) => {
    if (key === 'complete') {
      const newVal = !toggles.complete;
      setToggles({
        complete: newVal,
        lastVisit: newVal,
        medicines: newVal,
        labReports: newVal,
        allergies: newVal
      });
    } else {
      setToggles(prev => ({ ...prev, [key]: !prev[key], complete: false }));
    }
  };

  const handleGenerateClick = () => {
    setIsGenerating(true);
    setTimeout(() => {
      onGenerate();
    }, 1500);
  };

  return (
    <div className="share-screen-overlay">
      <div className="share-header">
        <button className="icon-btn" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <h2>Aapka record share karein</h2>
        <div style={{ width: 40 }}></div> {/* spacer */}
      </div>

      <div className="share-content">
        {/* Patient Summary Card */}
        <Card padding="md" className="patient-mini-card mb-lg">
          <div className="pm-avatar"><User size={24} /></div>
          <div className="pm-info">
            <h3>Rajesh Sharma</h3>
            <p>52 yrs • Male • <span className="text-red font-bold">B+</span></p>
          </div>
        </Card>

        {/* Content Selector */}
        <section className="share-section">
          <h3 className="section-title">Kya share karna hai?</h3>
          <div className="toggle-list">
            
            <div className="toggle-item" onClick={() => handleToggle('complete')}>
              <div className="toggle-label">
                <strong>Complete History</strong>
                <span>Poori history</span>
              </div>
              <div className={`switch ${toggles.complete ? 'active' : ''}`}>
                <div className="switch-knob"></div>
              </div>
            </div>

            <div className="toggle-divider"></div>

            <div className="toggle-item" onClick={() => handleToggle('lastVisit')}>
              <div className="toggle-label">
                <strong>Last Visit Summary</strong>
              </div>
              <div className={`switch ${toggles.lastVisit ? 'active' : ''}`}>
                <div className="switch-knob"></div>
              </div>
            </div>

            <div className="toggle-item" onClick={() => handleToggle('medicines')}>
              <div className="toggle-label">
                <strong>Current Medicines</strong>
              </div>
              <div className={`switch ${toggles.medicines ? 'active' : ''}`}>
                <div className="switch-knob"></div>
              </div>
            </div>

            <div className="toggle-item" onClick={() => handleToggle('labReports')}>
              <div className="toggle-label">
                <strong>Lab Reports</strong>
              </div>
              <div className={`switch ${toggles.labReports ? 'active' : ''}`}>
                <div className="switch-knob"></div>
              </div>
            </div>

            <div className="toggle-item" onClick={() => handleToggle('allergies')}>
              <div className="toggle-label">
                <strong>Allergies & Conditions</strong>
              </div>
              <div className={`switch ${toggles.allergies ? 'active' : ''}`}>
                <div className="switch-knob"></div>
              </div>
            </div>

          </div>
        </section>

        {/* Time Range Selector */}
        <section className="share-section">
          <h3 className="section-title">Kitne time ka?</h3>
          <div className="time-chips-container">
            {['Last Visit', '3 Months', '6 Months', '1 Year', 'All Time'].map(range => (
              <button 
                key={range}
                className={`time-chip ${selectedTimeRange === range ? 'active' : ''}`}
                onClick={() => setSelectedTimeRange(range)}
              >
                {range}
              </button>
            ))}
          </div>
        </section>

        {/* Share Format */}
        <section className="share-section">
          <h3 className="section-title">Kaise share karna hai?</h3>
          <div className="format-options">
            <div className="format-option selected">
              <div className="format-icon qr">
                <div className="qr-squares">
                  <div></div><div></div><div></div><div></div>
                </div>
              </div>
              <div className="format-details">
                <strong>QR Code</strong>
                <span>Doctor scans to view</span>
              </div>
              <div className="check-circle"><Check size={14} color="white" /></div>
            </div>
            
            <div className="format-option">
              <div className="format-icon pdf">
                <FileText size={20} color="white" />
              </div>
              <div className="format-details">
                <strong>PDF Summary</strong>
                <span>Download as document</span>
              </div>
              <div className="radio-circle"></div>
            </div>
          </div>
        </section>
      </div>

      <div className="share-bottom-action">
        <Button 
          className="w-full" 
          onClick={handleGenerateClick}
          disabled={isGenerating}
        >
          {isGenerating ? 'Generating...' : 'QR Code banao'}
        </Button>
      </div>
    </div>
  );
};
