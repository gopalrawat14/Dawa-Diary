import React, { useEffect, useState } from 'react';
import { Heart, Stethoscope } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './SplashScreen.css';

export const SplashScreen: React.FC = () => {
  const navigate = useNavigate();
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Start fade out at 2.2s, finish and navigate at 2.5s
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2200);

    const finishTimer = setTimeout(() => {
      navigate('/language');
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [navigate]);

  return (
    <div className={`splash-container ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="splash-content">
        <div className="splash-logo-wrapper">
          <Heart className="splash-icon splash-icon-heart" fill="white" />
          <Stethoscope className="splash-icon splash-icon-steth" />
        </div>
        <h1 className="splash-title">Dawa Diary</h1>
        <p className="splash-tagline-hi">Aapki Sehat, Aapke Haath Mein</p>
        <p className="splash-tagline-en">(Your Health, In Your Hands)</p>
      </div>
      
      <div className="splash-loader">
        <div className="splash-pulse-ring"></div>
        <div className="splash-pulse-ring delay"></div>
      </div>
    </div>
  );
};
