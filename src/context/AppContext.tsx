import React, { createContext, useContext, useState } from 'react';

type Language = 'hi' | 'en' | 'ta' | 'te' | 'bn' | 'mr' | 'kn' | 'gu';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  userName: string;
  setUserName: (name: string) => void;
  gender: string;
  setGender: (gender: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem('app_language') as Language) || 'hi';
  });
  const [userName, setUserNameState] = useState(() => {
    return localStorage.getItem('user_name') || '';
  });
  const [gender, setGenderState] = useState(() => {
    return localStorage.getItem('user_gender') || '';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('app_language', lang);
  };

  const setUserName = (name: string) => {
    setUserNameState(name);
    localStorage.setItem('user_name', name);
  };

  const setGender = (g: string) => {
    setGenderState(g);
    localStorage.setItem('user_gender', g);
  };

  return (
    <AppContext.Provider value={{ language, setLanguage, userName, setUserName, gender, setGender }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
