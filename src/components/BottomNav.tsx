import React from 'react';
import { Home, ClipboardList, Camera, Pill, User } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import './BottomNav.css';

interface BottomNavProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  onScanClick?: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab = 'home', onTabChange, onScanClick }) => {
  const { language } = useAppContext();

  const labels = {
    home: language === 'hi' ? 'Home' : 'Home',
    records: language === 'hi' ? 'Records' : 'Records',
    scan: language === 'hi' ? 'Scan' : 'Scan',
    medicines: language === 'hi' ? 'Dawaai' : 'Medicines',
    profile: language === 'hi' ? 'Profile' : 'Profile',
  };

  return (
    <nav className="bottom-nav">
      <div 
        className={`bottom-nav-item ${activeTab === 'home' ? 'active' : ''}`}
        onClick={() => onTabChange && onTabChange('home')}
      >
        <Home size={24} />
        <span className="nav-label">{labels.home}</span>
      </div>
      <div 
        className={`bottom-nav-item ${activeTab === 'records' ? 'active' : ''}`}
        onClick={() => onTabChange && onTabChange('records')}
      >
        <ClipboardList size={24} />
        <span className="nav-label">{labels.records}</span>
      </div>
      
      <div className="bottom-nav-item center-scan" onClick={onScanClick}>
        <div className="scan-btn">
          <Camera size={28} color="white" />
        </div>
        <span className="nav-label">{labels.scan}</span>
      </div>
      
      <div 
        className={`bottom-nav-item ${activeTab === 'medicines' ? 'active' : ''}`}
        onClick={() => onTabChange && onTabChange('medicines')}
      >
        <Pill size={24} />
        <span className="nav-label">{labels.medicines}</span>
      </div>
      <div 
        className={`bottom-nav-item ${activeTab === 'profile' ? 'active' : ''}`}
        onClick={() => onTabChange && onTabChange('profile')}
      >
        <User size={24} />
        <span className="nav-label">{labels.profile}</span>
      </div>
    </nav>
  );
};
