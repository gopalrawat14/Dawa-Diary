import React, { useState } from 'react';
import { User } from 'lucide-react';
import './Header.css';

interface HeaderProps {
  userName?: string;
}

export const Header: React.FC<HeaderProps> = ({ userName = 'Rajesh' }) => {
  const [lang, setLang] = useState<'EN' | 'HI'>('EN');

  const toggleLang = () => {
    setLang(prev => prev === 'EN' ? 'HI' : 'EN');
  };

  return (
    <header className="app-header-home">
      <div className="header-top-row">
        <div className="header-user-info">
          <div className="header-avatar">
            <User size={20} color="#6B7280" />
          </div>
          <h1 className="header-greeting">Namaste, {userName} 👋</h1>
        </div>
        
        <button 
          className="language-toggle" 
          onClick={toggleLang}
          aria-label="Toggle Language"
        >
          <span className={`lang-opt ${lang === 'EN' ? 'active' : ''}`}>EN</span>
          <span className="lang-divider">|</span>
          <span className={`lang-opt ${lang === 'HI' ? 'active' : ''}`}>हिं</span>
        </button>
      </div>
      
      <p className="header-subtitle">Aaj kya dekhna hai?</p>
    </header>
  );
};
