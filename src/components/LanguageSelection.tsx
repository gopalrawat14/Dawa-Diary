import React from 'react';
import { Button } from './Button';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import './LanguageSelection.css';

const languages = [
  { id: 'hi', flag: '🇮🇳', native: 'हिंदी', transliteration: 'Hindi' },
  { id: 'en', flag: '🇮🇳', native: 'English', transliteration: 'English' },
  { id: 'ta', flag: '🇮🇳', native: 'தமிழ்', transliteration: 'Tamil' },
  { id: 'te', flag: '🇮🇳', native: 'తెలుగు', transliteration: 'Telugu' },
  { id: 'bn', flag: '🇮🇳', native: 'বাংলা', transliteration: 'Bengali' },
  { id: 'mr', flag: '🇮🇳', native: 'मराठी', transliteration: 'Marathi' },
  { id: 'kn', flag: '🇮🇳', native: 'ಕನ್ನಡ', transliteration: 'Kannada' },
  { id: 'gu', flag: '🇮🇳', native: 'ગુજરાતી', transliteration: 'Gujarati' },
] as const;

export const LanguageSelection: React.FC = () => {
  const { language, setLanguage } = useAppContext();
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/onboarding');
  };

  return (
    <div className="lang-container">
      <div className="lang-header">
        <h1 className="lang-title-hi">Apni bhasha chuniye</h1>
        <h2 className="lang-title-en">Choose your language</h2>
        <p className="lang-subtitle">App aapki pasand ki bhasha mein chalegi</p>
      </div>

      <div className="lang-grid">
        {languages.map((lang) => {
          const isSelected = language === lang.id;
          return (
            <div 
              key={lang.id}
              className={`lang-card ${isSelected ? 'selected' : ''}`}
              onClick={() => setLanguage(lang.id)}
            >
              <div className="lang-card-content">
                <span className="lang-flag">{lang.flag}</span>
                <span className="lang-native">{lang.native}</span>
                <span className="lang-trans">{lang.transliteration}</span>
              </div>
              {isSelected && (
                <div className="lang-check">
                  <Check size={16} color="white" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="lang-footer">
        <Button onClick={handleContinue} className="btn-continue">
          Continue
        </Button>
        <p className="lang-note">Aap baad mein bhi bhasha badal sakte hain</p>
      </div>
    </div>
  );
};
