import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import './index.css';
import App from './App.jsx';
import Welcome from './Welcome.jsx';
import Warning from './Warning.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/feat-of-a-woman">
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/warning" element={<Warning />} />
        <Route path="/game" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
