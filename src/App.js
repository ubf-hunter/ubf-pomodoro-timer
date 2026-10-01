import { useCallback, useEffect, useRef, useState } from 'react';

// SVG Icons
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

const ResetIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </svg>
);

const SkipIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
  </svg>
);

const SettingsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const LogoIcon = () => (
  <img
    src="/LogoBlue.png"
    alt="UBF Logo"
    style={{ width: '100%', height: '100%' }}
  />
);

// Timer modes configuration
const MODES = {
  work: { name: 'Focus', defaultMinutes: 25 },
  break: { name: 'Pause', defaultMinutes: 5 },
  'long-break': { name: 'Long Break', defaultMinutes: 15 },
};

// Preset durations for quick selection
const PRESETS = {
  work: [15, 20, 25, 30, 45, 60, 90],
  break: [3, 5, 10, 15],
  'long-break': [10, 15, 20, 30],
};

// Custom hook for audio
const useAudio = () => {
  const audioContextRef = useRef(null);

  const playSound = useCallback((type = 'complete') => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext ||
          window.webkitAudioContext)();
      }

      const ctx = audioContextRef.current;
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      if (type === 'complete') {
        // Completion sound - pleasant ascending tone
        oscillator.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        oscillator.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1); // E5
        oscillator.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2); // G5
        gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
        gainNode.gain.exponentialDecayTo = 0.01;
        gainNode.gain.setValueAtTime(0.01, ctx.currentTime + 0.5);
      } else {
        // Click sound
        oscillator.frequency.setValueAtTime(800, ctx.currentTime);
        gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
        gainNode.gain.setValueAtTime(0.01, ctx.currentTime + 0.05);
      }

      oscillator.type = 'sine';
      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.5);
    } catch (e) {
      console.log('Audio not supported');
    }
  }, []);

  return { playSound };
};

