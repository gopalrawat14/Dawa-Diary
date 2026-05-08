import React, { useState } from 'react';
import { EmergencyCard } from './EmergencyCard';
import { DocumentCard } from './DocumentCard';
import { MetricCard } from './MetricCard';
import { BottomNav } from './BottomNav';
import { DocumentUpload } from './DocumentUpload';
import { CameraScreen } from './CameraScreen';
import { AIProcessingScreen } from './AIProcessingScreen';
import { ExtractionResultScreen } from './ExtractionResultScreen';
import { TimelineScreen } from './TimelineScreen';
import { RecordDetailScreen } from './RecordDetailScreen';
import { AIChatScreen } from './AIChatScreen';
import { ShareScreen } from './ShareScreen';
import { QRCodeScreen } from './QRCodeScreen';
import { EmergencyCardScreen } from './EmergencyCardScreen';
import { MedicinesScreen } from './MedicinesScreen';
import { AddMedicineScreen } from './AddMedicineScreen';
import { ReminderNotification } from './ReminderNotification';
import { ProfileContainerScreen } from './ProfileContainerScreen';
import { SearchScreen } from './SearchScreen';
import { FilterScreen } from './FilterScreen';
import { StatesPlayground } from './StatesPlayground';
import { Camera, Clock, Bot, QrCode, FileText, FileImage, User, Plus } from 'lucide-react';
import './Dashboard.css';

type OverlayState = 'none' | 'upload-sheet' | 'camera' | 'ai-processing' | 'extraction-result' | 'ai-chat' | 'share-config' | 'qr-display' | 'emergency-card' | 'add-medicine' | 'mock-notification' | 'search' | 'filters' | 'states-playground';
type TabState = 'home' | 'records' | 'medicines' | 'profile';

