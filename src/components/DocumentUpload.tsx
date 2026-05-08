import React, { useState } from 'react';
import { Button } from './Button';
import { Pill, Microscope, Hospital, Camera as CameraIcon, Syringe, FileText, X, Check, Image as ImageIcon, FileUp, Lightbulb } from 'lucide-react';
import './DocumentUpload.css';

interface DocumentUploadProps {
  onClose: () => void;
  onCameraSelect: () => void;
}

const docTypes = [
  { id: 'prescription', icon: <Pill />, en: 'Prescription', hi: 'Dawaai ki parchi' },
  { id: 'lab', icon: <Microscope />, en: 'Lab Report', hi: 'Lab report / blood test' },
  { id: 'discharge', icon: <Hospital />, en: 'Discharge Summary', hi: 'Hospital se chutti ka kagaz' },
  { id: 'scan', icon: <CameraIcon />, en: 'X-Ray / Scan Report', hi: 'Scan reports' },
  { id: 'vaccine', icon: <Syringe />, en: 'Vaccination Record', hi: 'Tika record' },
  { id: 'other', icon: <FileText />, en: 'Other Document', hi: 'Kuch aur' },
];

export const DocumentUpload: React.FC<DocumentUploadProps> = ({ onClose, onCameraSelect }) => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const handleUploadClick = () => {
    if (selectedMethod === 'camera') {
      onCameraSelect();
    }
  };

  return (
    <div className="doc-upload-sheet">
      <div className="sheet-header">
        <h2 className="sheet-title">Kya upload karna hai?</h2>
        <button className="close-btn" onClick={onClose}><X size={24} /></button>
      </div>

      <div className="doc-type-grid">
        {docTypes.map(type => {
          const isSelected = selectedType === type.id;
          return (
            <div 
              key={type.id} 
              className={`doc-type-card ${isSelected ? 'selected' : ''}`}
              onClick={() => setSelectedType(type.id)}
            >
              <div className="doc-type-icon">{type.icon}</div>
              <span className="doc-type-en">{type.en}</span>
              <span className="doc-type-hi">{type.hi}</span>
              {isSelected && <div className="doc-type-check"><Check size={16} color="white" /></div>}
            </div>
          );
        })}
      </div>

      {selectedType && (
        <div className="upload-method-section animate-up">
          <h3 className="section-title mb-sm">Kaise upload karein?</h3>
          
          <div className="method-cards">
            <div 
              className={`method-card ${selectedMethod === 'camera' ? 'selected' : ''}`}
              onClick={() => setSelectedMethod('camera')}
            >
              <CameraIcon size={24} className="method-icon" />
              <div>
                <span className="method-title">Photo lo</span>
                <span className="method-desc">Camera se seedha</span>
              </div>
            </div>
            
            <div 
              className={`method-card ${selectedMethod === 'gallery' ? 'selected' : ''}`}
              onClick={() => setSelectedMethod('gallery')}
            >
              <ImageIcon size={24} className="method-icon" />
              <div>
                <span className="method-title">Gallery se chunein</span>
                <span className="method-desc">Phone se select karein</span>
              </div>
            </div>
            
            <div 
              className={`method-card ${selectedMethod === 'pdf' ? 'selected' : ''}`}
              onClick={() => setSelectedMethod('pdf')}
            >
              <FileUp size={24} className="method-icon" />
              <div>
                <span className="method-title">PDF upload karein</span>
                <span className="method-desc">Document file</span>
              </div>
            </div>
          </div>

          {selectedMethod === 'camera' && (
            <div className="quality-tip-banner animate-fade">
              <Lightbulb size={24} color="#F59E0B" className="tip-icon" />
              <p><strong>Acche result ke liye:</strong> Seedhi roshni mein photo lo, poora document frame mein aana chahiye.</p>
            </div>
          )}

          <div className="mt-4">
            <Button 
              fullWidth 
              disabled={!selectedMethod}
              onClick={handleUploadClick}
            >
              Upload karein
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
