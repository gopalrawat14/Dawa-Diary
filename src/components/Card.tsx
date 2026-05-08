import React from 'react';
import './Card.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  padding = 'md', 
  className = '', 
  ...props 
}) => {
  return (
    <div className={`card card-pad-${padding} ${className}`} {...props}>
      {children}
    </div>
  );
};
