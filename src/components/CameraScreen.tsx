import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';
import './CameraScreen.css';

interface CameraScreenProps {
  onCancel: () => void;
  onCapture: () => void;
}

export const CameraScreen: React.FC<CameraScreenProps> = ({ onCancel, onCapture }) => {
  const [captured, setCaptured] = useState(false);

  const handleCapture = () => {
    setCaptured(true);
  };

  const handleRetake = () => {
    setCaptured(false);
  };

  return (
    <div className="camera-screen-overlay">
      <div className="camera-header">
        <button className="camera-icon-btn" onClick={onCancel}>
          <X size={28} color="white" />
        </button>
      </div>

      <div className="camera-viewfinder">
        {!captured ? (
          <>
            <div className="frame-guide">
              <div className="corner top-left"></div>
              <div className="corner top-right"></div>
              <div className="corner bottom-left"></div>
              <div className="corner bottom-right"></div>
              <div className="edge-detect-glow"></div>
            </div>
            <p className="camera-tip">Document ko frame ke andar rakhein</p>
          </>
        ) : (
          <div className="captured-preview">
            <div className="simulated-document"></div>
          </div>
        )}
      </div>

      <div className="camera-controls">
        {!captured ? (
          <button className="capture-btn" onClick={handleCapture}>
            <div className="capture-inner"></div>
          </button>
        ) : (
          <div className="capture-actions">
            <Button variant="ghost" onClick={handleRetake} className="text-white">
              Retake
            </Button>
            <Button onClick={onCapture}>
              Use Photo
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
