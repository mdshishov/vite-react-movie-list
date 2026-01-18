import { useState, useEffect } from 'react';
import '../css/ThemeToggle.css';
import SunIcon from './icons/Sun'

const ThemeToggle = () => {
  const themePref = window.matchMedia('(prefers-color-scheme: dark)').matches
  const stored = localStorage.getItem('isDark')
  const [isDark, setIsDark] = useState( stored ? JSON.parse(stored) : themePref)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
    localStorage.setItem('isDark', isDark)
  }, [isDark])

  const toggleTheme = () => {
    setIsDark((isDark) => !isDark)
  }

  return (
    <button className={`theme-toggle ${isDark ? 'dark' : ''}`} onClick={toggleTheme}>
      <SunIcon />
    </button>
  );
};

export default ThemeToggle;