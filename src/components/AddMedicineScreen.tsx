import React, { useState } from 'react';
import { ArrowLeft, Search, Link as LinkIcon, Calendar } from 'lucide-react';
import { Button } from './Button';
import './AddMedicineScreen.css';

interface AddMedicineScreenProps {
  onBack: () => void;
  onSave: () => void;
}

const COLORS = ['#1B6CA8', '#2ECC71', '#D97706', '#EF4444', '#8B5CF6', '#EC4899'];

export const AddMedicineScreen: React.FC<AddMedicineScreenProps> = ({ onBack, onSave }) => {
  const [activeFreq, setActiveFreq] = useState('Daily');
  const [activeFood, setActiveFood] = useState('After');
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [timeToggle, setTimeToggle] = useState({ morning: true, afternoon: false, night: true });

  return (
    <div className="add-med-overlay">
      <div className="add-med-header">
        <button className="icon-btn" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <h2>Nayi Dawaai Add Karein</h2>
        <div style={{ width: 40 }}></div>
      </div>

      <div className="add-med-content">
        
        {/* Name Search */}
        <div className="input-group">
          <label>Dawaai ka naam</label>
          <div className="search-input-wrapper">
            <Search size={18} color="#94A3B8" className="search-icon" />
            <input type="text" placeholder="Dhoondhein (e.g., Paracetamol)" className="form-input with-icon" />
          </div>
        </div>

        {/* Dose */}
        <div className="input-group">
          <label>Dose</label>
          <input type="text" placeholder="e.g., 500mg, 1 tablet" className="form-input" />
        </div>

        {/* Frequency */}
        <div className="input-group">
          <label>Kitni baar leni hai?</label>
          <div className="chip-selector">
            {['Daily', 'Every X Hours', 'As Needed'].map(opt => (
              <button 
                key={opt}
                className={`select-chip ${activeFreq === opt ? 'active' : ''}`}
                onClick={() => setActiveFreq(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Timing visually */}
        <div className="input-group timing-group">
          <label>Samay (Time)</label>
          <div className="time-toggles">
            <button 
              className={`time-toggle-btn ${timeToggle.morning ? 'active' : ''}`}
              onClick={() => setTimeToggle(prev => ({...prev, morning: !prev.morning}))}
            >
              <div className="time-icon">🌅</div>
              <span>Subah</span>
            </button>
            <button 
              className={`time-toggle-btn ${timeToggle.afternoon ? 'active' : ''}`}
              onClick={() => setTimeToggle(prev => ({...prev, afternoon: !prev.afternoon}))}
            >
              <div className="time-icon">☀️</div>
              <span>Dopehar</span>
            </button>
            <button 
              className={`time-toggle-btn ${timeToggle.night ? 'active' : ''}`}
              onClick={() => setTimeToggle(prev => ({...prev, night: !prev.night}))}
            >
              <div className="time-icon">🌙</div>
              <span>Shaam</span>
            </button>
          </div>
        </div>

        {/* Food Instructions */}
        <div className="input-group">
          <label>Khaana khane ke...</label>
          <div className="chip-selector">
            {['Before', 'With Food', 'After'].map(opt => (
              <button 
                key={opt}
                className={`select-chip ${activeFood === opt ? 'active' : ''}`}
                onClick={() => setActiveFood(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Duration */}
        <div className="input-group">
          <label>Kab tak leni hai?</label>
          <div className="duration-inputs">
            <div className="date-input-wrapper">
              <Calendar size={16} color="#6B7280" />
              <input type="text" placeholder="Start Date" defaultValue="Today" className="date-input" />
            </div>
            <span className="to-text">to</span>
            <div className="date-input-wrapper">
              <Calendar size={16} color="#6B7280" />
              <input type="text" placeholder="End Date" className="date-input" />
            </div>
          </div>
          <div className="ongoing-checkbox">
            <input type="checkbox" id="ongoing" />
            <label htmlFor="ongoing">Ongoing (Jab tak doctor na bolein)</label>
          </div>
        </div>

        {/* Doctor Link */}
        <div className="input-group">
          <label>Kisi record se judi hai?</label>
          <button className="link-record-btn">
            <LinkIcon size={16} /> Select Prescription or Doctor
          </button>
        </div>

        {/* Color Picker */}
        <div className="input-group mb-xl">
          <label>Pehchaan ke liye color chunein</label>
          <div className="color-picker">
            {COLORS.map(c => (
              <button 
                key={c} 
                className={`color-dot ${selectedColor === c ? 'selected' : ''}`}
                style={{ backgroundColor: c }}
                onClick={() => setSelectedColor(c)}
              >
                {selectedColor === c && <div className="color-inner-dot"></div>}
              </button>
            ))}
          </div>
        </div>

      </div>

      <div className="add-med-bottom-action">
        <Button className="w-full" onClick={onSave}>Save Dawaai</Button>
      </div>
    </div>
  );
};
