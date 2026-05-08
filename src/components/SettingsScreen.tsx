import React, { useState } from 'react';
import { User, Globe, Type, Moon, Lock, Shield, Download, Trash2, Bell, Share2, Info, FileText, MessageSquare, PlayCircle, HelpCircle } from 'lucide-react';
import './SettingsScreen.css';

export const SettingsScreen: React.FC = () => {
  const [toggles, setToggles] = useState({
    darkMode: false,
    appLock: true,
    medReminders: true,
    updateReminders: false
  });

  const handleToggle = (key: keyof typeof toggles) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="settings-screen">
      
      {/* Profile Section */}
      <section className="settings-group">
        <div className="settings-profile-card">
          <div className="sp-avatar"><User size={24} /></div>
          <div className="sp-info">
            <h3>Ramesh Kumar</h3>
            <p>+91 98765 43210</p>
          </div>
          <button className="text-btn text-primary font-bold" onClick={() => alert('Profile editing feature coming soon!')}>Edit</button>
        </div>
      </section>

      {/* Language & Display */}
      <section className="settings-group">
        <h3 className="sg-title">Language & Display</h3>
        <div className="settings-list">
          <div className="settings-item">
            <div className="si-icon"><Globe size={20} /></div>
            <div className="si-content">
              <h4>App Language</h4>
              <p>English</p>
            </div>
          </div>
          <div className="settings-item">
            <div className="si-icon"><Type size={20} /></div>
            <div className="si-content">
              <h4>Font Size</h4>
              <p>Medium</p>
            </div>
          </div>
          <div className="settings-item">
            <div className="si-icon"><Moon size={20} /></div>
            <div className="si-content">
              <h4>Dark Mode</h4>
            </div>
            <div className={`switch ${toggles.darkMode ? 'active' : ''}`} onClick={() => handleToggle('darkMode')}>
              <div className="switch-knob"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Security */}
      <section className="settings-group">
        <h3 className="sg-title">Privacy & Security</h3>
        
        {/* Data Location Card */}
        <div className="data-info-card">
          <Shield size={24} color="var(--color-success)" />
          <div className="dic-text">
            <strong>Aapka data kahan hai?</strong>
            <p>Aapke records sirf aapke phone pe hain. Koi server pe nahi jaata.</p>
          </div>
        </div>

        <div className="settings-list">
          <div className="settings-item">
            <div className="si-icon"><Lock size={20} /></div>
            <div className="si-content">
              <h4>App Lock (Fingerprint)</h4>
            </div>
            <div className={`switch ${toggles.appLock ? 'active' : ''}`} onClick={() => handleToggle('appLock')}>
              <div className="switch-knob"></div>
            </div>
          </div>
          <div className="settings-item">
            <div className="si-icon"><Download size={20} /></div>
            <div className="si-content">
              <h4>Poora data download karein</h4>
            </div>
          </div>
          <div className="settings-item danger">
            <div className="si-icon"><Trash2 size={20} /></div>
            <div className="si-content">
              <h4>Delete Account</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Notifications */}
      <section className="settings-group">
        <h3 className="sg-title">Notifications</h3>
        <div className="settings-list">
          <div className="settings-item">
            <div className="si-icon"><Bell size={20} /></div>
            <div className="si-content">
              <h4>Medicine Reminders</h4>
            </div>
            <div className={`switch ${toggles.medReminders ? 'active' : ''}`} onClick={() => handleToggle('medReminders')}>
              <div className="switch-knob"></div>
            </div>
          </div>
          <div className="settings-item">
            <div className="si-icon"><Info size={20} /></div>
            <div className="si-content">
              <h4>App Updates</h4>
            </div>
            <div className={`switch ${toggles.updateReminders ? 'active' : ''}`} onClick={() => handleToggle('updateReminders')}>
              <div className="switch-knob"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sharing & ABHA */}
      <section className="settings-group">
        <h3 className="sg-title">Sharing & Privacy</h3>
        <div className="settings-list">
          <div className="settings-item">
            <div className="si-icon"><Share2 size={20} /></div>
            <div className="si-content">
              <h4>QR Expiry Time</h4>
              <p>24 hours default</p>
            </div>
          </div>
          <div className="settings-item abha-link" onClick={() => alert('ABHA linking feature coming soon!')}>
            <div className="abha-logo">A</div>
            <div className="si-content">
              <h4>Ayushman Bharat (ABHA)</h4>
              <p>Link your health ID</p>
            </div>
            <span className="text-primary font-bold">Link</span>
          </div>
        </div>
      </section>

      {/* About & Help */}
      <section className="settings-group">
        <h3 className="sg-title">About & Help</h3>
        <div className="settings-list">
          <div className="settings-item">
            <div className="si-icon"><PlayCircle size={20} /></div>
            <div className="si-content"><h4>Video Tutorials</h4></div>
          </div>
          <div className="settings-item">
            <div className="si-icon"><HelpCircle size={20} /></div>
            <div className="si-content"><h4>FAQ</h4></div>
          </div>
          <div className="settings-item">
            <div className="si-icon whatsapp-icon"><MessageSquare size={20} /></div>
            <div className="si-content"><h4>WhatsApp Support</h4></div>
          </div>
          <div className="settings-item">
            <div className="si-icon"><FileText size={20} /></div>
            <div className="si-content"><h4>Privacy Policy & Terms</h4></div>
          </div>
        </div>
      </section>

      <div className="settings-footer">
        <p>Dawa Diary v1.0.0</p>
        <p>Made with ❤️ in India</p>
      </div>

    </div>
  );
};
