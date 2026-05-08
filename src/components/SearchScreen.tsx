import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Search, Mic, SlidersHorizontal, Clock, FileText, FileImage, Stethoscope } from 'lucide-react';
import './SearchScreen.css';

interface SearchScreenProps {
  onBack: () => void;
  onOpenFilters: () => void;
}

// Mock categories for chips
const CATEGORIES = ['Doctor', 'Medicine', 'Condition', 'Date', 'Hospital'];

export const SearchScreen: React.FC<SearchScreenProps> = ({ onBack, onOpenFilters }) => {
  const [query, setQuery] = useState('');
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Autofocus input on load
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleVoiceSearch = () => {
    setIsVoiceActive(true);
    setQuery('');
    // Simulate voice recording for 3 seconds, then "recognize" query
    setTimeout(() => {
      setIsVoiceActive(false);
      setQuery('Apollo Hospital');
      setShowResults(true);
    }, 3000);
  };

  const handleTextSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (e.target.value.length > 2) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  return (
    <div className="search-screen-overlay">
      
      {/* Search Header */}
      <div className="search-top-bar">
        <button className="icon-btn" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        
        <div className="search-input-container">
          <Search size={18} color="#94A3B8" className="search-icon-inline" />
          <input 
            ref={inputRef}
            type="text" 
            placeholder="Kya dhundh rahe hain?"
            value={query}
            onChange={handleTextSearch}
            className="search-main-input"
          />
          <button className="mic-btn" onClick={handleVoiceSearch}>
            <Mic size={20} color={isVoiceActive ? 'var(--color-error)' : 'var(--color-primary)'} />
          </button>
        </div>

        <button className="icon-btn" onClick={onOpenFilters}>
          <SlidersHorizontal size={20} color="var(--color-text-secondary)" />
        </button>
      </div>

      {/* Voice Active Overlay */}
      {isVoiceActive && (
        <div className="voice-search-active">
          <div className="waveform-container">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <p>Bol rahe hain...</p>
        </div>
      )}

      {/* Search Content Body */}
      <div className="search-body">
        
        {!showResults && !isVoiceActive && (
          <>
            <section className="search-section">
              <h3 className="search-section-title">Recent Searches</h3>
              <div className="recent-chips">
                <div className="recent-chip"><Clock size={12} /> Dr. Sharma <span className="dismiss">×</span></div>
                <div className="recent-chip"><Clock size={12} /> CBC Test <span className="dismiss">×</span></div>
                <div className="recent-chip"><Clock size={12} /> Metformin <span className="dismiss">×</span></div>
              </div>
            </section>

            <section className="search-section">
              <h3 className="search-section-title">Categories</h3>
              <div className="category-chips">
                {CATEGORIES.map(cat => (
                  <button key={cat} className="cat-chip">{cat}</button>
                ))}
              </div>
            </section>
          </>
        )}

        {showResults && !isVoiceActive && (
          <div className="search-results-container">
            <div className="results-count">3 results mile</div>
            
            <div className="result-group">
              <div className="result-group-header">Hospitals</div>
              
              <div className="result-item">
                <div className="result-icon bg-blue"><Stethoscope size={18} color="white" /></div>
                <div className="result-details">
                  <div className="result-title"><mark>Apollo Hospital</mark> Discharge Summary</div>
                  <div className="result-meta">12 May 2026 • Dr. Mehta</div>
                </div>
              </div>

              <div className="result-item">
                <div className="result-icon bg-orange"><FileText size={18} color="white" /></div>
                <div className="result-details">
                  <div className="result-title"><mark>Apollo Hospital</mark> Prescription</div>
                  <div className="result-meta">10 Mar 2026 • Dr. Sharma</div>
                </div>
              </div>
            </div>

            <div className="result-group">
              <div className="result-group-header">Lab Reports</div>
              
              <div className="result-item">
                <div className="result-icon bg-purple"><FileImage size={18} color="white" /></div>
                <div className="result-details">
                  <div className="result-title">Blood Test (<mark>Apollo</mark> Labs)</div>
                  <div className="result-meta">05 Jan 2026</div>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
