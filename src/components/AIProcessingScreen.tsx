import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import './AIProcessingScreen.css';

interface AIProcessingScreenProps {
  onComplete: () => void;
  onCancel: () => void;
}

const MESSAGES = [
  "Document padh raha hoon...",
  "Dawaai ke naam dhundh raha hoon...",
  "Doctor ka naam identify kar raha hoon...",
  "Dates organize kar raha hoon...",
  "Aapka record ban raha hai..."
];

export const AIProcessingScreen: React.FC<AIProcessingScreenProps> = ({ onComplete, onCancel }) => {
  const [msgIndex, setMsgIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Message cycling
    const msgInterval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 2000);

    // Progress bar simulation (total ~10s to hit 100)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(msgInterval);
          setTimeout(onComplete, 500); // Wait a beat at 100% before transitioning
          return 100;
        }
        return prev + 1; // 1% every 100ms
      });
    }, 100);

    return () => {
      clearInterval(msgInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="ai-processing-screen">
      <div className="animation-container">
        <div className="pulse-ring"></div>
        <div className="pulse-ring delay"></div>
        
        <div className="doc-illustration">
          <img src="/assets/doc_scan.png" alt="Scanning Document" />
          <div className="scanning-laser"></div>
        </div>
      </div>

      <div className="processing-status">
        <h2 className="status-message">{MESSAGES[msgIndex]}</h2>
        
        <div className="progress-container">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
        
        <p className="status-disclaimer">
          AI carefully reading — usually takes 10-15 seconds
        </p>
      </div>

      <div className="processing-footer">
        <Button variant="ghost" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};
