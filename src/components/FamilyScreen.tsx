import React, { useState } from 'react';
import { User, Plus, RefreshCw, X, Camera } from 'lucide-react';
import { Card } from './Card';
import { Button } from './Button';
import './FamilyScreen.css';

export const FamilyScreen: React.FC = () => {
  const [showAddMember, setShowAddMember] = useState(false);

  return (
    <div className="family-screen">
      {/* Active Member Banner */}
      <div className="active-member-banner">
        <span>Abhi dekh rahe hain: <strong>Ramesh (Me)</strong></span>
      </div>

      <div className="family-content">
        <h2 className="fs-section-title">Mera Parivaar</h2>
        <p className="fs-subtitle">Sabke records ek hi app mein</p>

        {/* Family List */}
        <div className="family-list">
          
          <Card padding="md" className="family-card active-card">
            <div className="fc-header">
              <div className="fc-avatar me">
                <User size={32} />
              </div>
              <div className="fc-info">
                <h3>Ramesh Kumar</h3>
                <div className="fc-meta">
                  <span className="fc-badge self">Me</span>
                  <span className="fc-details">52 yrs • B+</span>
                </div>
              </div>
            </div>
            <div className="fc-stats">
              <div className="fc-stat"><strong>24</strong> Records</div>
              <div className="fc-stat"><strong>4</strong> Medicines</div>
            </div>
          </Card>

          <Card padding="md" className="family-card">
            <div className="fc-header">
              <div className="fc-avatar">
                <User size={32} />
              </div>
              <div className="fc-info">
                <h3>Sunita Sharma</h3>
                <div className="fc-meta">
                  <span className="fc-badge">Patni (Wife)</span>
                  <span className="fc-details">48 yrs • O+</span>
                </div>
              </div>
              <button className="fc-switch-btn">
                <RefreshCw size={14} /> Switch
              </button>
            </div>
            <div className="fc-stats">
              <div className="fc-stat"><strong>12</strong> Records</div>
              <div className="fc-stat"><strong>1</strong> Medicine</div>
            </div>
          </Card>

          <Card padding="md" className="family-card">
            <div className="fc-header">
              <div className="fc-avatar">
                <User size={32} />
              </div>
              <div className="fc-info">
                <h3>Rohan Sharma</h3>
                <div className="fc-meta">
                  <span className="fc-badge">Beta (Son)</span>
                  <span className="fc-details">22 yrs • B+</span>
                </div>
              </div>
              <button className="fc-switch-btn">
                <RefreshCw size={14} /> Switch
              </button>
            </div>
            <div className="fc-stats">
              <div className="fc-stat"><strong>3</strong> Records</div>
              <div className="fc-stat"><strong>0</strong> Medicines</div>
            </div>
          </Card>

        </div>

        {/* Add Member Button */}
        <button 
          className="add-member-card"
          onClick={() => setShowAddMember(true)}
        >
          <div className="amc-icon"><Plus size={24} /></div>
          <span>Parivaar member add karein</span>
        </button>

      </div>

      {/* Add Member Overlay */}
      {showAddMember && (
        <div className="add-member-overlay">
          <div className="add-member-sheet">
            <div className="am-sheet-header">
              <h3>Naya Member</h3>
              <button className="icon-btn" onClick={() => setShowAddMember(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="am-sheet-content">
              <div className="am-photo-upload">
                <div className="am-photo-circle">
                  <Camera size={24} color="#94A3B8" />
                </div>
                <span>Photo add karein</span>
              </div>

              <div className="input-group">
                <label>Naam (Name)</label>
                <input type="text" className="form-input" placeholder="e.g. Ramesh" />
              </div>

              <div className="input-group">
                <label>Rishta (Relationship)</label>
                <select className="form-input">
                  <option value="">Select relationship</option>
                  <option value="spouse">Patni / Pati (Spouse)</option>
                  <option value="parent">Maa / Papa (Parent)</option>
                  <option value="child">Beta / Beti (Child)</option>
                  <option value="sibling">Bhai / Behen (Sibling)</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="input-group">
                <label>Date of Birth</label>
                <input type="date" className="form-input" />
              </div>

              <Button className="w-full mt-md" onClick={() => setShowAddMember(false)}>Save Member</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
