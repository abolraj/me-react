import { useState, useEffect, useCallback } from 'react';

export const useTheme = () => {
    const [darkMode, setDarkMode] = useState(null);

    // Get initial theme from localStorage or system preference
    useEffect(() => {
        if (darkMode === null) {
            const savedTheme = localStorage.getItem('theme');
            // debugger;
            if (savedTheme) {
                // Use saved theme from localStorage
                setDarkMode(savedTheme == 'dark');
            } else {
                // Use system preference as default
                const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                setDarkMode(systemPrefersDark);

            }
        }else{
            if (darkMode) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
        }

    }, [darkMode]);

    // Apply theme class to document element
    // useEffect(() => {
    // }, [darkMode]);

    // Toggle theme function
    const toggleTheme = useCallback(() => {
        setDarkMode(prev => !prev);
    }, []);

    // Set specific theme function
    const setTheme = useCallback((theme) => {
        setDarkMode(theme === 'dark');
    }, []);

    // Get current theme
    const getCurrentTheme = useCallback(() => {
        return darkMode ? 'dark' : 'light';
    }, [darkMode]);

    return {
        darkMode,
        toggleTheme,
        setTheme,
        getCurrentTheme,
        currentTheme: getCurrentTheme()
    };
};