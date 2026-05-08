import React, { useEffect, useState } from 'react';
import './BottomSheet.css';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  onClose,
  children,
  title
}) => {
  const [isRendered, setIsRendered] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
    } else {
      const timer = setTimeout(() => setIsRendered(false), 300); // match transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isRendered) return null;

  return (
    <>
      <div 
        className={`bottom-sheet-overlay ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
      />
      <div className={`bottom-sheet ${isOpen ? 'open' : ''}`}>
        <div className="bottom-sheet-handle-wrapper">
          <div className="bottom-sheet-handle"></div>
        </div>
        {title && <h2 className="bottom-sheet-title">{title}</h2>}
        <div className="bottom-sheet-content">
          {children}
        </div>
      </div>
    </>
  );
};
