import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import './Onboarding.css';

const slides = [
  {
    id: 0,
    image: '/assets/onboarding_1.png',
    titleHi: 'Kitne papers sambhaale aap?',
    descHi: 'Prescriptions, lab reports, discharge summaries — sab ek jagah, ek tap mein.',
    titleEn: 'How many papers do you carry?',
  },
  {
    id: 1,
    image: '/assets/onboarding_2.png',
    titleHi: 'Bas photo lo. Baki Dawa Diary karega.',
    descHi: 'Sirf report ya parchi ki photo kheinche',
    titleEn: 'Just take a photo. Dawa Diary does the rest.',
  },
  {
    id: 2,
    image: '/assets/onboarding_3.png',
    titleHi: 'Doctor ko dikhao, ek second mein.',
    descHi: 'Share your complete health summary with any doctor, anywhere. No papers needed.',
    titleEn: 'Share with any doctor, instantly.',
  }
];

export const Onboarding: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const skip = () => {
    navigate('/profile-setup');
  };

  return (
    <div className="onboarding-container">
      <div 
        className="onboarding-slider" 
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="onboarding-slide">
            <div className="onboarding-image-container">
              <img src={slide.image} alt={slide.titleEn} className="onboarding-image" />
            </div>
            
            <div className="onboarding-content">
              <div className="onboarding-text-area">
                <h2 className="onboarding-title-hi">{slide.titleHi}</h2>
                <p className="onboarding-desc-hi">{slide.descHi}</p>
                <button className="text-btn text-secondary font-bold" onClick={() => navigate('/profile-setup')}>Skip</button>
                <p className="onboarding-title-en">{slide.titleEn}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="onboarding-controls">
        <div className="onboarding-dots">
          {slides.map((_, index) => (
            <div 
              key={index} 
              className={`dot ${index === currentSlide ? 'active' : ''}`} 
            />
          ))}
        </div>

        <div className="onboarding-actions">
          {currentSlide < slides.length - 1 ? (
            <div className="action-buttons-split">
              <Button variant="ghost" onClick={skip} className="btn-skip" fullWidth={false}>
                Skip
              </Button>
              <Button onClick={nextSlide} fullWidth={false} className="btn-next">
                Next
              </Button>
            </div>
          ) : (
            <Button onClick={() => navigate('/profile-setup')} className="btn-start">
              Get Started
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
