import React, { useState } from 'react';
import { User, Camera, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { useAppContext } from '../context/AppContext';
import './ProfileSetup.css';

export const ProfileSetup: React.FC = () => {
  const { userName, setUserName, gender, setGender } = useAppContext();
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [isFinishing, setIsFinishing] = useState(false);

  // Form State
  const [bloodGroup, setBloodGroup] = useState('');
  const [dob, setDob] = useState({ day: '', month: '', year: '' });

  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const years = Array.from({ length: 100 }, (_, i) => (new Date().getFullYear() - i).toString());
  
  const finishSetup = () => {
    setIsFinishing(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000); // show checkmark animation for 2 seconds
  };

  const renderStep1 = () => (
    <div className="setup-step">
      <div className="avatar-section">
        <div className="avatar-placeholder">
          <User size={40} color="#6B7280" />
          <div className="avatar-camera-btn">
            <Camera size={16} color="white" />
          </div>
        </div>
        <h2 className="setup-heading">Aapka naam kya hai?</h2>
      </div>

      <div className="form-group">
        <input 
          type="text" 
          className="setup-input-large" 
          placeholder="Aapka pura naam"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label className="setup-label">Gender</label>
        <div className="pill-group">
          {['Male', 'Female', 'Other'].map(g => (
            <button 
              key={g} 
              className={`pill-btn ${gender === g ? 'active' : ''}`}
              onClick={() => setGender(g)}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label className="setup-label">Date of Birth</label>
        <div className="dob-group">
          <select 
            className="setup-select" 
            value={dob.day} 
            onChange={(e) => setDob({ ...dob, day: e.target.value })}
          >
            <option value="">Day</option>
            {days.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
          <select 
            className="setup-select" 
            value={dob.month} 
            onChange={(e) => setDob({ ...dob, month: e.target.value })}
          >
            <option value="">Month</option>
            {months.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
          <select 
            className="setup-select" 
            value={dob.year} 
            onChange={(e) => setDob({ ...dob, year: e.target.value })}
          >
            <option value="">Year</option>
            {years.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
        </div>
      </div>

      <div className="setup-footer">
        <Button onClick={() => setStep(2)}>Aage badein (Continue)</Button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="setup-step">
      <h2 className="setup-heading text-left">Thodi si sehat ki jaankari</h2>
      <p className="setup-subtext">This helps us personalize your experience.</p>

      <div className="form-group">
        <label className="setup-label">Blood Group</label>
        <div className="blood-group-grid">
          {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-', 'Pata nahi'].map(bg => (
            <button 
              key={bg} 
              className={`pill-btn ${bloodGroup === bg ? 'active' : ''}`}
              onClick={() => setBloodGroup(bg)}
            >
              {bg}
            </button>
          ))}
        </div>
      </div>

      <div className="form-group flex-row-between">
        <label className="setup-label">Height</label>
        <div className="input-with-unit">
          <input type="number" placeholder="170" className="setup-input-small" />
          <span className="unit-toggle">cm | ft</span>
        </div>
      </div>
      <input type="range" className="setup-slider" />

      <div className="form-group flex-row-between mt-4">
        <label className="setup-label">Weight</label>
        <div className="input-with-unit">
          <input type="number" placeholder="65" className="setup-input-small" />
          <span className="unit-toggle">kg | lbs</span>
        </div>
      </div>
      <input type="range" className="setup-slider" />

      <div className="form-group mt-4">
        <label className="setup-label">Known Allergies</label>
        <div className="chip-input-container">
          <input type="text" placeholder="e.g. Penicillin, Dust" className="setup-input" />
        </div>
      </div>

      <div className="form-group">
        <label className="setup-label">Chronic Conditions</label>
        <div className="chip-input-container">
          <input type="text" placeholder="e.g. Diabetes, Asthma" className="setup-input" />
        </div>
      </div>

      <div className="setup-footer split-footer">
        <Button variant="ghost" onClick={() => setStep(3)}>Skip karein</Button>
        <Button onClick={() => setStep(3)}>Continue</Button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="setup-step text-center">
      <div className="family-illustration">
        <img src="/assets/family_silhouette.png" alt="Family" />
      </div>
      
      <h2 className="setup-heading">Kya aap apne parivaar ke records bhi rakhna chahte hain?</h2>
      <p className="setup-subtext">Maa, papa, bachche — sabke records ek jagah</p>

      <div className="family-cards-container">
        <div className="family-option-card" onClick={finishSetup}>
          <h3>Abhi add karein</h3>
          <p>Add family members now</p>
        </div>
        <div className="family-option-card ghost" onClick={finishSetup}>
          <h3>Haan, baad mein karunga</h3>
          <p>Yes, I'll add them later</p>
        </div>
      </div>
    </div>
  );

  if (isFinishing) {
    return (
      <div className="setup-success-screen">
        <div className="success-icon-wrapper">
          <CheckCircle size={80} color="white" className="success-icon" />
        </div>
        <h1 className="success-text">Dawa Diary ready hai!</h1>
      </div>
    );
  }

  return (
    <div className="profile-setup-container">
      <div className="progress-bar-container">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>
      
      <div className="setup-content">
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
      </div>
    </div>
  );
};