export const Dashboard: React.FC = () => {
  const [activeOverlay, setActiveOverlay] = useState<OverlayState>('none');
  const [currentTab, setCurrentTab] = useState<TabState>('home');
  const [activeRecord, setActiveRecord] = useState<string | null>(null);
  const [lang, setLang] = useState<'EN' | 'HI'>('EN');

  const toggleLang = () => setLang(prev => prev === 'EN' ? 'HI' : 'EN');

  return (
    <div className="dashboard-wrapper">
      {currentTab === 'home' && (
        <>
          <div className="dash-header">
            <div className="user-profile-summary">
              <div className="avatar bg-blue">
                <User size={20} color="white" />
              </div>
              <div className="user-greeting">
                <span className="greeting-text">Namaste,</span>
                <span className="user-name">Ramesh Kumar 👋</span>
              </div>
            </div>
            <button className="lang-toggle-pill" onClick={toggleLang}>
              {lang === 'EN' ? 'EN | हिं' : 'हिं | EN'}
            </button>
          </div>
          <main className="dashboard-main">
        {/* Emergency Section */}
        <section className="emergency-section">
          <EmergencyCard 
            bloodGroup="B+"
            allergies={['Penicillin']}
            conditions={['Diabetes Type 2', 'Hypertension']}
            onExpand={() => setActiveOverlay('emergency-card')}
          />
        </section>

        {/* Quick Actions Row */}
        <section className="quick-actions-scroll">
          <div className="quick-action-btn" onClick={() => setActiveOverlay('upload-sheet')}>
            <div className="qa-icon bg-blue"><Camera size={24} color="white" /></div>
            <span className="qa-label-en">Document Upload</span>
            <span className="qa-label-hi">Dawaai ya report add karein</span>
          </div>
          <div className="quick-action-btn" onClick={() => setCurrentTab('records')}>
            <div className="qa-icon bg-purple"><Clock size={24} color="white" /></div>
            <span className="qa-label-en">Timeline</span>
            <span className="qa-label-hi">Poori history dekho</span>
          </div>
          <div className="quick-action-btn" onClick={() => setActiveOverlay('ai-chat')}>
            <div className="qa-icon bg-green"><Bot size={24} color="white" /></div>
            <span className="qa-label-en">Dawa Diary AI</span>
            <span className="qa-label-hi">Apne records se poochho</span>
          </div>
          <div className="quick-action-btn" onClick={() => setActiveOverlay('share-config')}>
            <div className="qa-icon bg-orange"><QrCode size={24} color="white" /></div>
            <span className="qa-label-en">Share QR</span>
            <span className="qa-label-hi">Doctor ko bhejo</span>
          </div>
          <div className="quick-action-btn" onClick={() => setActiveOverlay('states-playground')}>
            <div className="qa-icon bg-blue"><FileText size={24} color="white" /></div>
            <span className="qa-label-en">UI States</span>
            <span className="qa-label-hi">Playground</span>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="dashboard-section">
          <div className="section-header">
            <h3 className="section-title">Haali records</h3>
            <button className="link-btn" onClick={() => setCurrentTab('records')}>Sab dekho &rarr;</button>
          </div>
          <div className="documents-list">
            <DocumentCard 
              title="Apollo Hospital"
              date="12 May 2026"
              doctorOrLab="Dr. Sharma"
              typeBadge="Prescription"
              icon={<FileText size={24} />}
              borderColor="blue"
            />
            <DocumentCard 
              title="Thyrocare CBC Test"
              date="05 May 2026"
              doctorOrLab="Thyrocare Labs"
              typeBadge="Lab Report"
              icon={<FileImage size={24} />}
              borderColor="purple"
            />
            <DocumentCard 
              title="Max Hospital Discharge"
              date="28 Apr 2026"
              doctorOrLab="Dr. Mehta"
              typeBadge="Discharge"
              icon={<FileText size={24} />}
              borderColor="orange"
            />
          </div>
        </section>

        {/* Health Snapshot */}
        <section className="dashboard-section">
          <h3 className="section-title mb-sm">Aapki sehat ek nazar mein</h3>
          <div className="metric-grid">
            <MetricCard name="Blood Pressure" value="120/80" date="Today, 9:00 AM" trend="neutral" />
            <MetricCard name="Blood Sugar (F)" value="115" unit="mg/dL" date="Yesterday" trend="up" />
            <MetricCard name="Active Medicines" value="4" date="Currently taking" trend="neutral" />
            <MetricCard name="Next Medicine" value="1:00 PM" date="Metformin 500mg" trend="neutral" />
          </div>
        </section>

        {/* Family Quick Access */}
        <section className="dashboard-section">
          <h3 className="section-title mb-sm">Parivaar (Family)</h3>
          <div className="family-scroll">
            <div className="family-member">
              <div className="family-avatar active"><User size={24} /></div>
              <span className="family-name">Rajesh (Me)</span>
            </div>
            <div className="family-member">
              <div className="family-avatar"><User size={24} /></div>
              <span className="family-name">Sunita</span>
            </div>
            <div className="family-member">
              <div className="family-avatar"><User size={24} /></div>
              <span className="family-name">Rohan</span>
            </div>
            <div className="family-member" onClick={() => alert('Add family member feature coming soon!')}>
              <div className="family-avatar dashed"><Plus size={24} color="var(--color-primary)" /></div>
              <span className="family-name text-blue">Add</span>
            </div>
          </div>
        </section>

        {/* Upcoming Reminders */}
        <section className="dashboard-section pb-xl">
          <div className="section-header">
            <h3 className="section-title">Upcoming Reminders</h3>
            <button className="link-btn" onClick={() => setCurrentTab('medicines')}>Sab reminders &rarr;</button>
          </div>
          <div className="reminders-list">
            <div className="reminder-item">
              <div className="reminder-time">1:00 PM</div>
              <div className="reminder-details">
                <div className="reminder-name">Metformin</div>
                <div className="reminder-dose">1 Tablet (After Lunch)</div>
              </div>
            </div>
            <div className="reminder-item">
              <div className="reminder-time">8:00 PM</div>
              <div className="reminder-details">
                <div className="reminder-name">Atorvastatin</div>
                <div className="reminder-dose">1 Tablet (After Dinner)</div>
              </div>
            </div>
          </div>
        </section>
      </main>
        </>
      )}

      {currentTab === 'records' && (
        <TimelineScreen 
          onUploadClick={() => setActiveOverlay('upload-sheet')} 
          onRecordClick={(id) => setActiveRecord(id)}
          onSearchClick={() => setActiveOverlay('search')}
        />
      )}

      {currentTab === 'medicines' && (
        <MedicinesScreen 
          onAddClick={() => setActiveOverlay('add-medicine')} 
          triggerNotification={() => setActiveOverlay('mock-notification')}
        />
      )}

      {currentTab === 'profile' && (
        <ProfileContainerScreen />
      )}

      <BottomNav 
        activeTab={currentTab}
        onTabChange={(tab) => setCurrentTab(tab as TabState)}
        onScanClick={() => setActiveOverlay('upload-sheet')} 
      />

      {/* Overlay Layers */}
      {activeOverlay === 'upload-sheet' && (
        <div className="overlay-backdrop">
          <DocumentUpload 
            onClose={() => setActiveOverlay('none')} 
            onCameraSelect={() => setActiveOverlay('camera')} 
          />
        </div>
      )}
      
      {activeOverlay === 'camera' && (
        <CameraScreen 
          onCancel={() => setActiveOverlay('none')} 
          onCapture={() => setActiveOverlay('ai-processing')} 
        />
      )}

      {activeOverlay === 'ai-processing' && (
        <AIProcessingScreen 
          onCancel={() => setActiveOverlay('none')} 
          onComplete={() => setActiveOverlay('extraction-result')} 
        />
      )}

      {activeOverlay === 'extraction-result' && (
        <ExtractionResultScreen 
          onCancel={() => setActiveOverlay('none')} 
          onSave={() => setActiveOverlay('none')} 
        />
      )}

      {activeOverlay === 'ai-chat' && (
        <AIChatScreen onBack={() => setActiveOverlay('none')} />
      )}

      {activeOverlay === 'share-config' && (
        <ShareScreen 
          onBack={() => setActiveOverlay('none')} 
          onGenerate={() => setActiveOverlay('qr-display')}
        />
      )}

      {activeOverlay === 'qr-display' && (
        <QRCodeScreen onBack={() => setActiveOverlay('share-config')} />
      )}

      {activeOverlay === 'emergency-card' && (
        <EmergencyCardScreen onBack={() => setActiveOverlay('none')} />
      )}

      {activeOverlay === 'add-medicine' && (
        <AddMedicineScreen 
          onBack={() => setActiveOverlay('none')} 
          onSave={() => setActiveOverlay('none')}
        />
      )}

      {activeOverlay === 'mock-notification' && (
        <ReminderNotification onDismiss={() => setActiveOverlay('none')} />
      )}

      {activeOverlay === 'search' && (
        <SearchScreen 
          onBack={() => setActiveOverlay('none')} 
          onOpenFilters={() => setActiveOverlay('filters')} 
        />
      )}

      {activeOverlay === 'filters' && (
        <FilterScreen 
          onClose={() => setActiveOverlay('search')} 
          onApply={() => setActiveOverlay('search')} 
        />
      )}

      {activeOverlay === 'states-playground' && (
        <StatesPlayground onBack={() => setActiveOverlay('none')} />
      )}

      {activeRecord && (
        <RecordDetailScreen onBack={() => setActiveRecord(null)} />
      )}
    </div>
  );
};