function App() {
  // Settings state
  const [settings, setSettings] = useState({
    workMinutes: 25,
    breakMinutes: 5,
    longBreakMinutes: 15,
    sessionsUntilLongBreak: 4,
  });

  // Timer state
  const [mode, setMode] = useState('work');
  const [timeLeft, setTimeLeft] = useState(settings.workMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [completedSessions, setCompletedSessions] = useState(0);
  const [totalFocusTime, setTotalFocusTime] = useState(0);

  // UI state
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    message: '',
    type: '',
  });
  const [isCompleted, setIsCompleted] = useState(false);
  const [showDurationPicker, setShowDurationPicker] = useState(false);
  const [customDuration, setCustomDuration] = useState('');

  const { playSound } = useAudio();
  const intervalRef = useRef(null);

  // Get current mode duration
  const getModeDuration = useCallback(
    (modeType) => {
      switch (modeType) {
        case 'work':
          return settings.workMinutes * 60;
        case 'break':
          return settings.breakMinutes * 60;
        case 'long-break':
          return settings.longBreakMinutes * 60;
        default:
          return settings.workMinutes * 60;
      }
    },
    [settings]
  );

  // Show notification
  const showNotification = useCallback((message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, show: false }));
    }, 3000);
  }, []);

  // Handle mode change
  const handleModeChange = useCallback(
    (newMode) => {
      setMode(newMode);
      setTimeLeft(getModeDuration(newMode));
      setIsRunning(false);
      setShowDurationPicker(false);
    },
    [getModeDuration]
  );

  // Handle duration selection
  const selectDuration = (minutes) => {
    setTimeLeft(minutes * 60);
    setShowDurationPicker(false);
    setCustomDuration('');
    // Update settings for the current mode
    if (mode === 'work') {
      setSettings((prev) => ({ ...prev, workMinutes: minutes }));
    } else if (mode === 'break') {
      setSettings((prev) => ({ ...prev, breakMinutes: minutes }));
    } else {
      setSettings((prev) => ({ ...prev, longBreakMinutes: minutes }));
    }
  };

  // Handle custom duration input
  const handleCustomDuration = (e) => {
    e.preventDefault();
    const minutes = parseInt(customDuration, 10);
    if (minutes > 0 && minutes <= 180) {
      selectDuration(minutes);
    }
  };

  // Toggle duration picker
  const toggleDurationPicker = () => {
    if (!isRunning) {
      setShowDurationPicker(!showDurationPicker);
    }
  };

  // Handle timer completion
  const handleCompletion = useCallback(() => {
    setIsRunning(false);
    setIsCompleted(true);
    playSound('complete');

    setTimeout(() => setIsCompleted(false), 500);

    if (mode === 'work') {
      const newCompletedSessions = completedSessions + 1;
      setCompletedSessions(newCompletedSessions);
      setTotalFocusTime((prev) => prev + settings.workMinutes);

      // Check if long break is needed
      if (newCompletedSessions % settings.sessionsUntilLongBreak === 0) {
        showNotification('🎉 Great work! Time for a long break!', 'break');
        handleModeChange('long-break');
      } else {
        showNotification('✅ Session complete! Take a short break.', 'break');
        handleModeChange('break');
      }
    } else {
      showNotification('🚀 Break over! Ready to focus?', 'work');
      handleModeChange('work');
    }
  }, [
    mode,
    completedSessions,
    settings,
    playSound,
    showNotification,
    handleModeChange,
  ]);

  // Timer effect
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      handleCompletion();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, timeLeft, handleCompletion]);

  // Update document title
  useEffect(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const timeString = `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
    document.title = isRunning
      ? `${timeString} - ${MODES[mode].name}`
      : 'Ubf Pomodoro';
  }, [timeLeft, isRunning, mode]);

  // Control functions
  const toggleTimer = () => {
    setIsRunning(!isRunning);
    setShowDurationPicker(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(getModeDuration(mode));
    setShowDurationPicker(false);
  };

  const skipTimer = () => {
    handleCompletion();
  };

  // Settings handlers
  const handleSettingChange = (key, value) => {
    const numValue = parseInt(value, 10);
    if (numValue > 0 && numValue <= 120) {
      setSettings((prev) => ({ ...prev, [key]: numValue }));

      // Update current timer if changing current mode's duration
      if (key === 'workMinutes' && mode === 'work' && !isRunning) {
        setTimeLeft(numValue * 60);
      } else if (key === 'breakMinutes' && mode === 'break' && !isRunning) {
        setTimeLeft(numValue * 60);
      } else if (
        key === 'longBreakMinutes' &&
        mode === 'long-break' &&
        !isRunning
      ) {
        setTimeLeft(numValue * 60);
      }
    }
  };

  // Format time display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
  };

  // Calculate progress for ring
  const totalDuration = getModeDuration(mode);
  const progress = ((totalDuration - timeLeft) / totalDuration) * 100;
  const circumference = 2 * Math.PI * 140; // radius = 140
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="app">
      <div className="container">
        {/* Header */}
        <header className="header">
          <div className="logo">
            <div className="logo-icon">
              <LogoIcon />
            </div>
            <h1>Ubf Pomodoro</h1>
          </div>
          <p className="tagline">Focus · Flow · Achieve</p>
        </header>

        {/* Mode Selector */}
        <div className="mode-selector">
          {Object.entries(MODES).map(([key, { name }]) => (
            <button
              key={key}
              className={`mode-btn ${key} ${mode === key ? 'active' : ''}`}
              onClick={() => handleModeChange(key)}
            >
              <span>{name}</span>
            </button>
          ))}
        </div>

        {/* Timer Display */}
        <div className="timer-section">
          <div
            className={`timer-ring-container ${isRunning ? 'running' : ''} ${
              isCompleted ? 'completed' : ''
            } ${!isRunning ? 'clickable' : ''}`}
            onClick={toggleDurationPicker}
            title={!isRunning ? 'Cliquez pour changer la durée' : ''}
          >
            <svg className="timer-ring" viewBox="0 0 300 300">
              <defs>
                <linearGradient
                  id="gradient-work"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#ff6b35" />
                  <stop offset="100%" stopColor="#ff8c5a" />
                </linearGradient>
                <linearGradient
                  id="gradient-break"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#00d9a5" />
                  <stop offset="100%" stopColor="#33e6b8" />
                </linearGradient>
                <linearGradient
                  id="gradient-long-break"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#7c5cff" />
                  <stop offset="100%" stopColor="#9b7fff" />
                </linearGradient>
              </defs>
              <circle className="timer-ring-bg" cx="150" cy="150" r="140" />
              <circle
                className={`timer-ring-progress ${mode}`}
                cx="150"
                cy="150"
                r="140"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
              />
            </svg>
            <div className="timer-content">
              <div className={`timer-display ${mode}`}>
                {formatTime(timeLeft)}
              </div>
              <div className="timer-label">
                {MODES[mode].name}
                {!isRunning && (
                  <span className="edit-hint"> • Cliquez pour modifier</span>
                )}
              </div>
            </div>
          </div>

          {/* Duration Picker */}
          {showDurationPicker && (
            <div className="duration-picker">
              <div className="duration-picker-header">
                <span>Choisir une durée ({MODES[mode].name})</span>
                <button
                  className="duration-picker-close"
                  onClick={() => setShowDurationPicker(false)}
                >
                  <CloseIcon />
                </button>
              </div>
              <div className="duration-presets">
                {PRESETS[mode].map((minutes) => (
                  <button
                    key={minutes}
                    className={`duration-preset-btn ${
                      timeLeft === minutes * 60 ? 'active' : ''
                    }`}
                    onClick={() => selectDuration(minutes)}
                  >
                    {minutes} min
                  </button>
                ))}
              </div>
              <div className="duration-custom">
                <span className="duration-custom-label">
                  Ou entrez une durée personnalisée :
                </span>
                <form
                  onSubmit={handleCustomDuration}
                  className="duration-custom-form"
                >
                  <input
                    type="number"
                    className="duration-custom-input"
                    placeholder="Ex: 45"
                    value={customDuration}
                    onChange={(e) => setCustomDuration(e.target.value)}
                    min="1"
                    max="180"
                  />
                  <span className="duration-custom-unit">min</span>
                  <button type="submit" className="duration-custom-btn">
                    OK
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>

        {/* Control Buttons */}
        <div className="controls">
          <button
            className="control-btn secondary"
            onClick={resetTimer}
            title="Reset"
          >
            <ResetIcon />
          </button>
          <button
            className={`control-btn primary ${mode}`}
            onClick={toggleTimer}
          >
            {isRunning ? <PauseIcon /> : <PlayIcon />}
          </button>
          <button
            className="control-btn secondary"
            onClick={skipTimer}
            title="Skip"
          >
            <SkipIcon />
          </button>
        </div>

        {/* Session Info */}
        <div className="session-info">
          <div className="session-stat">
            <div className="session-stat-value">{completedSessions}</div>
            <div className="session-stat-label">Sessions</div>
          </div>
          <div className="session-stat">
            <div className="session-stat-value">{totalFocusTime}</div>
            <div className="session-stat-label">Minutes</div>
          </div>
          <div className="session-stat">
            <div className="session-stat-value">
              {completedSessions % settings.sessionsUntilLongBreak}/
              {settings.sessionsUntilLongBreak}
            </div>
            <div className="session-stat-label">Until Long Break</div>
          </div>
        </div>
      </div>

      {/* Settings Button */}
      <button
        className="settings-toggle"
        onClick={() => setSettingsOpen(true)}
        title="Settings"
      >
        <SettingsIcon />
      </button>

      {/* Settings Overlay */}
      <div
        className={`settings-overlay ${settingsOpen ? 'open' : ''}`}
        onClick={() => setSettingsOpen(false)}
      />

      {/* Settings Panel */}
      <div className={`settings-panel ${settingsOpen ? 'open' : ''}`}>
        <div className="settings-header">
          <h2>Settings</h2>
          <button
            className="settings-close"
            onClick={() => setSettingsOpen(false)}
          >
            <CloseIcon />
          </button>
        </div>

        <div className="settings-group">
          <div className="settings-group-title">Timer Duration (minutes)</div>
          <div className="setting-item">
            <span className="setting-label">Focus</span>
            <input
              type="number"
              className="setting-input"
              value={settings.workMinutes}
              onChange={(e) =>
                handleSettingChange('workMinutes', e.target.value)
              }
              min="1"
              max="120"
            />
          </div>
          <div className="setting-item">
            <span className="setting-label">Short Break</span>
            <input
              type="number"
              className="setting-input"
              value={settings.breakMinutes}
              onChange={(e) =>
                handleSettingChange('breakMinutes', e.target.value)
              }
              min="1"
              max="60"
            />
          </div>
          <div className="setting-item">
            <span className="setting-label">Long Break</span>
            <input
              type="number"
              className="setting-input"
              value={settings.longBreakMinutes}
              onChange={(e) =>
                handleSettingChange('longBreakMinutes', e.target.value)
              }
              min="1"
              max="60"
            />
          </div>
        </div>

        <div className="settings-group">
          <div className="settings-group-title">Sessions</div>
          <div className="setting-item">
            <span className="setting-label">Sessions until long break</span>
            <input
              type="number"
              className="setting-input"
              value={settings.sessionsUntilLongBreak}
              onChange={(e) =>
                handleSettingChange('sessionsUntilLongBreak', e.target.value)
              }
              min="1"
              max="10"
            />
          </div>
        </div>
      </div>

      {/* Notification */}
      <div
        className={`notification ${notification.show ? 'show' : ''} ${
          notification.type
        }`}
      >
        {notification.message}
      </div>
      {/* Footer SEO / Liens Légaux */}
      <footer
        style={{
          textAlign: 'center',
          padding: 'var(--space-lg) 0 var(--space-md) 0',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
        }}
      >
        <p>
          Un outil développé par{' '}
          <a
            href="https://uwayo-beni.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--accent-work)', textDecoration: 'none' }}
          >
            Uwayo Beni
          </a>
          .
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--space-md)',
            marginTop: '4px',
          }}
        >
          <a
            href="#mentions-legales"
            style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
          >
            Mentions légales
          </a>
          <span>•</span>
          <a
            href="#politique-confidentialite"
            style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
          >
            Politique de confidentialité
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
