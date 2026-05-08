import React from 'react';
import { Button } from './Button';
import { CheckCircle, Edit2 } from 'lucide-react';
import './ExtractionResultScreen.css';

interface ExtractionResultScreenProps {
  onSave: () => void;
  onCancel: () => void;
}

export const ExtractionResultScreen: React.FC<ExtractionResultScreenProps> = ({ onSave, onCancel }) => {
  return (
    <div className="extraction-screen">
      <div className="extraction-header">
        <div className="success-burst">
          <CheckCircle size={48} color="white" />
        </div>
        <h1 className="extraction-title">Mil gaya! Yeh information mili:</h1>
        <p className="extraction-subtitle">Kuch galat hai? Theek karein</p>
      </div>

      <div className="extraction-content">
        <div className="doc-thumbnail-banner">
          <img src="/assets/doc_scan.png" alt="Original Document" className="thumb-img" />
          <span className="thumb-text">Tap to view original</span>
        </div>

        <div className="extracted-fields">
          <div className="field-group">
            <label>Date of visit</label>
            <div className="editable-input-wrap">
              <input type="text" defaultValue="12 OCT 2023" />
              <Edit2 size={16} className="edit-icon" />
            </div>
          </div>

          <div className="field-group">
            <label>Doctor Name</label>
            <div className="editable-input-wrap">
              <input type="text" defaultValue="Dr. Alex J. (Cardiologist)" />
              <Edit2 size={16} className="edit-icon" />
            </div>
          </div>

          <div className="field-group">
            <label>Diagnosis</label>
            <div className="editable-input-wrap">
              <input type="text" defaultValue="Hypertension Checkup" />
              <Edit2 size={16} className="edit-icon" />
            </div>
          </div>
        </div>

        <div className="medicines-table-section">
          <h3 className="section-label">Medicines Found</h3>
          <div className="medicines-table">
            <div className="med-row header">
              <div>Name & Dose</div>
              <div>Freq</div>
              <div>Duration</div>
              <div></div>
            </div>
            <div className="med-row">
              <div className="font-bold text-primary">Amoxicillin 500mg</div>
              <div>1-0-1</div>
              <div>5 Days</div>
              <div className="edit-cell"><Edit2 size={14} /></div>
            </div>
            <div className="med-row">
              <div className="font-bold text-primary">Ibuprofen 400mg</div>
              <div>SOS</div>
              <div>-</div>
              <div className="edit-cell"><Edit2 size={14} /></div>
            </div>
          </div>
        </div>

        <div className="extracted-fields mt-4">
          <div className="field-group">
            <label>Follow-up Date</label>
            <div className="editable-input-wrap">
              <input type="text" defaultValue="12 NOV 2023" />
              <Edit2 size={16} className="edit-icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="extraction-footer">
        <Button variant="ghost" onClick={onCancel} className="btn-half">Wapas jaao</Button>
        <Button onClick={onSave} className="btn-half">Save karein</Button>
      </div>
    </div>
  );
};
