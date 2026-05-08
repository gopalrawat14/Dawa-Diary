import React, { useState } from 'react';
import { ArrowLeft, Share2, MoreVertical, Maximize2, ShieldCheck, Copy, TrendingUp, Bell, FileText, Image as ImageIcon, Plus } from 'lucide-react';
import { Card } from './Card';
import { Button } from './Button';
import './RecordDetailScreen.css';

interface RecordDetailScreenProps {
  onBack: () => void;
}

export const RecordDetailScreen: React.FC<RecordDetailScreenProps> = ({ onBack }) => {
  const [imageExpanded, setImageExpanded] = useState(false);

  return (
    <div className="record-detail-screen">
      {/* Header */}
      <div className="rd-header">
        <div className="rd-header-left">
          <button className="icon-btn" onClick={onBack}>
            <ArrowLeft size={24} />
          </button>
          <div className="rd-header-title">
            <h1>Prescription</h1>
            <span className="rd-badge">Dr. Sharma</span>
          </div>
        </div>
        <div className="rd-header-right">
          <button className="icon-btn"><Share2 size={22} /></button>
          <button className="icon-btn"><MoreVertical size={22} /></button>
        </div>
      </div>

      <div className="rd-content">
        
        {/* Document Thumbnail */}
        <div className="rd-thumbnail-container" onClick={() => setImageExpanded(true)}>
          <img src="/assets/doc_scan.png" alt="Document" className="rd-thumbnail-img" />
          <div className="rd-thumbnail-overlay">
            <span className="rd-thumbnail-label"><ImageIcon size={14} /> Asli document</span>
            <button className="rd-expand-btn"><Maximize2 size={16} color="white" /></button>
          </div>
        </div>

        {/* Card 1: Visit Details */}
        <Card padding="lg" className="rd-card mb-md">
          <div className="rd-visit-header">
            <h2 className="rd-date">15 March 2025, Saturday</h2>
            <div className="rd-verified-badge">
              <ShieldCheck size={14} /> AI Verified
            </div>
          </div>
          <p className="rd-doctor-info"><strong>Dr. Rajesh Sharma</strong> | Cardiologist</p>
          <p className="rd-hospital-info">Apollo Hospital, New Delhi</p>
        </Card>

        {/* Card 2: Diagnosis */}
        <Card padding="lg" className="rd-card mb-md">
          <label className="rd-label">Bimari / Takleef:</label>
          <h2 className="rd-diagnosis-title">Hypertension & Mild Arrhythmia</h2>
          <p className="rd-diagnosis-notes">Patient reported mild chest discomfort and elevated blood pressure readings over the last 2 weeks.</p>
        </Card>

        {/* Card 3: Medicines Table */}
        <Card padding="none" className="rd-card mb-md">
          <div className="rd-card-header-flex px-lg pt-lg pb-md">
            <label className="rd-label mb-0">Medicines Prescribed</label>
            <button className="rd-text-btn"><Copy size={14} /> Copy list</button>
          </div>
          
          <div className="rd-medicines-table">
            <div className="rd-med-row header">
              <div>Medicine</div>
              <div>Dose</div>
              <div>When</div>
              <div>Duration</div>
            </div>
            
            <div className="rd-med-row ongoing">
              <div className="rd-med-name">Amlodipine 5mg</div>
              <div>1 Tab</div>
              <div>1-0-0</div>
              <div>30 Days</div>
            </div>
            
            <div className="rd-med-row ongoing">
              <div className="rd-med-name">Metoprolol 25mg</div>
              <div>1 Tab</div>
              <div>0-0-1</div>
              <div>30 Days</div>
            </div>
            
            <div className="rd-med-row">
              <div className="rd-med-name">Paracetamol 500mg</div>
              <div>SOS</div>
              <div>-</div>
              <div>As needed</div>
            </div>
          </div>
        </Card>

        {/* Card 4: Lab Values (Mocked for demonstration) */}
        <Card padding="lg" className="rd-card mb-md">
          <label className="rd-label mb-md">Associated Lab Values</label>
          
          <div className="rd-lab-list">
            <div className="rd-lab-item">
              <div className="rd-lab-info">
                <span className="rd-lab-name">Total Cholesterol</span>
                <span className="rd-lab-range">Normal: 125 - 200 mg/dL</span>
              </div>
              <div className="rd-lab-result">
                <span className="rd-lab-value">210</span>
                <span className="rd-status-chip high">↑ High</span>
              </div>
            </div>
            
            <div className="rd-lab-item">
              <div className="rd-lab-info">
                <span className="rd-lab-name">HDL (Good)</span>
                <span className="rd-lab-range">Normal: &gt; 40 mg/dL</span>
              </div>
              <div className="rd-lab-result">
                <span className="rd-lab-value">45</span>
                <span className="rd-status-chip normal">✓ Normal</span>
              </div>
            </div>
          </div>
          
          <button className="rd-text-btn w-full justify-center mt-md">
            <TrendingUp size={16} /> Pichli baar se compare karein
          </button>
        </Card>

        {/* Card 5: Instructions */}
        <Card padding="lg" className="rd-card mb-md">
          <label className="rd-label">Doctor's Instructions</label>
          <p className="rd-instructions-text">Reduce salt intake. Walk for 30 minutes daily. Monitor BP twice a week.</p>
          
          <div className="rd-followup-box">
            <div>
              <span className="rd-followup-label">Follow-up Date</span>
              <span className="rd-followup-date">15 April 2025</span>
            </div>
            <button className="rd-reminder-btn">
              <Bell size={16} /> Set Reminder
            </button>
          </div>
        </Card>

        {/* Card 6: Tags & Notes */}
        <Card padding="lg" className="rd-card mb-xl">
          <label className="rd-label">Tags & Personal Notes</label>
          
          <div className="rd-tags-container mb-md">
            <span className="rd-tag">Heart</span>
            <span className="rd-tag">Dr. Sharma</span>
            <button className="rd-add-tag-btn"><Plus size={14} /> Add Tag</button>
          </div>
          
          <textarea 
            className="rd-notes-input" 
            placeholder="Apne khud ke notes yahan likhein..."
            defaultValue="Started feeling better after 3 days of new medicine."
          ></textarea>
        </Card>
        
        {/* Bottom spacer */}
        <div className="pb-xl"></div>
      </div>

      {/* Bottom Action Bar */}
      <div className="rd-bottom-bar">
        <button className="rd-action-btn secondary">
          <FileText size={20} /> Share
        </button>
        <button className="rd-action-btn secondary">
          <Bell size={20} /> Reminder
        </button>
        <Button className="rd-primary-btn">Edit Details</Button>
      </div>

      {/* Image Viewer Overlay */}
      {imageExpanded && (
        <div className="rd-image-viewer" onClick={() => setImageExpanded(false)}>
          <div className="rd-viewer-header">
            <button className="icon-btn text-white"><ArrowLeft size={24} /></button>
            <span className="text-white font-bold">15 March 2025</span>
          </div>
          <img src="/assets/doc_scan.png" alt="Full Document" className="rd-full-img" />
          <p className="rd-viewer-hint">Pinch to zoom</p>
        </div>
      )}
    </div>
  );
};
