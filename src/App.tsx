import React, { useState } from 'react';
import Background from './Background';
import Character from './Character';
import AudioPlayer from './AudioPlayer';
import UIOverlay from './UIOverlay';
import ThemeToggle from './ThemeToggle';

const App = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [theme, setTheme] = useState('light');

    const togglePlay = () => {
        setIsPlaying(prev => !prev);
    };

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light')); 
    };

    return (
        <div className={`app ${theme}`}>  
            <Background />
            <Character />
            <AudioPlayer isPlaying={isPlaying} togglePlay={togglePlay} />
            <UIOverlay />
            <ThemeToggle toggleTheme={toggleTheme} currentTheme={theme} />
        </div>
    );
};

export default App;
