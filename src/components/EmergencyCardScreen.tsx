import React from 'react';
import { ArrowLeft, Share2, Download, Plus, HeartPulse, ShieldAlert, Phone } from 'lucide-react';
import { Button } from './Button';
import './EmergencyCardScreen.css';

interface EmergencyCardScreenProps {
  onBack: () => void;
}

export const EmergencyCardScreen: React.FC<EmergencyCardScreenProps> = ({ onBack }) => {
  return (
    <div className="emergency-screen-overlay">
      <div className="ec-header">
        <button className="icon-btn" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="ec-header-title">
          <ShieldAlert size={20} color="#EF4444" />
          <h2>Emergency Card</h2>
        </div>
        <div style={{ width: 40 }}></div>
      </div>

      <div className="ec-content">
        <div className="ec-instructions">
          <h3>Doctor ko turant dikhao</h3>
          <p>Internet band ho toh bhi kaam karega</p>
        </div>

        {/* The Physical Card Design */}
        <div className="ec-physical-card">
          <div className="ec-card-top-accent"></div>
          
          <div className="ec-card-header">
            <div className="ec-photo-placeholder">
              <UserPlaceholder />
            </div>
            <div className="ec-patient-identity">
              <h1>Rajesh Sharma</h1>
              <p>52 Years • Male</p>
            </div>
            <div className="ec-blood-group">
              <span className="ec-bg-label">Blood</span>
              <span className="ec-bg-value">B+</span>
            </div>
          </div>

          <div className="ec-card-body">
            
            <div className="ec-info-section">
              <div className="ec-section-title text-red">
                <ShieldAlert size={14} /> Critical Allergies
              </div>
              <div className="ec-chips-container">
                <span className="ec-chip red">Penicillin</span>
                <span className="ec-chip red">Aspirin</span>
              </div>
            </div>

            <div className="ec-info-section">
              <div className="ec-section-title text-orange">
                <HeartPulse size={14} /> Medical Conditions
              </div>
              <div className="ec-chips-container">
                <span className="ec-chip orange">Diabetes (Type 2)</span>
                <span className="ec-chip orange">Hypertension</span>
              </div>
            </div>

            <div className="ec-info-section">
              <div className="ec-section-title">
                <span className="text-xl">💊</span> Critical Medicines
              </div>
              <ul className="ec-medicine-list">
                <li><strong>Metformin 500mg</strong> (Twice daily)</li>
                <li><strong>Amlodipine 5mg</strong> (Morning)</li>
                <li><strong>Atorvastatin 20mg</strong> (Night)</li>
              </ul>
            </div>

            <div className="ec-contact-section">
              <div className="ec-section-title">
                <Phone size={14} /> Emergency Contact
              </div>
              <div className="ec-contact-details">
                <strong>Sunita Sharma (Wife)</strong>
                <a href="tel:+919876543210" className="ec-phone-number">+91 98765 43210</a>
              </div>
            </div>

          </div>
          
          <div className="ec-card-footer">
            <span>Powered by Dawa Diary</span>
          </div>
        </div>

        <div className="ec-offline-note">
          Yeh card internet ke bina bhi kaam karta hai. Ise apni home screen pe add kar lo.
        </div>

        <div className="ec-actions">
          <Button className="w-full mb-md">
            <Plus size={18} /> Add to Home Screen
          </Button>
          
          <div className="ec-secondary-actions">
            <button className="ec-action-btn">
              <Share2 size={20} /> Share as Image
            </button>
            <button className="ec-action-btn">
              <Download size={20} /> Save PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// SVG Placeholder for Patient Photo
const UserPlaceholder = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" color="#94A3B8">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);
