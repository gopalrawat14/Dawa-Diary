import React, { useState } from 'react';
import { FamilyScreen } from './FamilyScreen';
import { SettingsScreen } from './SettingsScreen';
import './ProfileContainerScreen.css';

type SubTab = 'family' | 'settings';

export const ProfileContainerScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SubTab>('family');
  const [lang, setLang] = useState<'EN' | 'HI'>('EN');

  const toggleLang = () => setLang(prev => prev === 'EN' ? 'HI' : 'EN');

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h1 className="profile-title" style={{ marginBottom: 0 }}>Mera Profile</h1>
          <button className="lang-toggle-pill" onClick={toggleLang}>
            {lang === 'EN' ? 'EN | हिं' : 'हिं | EN'}
          </button>
        </div>
        <div className="segmented-control">
          <button 
            className={`seg-btn ${activeTab === 'family' ? 'active' : ''}`}
            onClick={() => setActiveTab('family')}
          >
            Parivaar (Family)
          </button>
          <button 
            className={`seg-btn ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        </div>
      </div>

      <div className="profile-content">
        {activeTab === 'family' && <FamilyScreen />}
        {activeTab === 'settings' && <SettingsScreen />}
      </div>
    </div>
  );
};
