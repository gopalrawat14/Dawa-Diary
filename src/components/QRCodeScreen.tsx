import React, { useEffect, useState } from 'react';
import { ArrowLeft, Download, Share2, Clock, CheckCircle } from 'lucide-react';
import { Button } from './Button';
import './QRCodeScreen.css';

interface QRCodeScreenProps {
  onBack: () => void;
}

export const QRCodeScreen: React.FC<QRCodeScreenProps> = ({ onBack }) => {
  const [progress, setProgress] = useState(100);

  // Simulate expiry timer
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => Math.max(0, prev - 0.1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="qr-screen-overlay">
      <div className="qr-header">
        <button className="icon-btn" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <h2>QR Ready</h2>
        <div style={{ width: 40 }}></div>
      </div>

      <div className="qr-content">
        <div className="qr-success-badge">
          <CheckCircle size={16} color="white" />
          <span>Record sharing activated</span>
        </div>

        <h1 className="qr-title">Doctor ko yeh dikhayein</h1>
        <p className="qr-subtitle">Scan to view Rajesh's health records</p>

        {/* The QR Code Container */}
        <div className="qr-card">
          <div className="qr-code-wrapper">
            {/* CSS generated mock QR pattern */}
            <div className="mock-qr-pattern"></div>
            {/* Watermark logo */}
            <div className="qr-watermark">
              <div className="watermark-heart"></div>
            </div>
          </div>
          
          <div className="qr-timer-section">
            <div className="qr-timer-text">
              <Clock size={14} /> Yeh QR 24 ghante valid hai
            </div>
            <div className="qr-progress-track">
              <div className="qr-progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>

        <button className="text-btn text-primary font-bold mt-md">
          Naya QR banao
        </button>

        <div className="qr-actions-container">
          <button className="whatsapp-btn">
            <Share2 size={18} color="white" /> WhatsApp pe bhejo
          </button>
          
          <div className="secondary-actions-row">
            <Button className="flex-1 outlined">
              <Download size={18} /> PDF download karein
            </Button>
            <Button className="flex-1 outlined">
              <Share2 size={18} /> Share link
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
