import React from 'react';
import { Home, ClipboardList, Camera, Pill, User } from 'lucide-react';
import './BottomNav.css';

interface BottomNavProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  onScanClick?: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab = 'home', onTabChange, onScanClick }) => {
  return (
    <nav className="bottom-nav">
      <div 
        className={`bottom-nav-item ${activeTab === 'home' ? 'active' : ''}`}
        onClick={() => onTabChange && onTabChange('home')}
      >
        <Home size={24} />
        <span className="nav-label">Home</span>
      </div>
      <div 
        className={`bottom-nav-item ${activeTab === 'records' ? 'active' : ''}`}
        onClick={() => onTabChange && onTabChange('records')}
      >
        <ClipboardList size={24} />
        <span className="nav-label">Records</span>
      </div>
      
      <div className="bottom-nav-item center-scan" onClick={onScanClick}>
        <div className="scan-btn">
          <Camera size={28} color="white" />
        </div>
        <span className="nav-label">Scan</span>
      </div>
      
      <div 
        className={`bottom-nav-item ${activeTab === 'medicines' ? 'active' : ''}`}
        onClick={() => onTabChange && onTabChange('medicines')}
      >
        <Pill size={24} />
        <span className="nav-label">Medicines</span>
      </div>
      <div 
        className={`bottom-nav-item ${activeTab === 'profile' ? 'active' : ''}`}
        onClick={() => onTabChange && onTabChange('profile')}
      >
        <User size={24} />
        <span className="nav-label">Profile</span>
      </div>
    </nav>
  );
};
