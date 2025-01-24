"use client";
import { useLanguage } from '@/contexts/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded ${
          language === 'en' 
            ? 'bg-green-600 text-white' 
            : 'text-green-700 hover:bg-green-50'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('ja')}
        className={`px-2 py-1 rounded ${
          language === 'ja' 
            ? 'bg-green-600 text-white' 
            : 'text-green-700 hover:bg-green-50'
        }`}
      >
        日本語
      </button>
    </div>
  );
} 