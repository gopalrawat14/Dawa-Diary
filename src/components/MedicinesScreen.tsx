import React, { useState, useEffect } from 'react';
import { Plus, Sun, Sunrise, Moon, Bell, Edit3, Trash2 } from 'lucide-react';
import { Card } from './Card';
import './MedicinesScreen.css';

interface MedicinesScreenProps {
  onAddClick: () => void;
  triggerNotification?: () => void;
}

export const MedicinesScreen: React.FC<MedicinesScreenProps> = ({ onAddClick, triggerNotification }) => {
  const [takenPills, setTakenPills] = useState<Record<string, boolean>>({
    'metformin-morning': true,
    'metformin-night': false,
    'amlodipine-morning': false,
  });

  // Trigger mock notification slightly after mounting
  useEffect(() => {
    if (triggerNotification) {
      const timer = setTimeout(() => {
        triggerNotification();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [triggerNotification]);

  const handlePillClick = (id: string) => {
    setTakenPills(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="medicines-screen">
      <div className="meds-header">
        <h1 className="meds-title">Aapki Dawaaiyan</h1>
        <button className="add-med-btn" onClick={onAddClick}>
          <Plus size={24} color="white" />
        </button>
      </div>

      <div className="meds-content">
        {/* Stats Row */}
        <div className="meds-stats-row">
          <div className="med-stat-box active">
            <span className="stat-num">4</span>
            <span className="stat-label">Active</span>
          </div>
          <div className="med-stat-box">
            <span className="stat-num">12</span>
            <span className="stat-label">Completed</span>
          </div>
          <div className="med-stat-box warning">
            <span className="stat-num">1</span>
            <span className="stat-label">Refill</span>
          </div>
        </div>

        {/* Active Medicines */}
        <section className="meds-section">
          <h2 className="section-title">Active Medicines</h2>
          
          <Card padding="none" className="active-med-card border-blue">
            <div className="amc-content">
              <div className="amc-header">
                <h3>Metformin</h3>
                <span className="amc-dose">500mg — Khaane ke baad</span>
              </div>

              <div className="amc-pills-row">
                <button 
                  className={`time-pill ${takenPills['metformin-morning'] ? 'taken' : ''}`}
                  onClick={() => handlePillClick('metformin-morning')}
                >
                  <Sunrise size={18} /> Subah
                </button>
                <div className="time-pill disabled">
                  <Sun size={18} /> Dopehar
                </div>
                <button 
                  className={`time-pill ${takenPills['metformin-night'] ? 'taken' : ''}`}
                  onClick={() => handlePillClick('metformin-night')}
                >
                  <Moon size={18} /> Shaam
                </button>
              </div>

              <div className="amc-progress-section">
                <div className="amc-progress-labels">
                  <span>Days remaining</span>
                  <span>14 / 30</span>
                </div>
                <div className="amc-progress-track">
                  <div className="amc-progress-bar" style={{ width: '45%' }}></div>
                </div>
              </div>
              
              <div className="amc-footer">
                Prescribed by Dr. Sharma • 12 May 2026
              </div>
            </div>
            {/* Swipe actions mock */}
            <div className="amc-swipe-actions">
              <button className="swipe-btn edit"><Edit3 size={18} /></button>
              <button className="swipe-btn delete"><Trash2 size={18} /></button>
            </div>
          </Card>

          <Card padding="none" className="active-med-card border-green">
            <div className="amc-content">
              <div className="amc-header">
                <h3>Amlodipine</h3>
                <span className="amc-dose">5mg — Khaali pet</span>
              </div>

              <div className="amc-pills-row">
                <button 
                  className={`time-pill ${takenPills['amlodipine-morning'] ? 'taken' : ''}`}
                  onClick={() => handlePillClick('amlodipine-morning')}
                >
                  <Sunrise size={18} /> Subah
                </button>
                <div className="time-pill disabled"><Sun size={18} /></div>
                <div className="time-pill disabled"><Moon size={18} /></div>
              </div>

              <div className="amc-progress-section">
                <div className="amc-progress-labels">
                  <span className="text-red font-bold">Low stock</span>
                  <span className="text-red">2 / 30</span>
                </div>
                <div className="amc-progress-track">
                  <div className="amc-progress-bar danger" style={{ width: '8%' }}></div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Today's Schedule */}
        <section className="meds-section">
          <h2 className="section-title">Aaj ki dawaaiyan</h2>
          
          <div className="schedule-timeline">
            
            <div className="schedule-slot past">
              <div className="slot-time">8:00 AM</div>
              <div className="slot-dot"></div>
              <div className="slot-content">
                <div className="slot-med-name">Metformin 500mg</div>
                <div className="slot-status taken">✓ Le li</div>
              </div>
            </div>

            <div className="schedule-slot current">
              <div className="slot-time">2:00 PM</div>
              <div className="slot-dot current"></div>
              <div className="slot-content overdue-card">
                <div className="slot-med-name">Paracetamol</div>
                <div className="slot-status text-red font-bold">Overdue</div>
                <button className="slot-action-btn">Abhi lo</button>
              </div>
            </div>

            <div className="schedule-slot future">
              <div className="slot-time">8:00 PM</div>
              <div className="slot-dot"></div>
              <div className="slot-content">
                <div className="slot-med-name">Metformin 500mg</div>
                <div className="slot-status">Pending</div>
              </div>
            </div>

          </div>
        </section>

        {/* Refill Tracker */}
        <section className="meds-section pb-xl">
          <h2 className="section-title">Khatam hone wali dawaaiyan</h2>
          
          <Card padding="md" className="refill-card">
            <div className="refill-info">
              <div className="refill-name">Amlodipine</div>
              <div className="refill-chip">Sirf 2 din ki bachi hai</div>
            </div>
            <button className="refill-btn">
              <Bell size={16} /> Refill reminder set karein
            </button>
          </Card>
        </section>
        
      </div>
    </div>
  );
};
